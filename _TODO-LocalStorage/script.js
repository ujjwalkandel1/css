document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.getElementById("todo-input");
    const addTaskButton = document.getElementById("add-task-btn");
    const todoList = document.getElementById("todo-list");
    
    let tasks = JDON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach((task) => renderTask(task));
    
    addTaskButton.addEventListener('click', () => {
        const taskText = todoInput.value.trim()
        if(taskText === "") return;
    
        const newTask = {
            id:Date.now(),
            text: taskText,
            completed: false,
        };
    
        tasks.push(newTask);
        todoInput.value = "";  //clear input
        console.log(tasks);
});

function renderTask(task) {
    console.log(task.text);
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
});