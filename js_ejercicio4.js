/* 
Ejercicio:
Crea una página con un campo de texto y una lista predefinida de elementos.
● Mientras el usuario escribe en el campo, la lista debe actualizarse en tiempo real para
mostrar solo los elementos que contienen el texto escrito.
Ejemplo: Si la lista contiene ["Perro", "Gato", "Pez"] y el usuario escribe "Ga", solo "Gato" debe
quedar visible.

*/

// Obtener referencias a los elementos del DOM
const input = document.getElementById('searchInput');
const listItems = document.querySelectorAll('#mylist li');

// Agregar un evento de escucha al campo de texto
input.addEventListener('input', () => {
    const searchTerm = input.value.toLowerCase(); // Obtener el texto ingresado y convertirlo a minúsculas
    listItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(searchTerm) ? 'block' : 'none';
    });
}); 

