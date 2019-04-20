# CSC 210

## Assignment: Real-Time Web - Task List

### Assignment Duration: One Week

### Available points: 10 + 2 Bonus

# Requirements

Building a shared task management system

# Client Requirements

-    You must create an HTML page with
     -    Form elements to capture
          -    TaskTitle
          -    AssignedTo
     -    Button to send data to the server
     -    List or Table to show the data pushed from the server

# Server Requirements

-    You must use SignalR
-    You must create a hub for incoming/outgoing messages to be routed
-    You do not need to use a database to persist data, a static list in memory is fine for this assignment
-    AddTask
     -    You must provide a method to add a task to your collection
-    CompleteTask
     -    You must be able to complete a task by passing a task id to the server to remove from the collection.
-    SendAllTasks
     -    You must provide a means for sending all of the tasks in the list to all of the clients connected.

# Bonus (2pts)

## Groups

-    Utilize groups to create many task boards
-    Add a means for the user to supply their name and show who them as the CreatedBy author of the task
