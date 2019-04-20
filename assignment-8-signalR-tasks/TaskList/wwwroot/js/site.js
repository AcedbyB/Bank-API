"use strict";

var connection = new signalR.HubConnectionBuilder().withUrl("/taskHub").build();

//Disable send button until connection is established
document.getElementById("sendButton").disabled = true;

connection.on("ReceiveTask", function (user, task, assignedTo) {
    console.log("dmm");
    var li = document.createElement("li");
    var creator = document.createElement("p");
    creator.textContent = ("Created By: " + user);
    var taskContent = document.createElement("p");
    taskContent.textContent = ("Task: " + task);
    var target = document.createElement("p");
    target.textContent = ("Assigned To: " + assignedTo );
    var doneButton = document.createElement("button");
    doneButton.textContent = "Done";
    li.setAttribute("class", "list-group-item")
    li.appendChild(creator);
    li.appendChild(taskContent);
    li.append(target);
    li.append(doneButton);
    doneButton.onclick = function() {
        var index = Array.from(this.parentElement.parentElement.children).indexOf(this.parentElement);
        console.log(index);
        connection.invoke("CompleteTask",index).catch(function (err) {
            return console.error(err.toString());
        });
    }
    document.getElementById("board").appendChild(li);
});

connection.on("CompleteTask", function (index) {
    console.log("delete " + index);
    var ul = document.getElementById("board");
    ul.removeChild(ul.childNodes[index+1]);
});

connection.start().then(function () {
    document.getElementById("sendButton").disabled = false;
}).catch(function (err) {
    return console.error(err.toString());
});


document.getElementById("sendButton").addEventListener("click", function (event) {
    var user = document.getElementById("user").value;
    var task = document.getElementById("task").value;
    var target = document.getElementById("target").value;
    connection.invoke("SendTask", user, task, target).catch(function (err) {
        return console.error(err.toString());
    });
    event.preventDefault();
});
