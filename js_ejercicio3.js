/*
Crea una página con un campo de texto, un botón que diga "Agregar", y una lista vacía debajo.
● Cuando el usuario escriba un texto y haga clic en "Agregar", el texto debe añadirse como un
nuevo elemento de la lista.
● Añade un botón al lado de cada elemento para eliminarlo de la lista.
*/

// Obtener referencias a los elementos del DOM
const newText = document.getElementById(`myinput`);
const myList = document.getElementById(`mylist`);
// Agregar un evento de clic al botón  
document.querySelector(`button`).addEventListener("click" ,() => {
    myList.innerHTML += `<li> ${newText.value} <button class ="delete-button">Eliminar</button></li>`;
    newText.value = ``;
    // Agregar un evento de clic a los botones de eliminación
    const deleteButton = document.querySelectorAll(`.delete-button`); 
    deleteButton.forEach (button => {
        button.addEventListener('click', () => {
            button.parentElement.remove(); 
        });
    });
}); 