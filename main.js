function addTask() {
    var input = document.getElementById("taskInput");
    var task = input.value.trim();

    if (task !== "") {
        var taskList = document.getElementById("taskList");

        var li = document.createElement("li");
        li.textContent = task;

        var completedButton = document.createElement("button");
        completedButton.textContent = "✅";
        completedButton.onclick = function() {
            li.classList.toggle("completed");
        };

        li.appendChild(completedButton);

        taskList.appendChild(li);

        input.value = "";
    }
}


function removeCompleted() {
    var taskList = document.getElementById("taskList");
    var tasks = taskList.getElementsByTagName("li");

    for (var i = 0; i < tasks.length; i++) {
        var task = tasks[i];
        if (task.classList.contains("completed")) {
            task.remove();
        }
    }
}


document.getElementById("taskList").addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("selected");
    }
});

