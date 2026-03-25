// Crea una página con un botón que diga "Contar clics" y un texto inicial que muestre "Clics: 0". Cada
//vez que se haga clic en el botón, el texto debe actualizarse para mostrar el número total de clics
//realizados.

// Obtener referencias a los elementos del DOM
const clickButton = document.getElementById(`clickButton`);
const clickCountDisplay = document.getElementById(`clickCount`);

// Inicializar el contador de clics
let clickCount = 0; 
// Agregar un evento de clic al botón
clickButton.addEventListener(`click`,() => {
    // Incrementar el contador de clics
    clickCount ++; 
    // Actualizar el texto para mostrar el número de clics
    clickCountDisplay.textContent = `Clicks: ${clickCount}`;
    })
