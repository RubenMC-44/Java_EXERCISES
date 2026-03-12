/*
crea una aplicación de lista de tareas.
• Cada tarea debe incluir un texto y un checkbox para marcarla como completada.
• Las tareas se deben guardar en localStorage para que persistan incluso si la página se recarga.
• Debe incluir un botón para limpiar todas las tareas completadas y actualizar el localStorage.
*/ 
// Obtener elementos del DOM
const inputTarea = document.getElementById('inputTarea');
const agregarTareaButton = document.getElementById('btnAgregar');
const listaTareas = document.getElementById('listaTareas');
const botonLimpiarCompletadas = document.getElementById('btnLimpiar');
// Cargar tareas desde localStorage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
tasks.forEach(task => addTaskToDOM(task));
// Función para agregar tarea al DOM
function addTaskToDOM(task) {
    const li = document.createElement('li');
    li.innerHTML = `
        <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTask(${task.id})">
        <span ${task.completed ? 'style="text-decoration: line-through;"' : ''}>${task.text}</span>
        <button onclick="deleteTask(${task.id})">Eliminar</button>
    `;
    listaTareas.appendChild(li);
}
// Función para agregar tarea
agregarTareaButton.addEventListener('click', () => {
    const text = inputTarea.value.trim();
    if (text) {
        const newTask = { id: Date.now(), text, completed: false };
        tasks.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        addTaskToDOM(newTask);
        inputTarea.value = '';
    }
});
// Función para alternar estado de tarea
function toggleTask(id) {   
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        refreshTaskList();
    }   
}
// Función para eliminar tarea
function deleteTask(id) {       
    tasks = tasks.filter(t => t.id !== id); 
    localStorage.setItem('tasks', JSON.stringify(tasks));
    refreshTaskList();
}
// Función para limpiar tareas completadas
botonLimpiarCompletadas.addEventListener('click', () => {
    tasks = tasks.filter(t => !t.completed);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    refreshTaskList();
} 
);
// Función para refrescar la lista de tareas en el DOM
function refreshTaskList() {
    listaTareas.innerHTML = '';
    tasks.forEach(task => addTaskToDOM(task));
}

