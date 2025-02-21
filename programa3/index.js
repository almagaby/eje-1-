document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    let taskText = document.getElementById("task").value.trim();
    let taskDesc = document.getElementById("description").value.trim();

    if (!taskText || !taskDesc) return alert("Por favor, ingresa una tarea y su descripción.");

    let task = { text: taskText, desc: taskDesc, completed: false };
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    document.getElementById("task").value = "";
    document.getElementById("description").value = "";

    renderTasks();
}

function renderTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let pendingList = document.getElementById("pendingTasks");
    let completedList = document.getElementById("completedTasks");

    pendingList.innerHTML = "";
    completedList.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.className = "task" + (task.completed ? " completed" : "");
        li.innerHTML = `<span>${task.text}: ${task.desc}</span>
                        <button onclick="toggleComplete(${index})">✔</button>
                        <button onclick="deleteTask(${index})">❌</button>`;

        if (task.completed) {
            completedList.appendChild(li);
        } else {
            pendingList.appendChild(li);
        }
    });
}

function toggleComplete(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}

function deleteTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}

function loadTasks() {
    renderTasks();
}