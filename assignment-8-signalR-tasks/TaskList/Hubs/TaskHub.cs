using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;
using System.Collections.Generic;
using System;

namespace TaskList.Hubs
{
    class myTask
    {
        public string user;
        public string task;
        public string assignedTo;

        public myTask(string u, string t, string v)
        {
            this.user = u;
            this.task = t;
            this.assignedTo = v;
        }
    }

    public class TaskHub : Hub
    {
        static List<myTask> list = new List<myTask>();
        public async Task SendTask(string user, string task, string assignedTo)
        {
            Console.WriteLine("new connection");
            list.Add(new myTask(user, task, assignedTo));
            await Clients.All.SendAsync("ReceiveTask", user, task, assignedTo);
        }

        public override async Task OnConnectedAsync()
        {
            foreach (myTask E in list)
            {
                await Clients.Caller.SendAsync("ReceiveTask", E.user, E.task, E.assignedTo);
            }
            await base.OnConnectedAsync();
        }

        public async Task CompleteTask(int index)
        {
            list.RemoveAt(index);
            await Clients.All.SendAsync("CompleteTask", index);
        }
    }
}