/* 
Ejercicio:
Crea una página con un campo de entrada para especificar la longitud de una contraseña y un botón que
diga “Generar contraseña”.
• Al hacer clic en el botón, se debe mostrar una contraseña generada aleatoriamente usando
letras, números y caracteres especiales.
• Si la longitud es menor a 4 o el campo está vacío, muestra un mensaje de error indicando que la
longitud debe ser mayor o igual a 4
*/

let longuitudpasswordInput = document.getElementById('passwordLength');
let botonGenerar = document.getElementById('botongenerar').addEventListener('click', generarPassword);
let resultadoDiv = document.getElementById('resultado');    

function generarPassword() {
    let longuitud = parseInt(longuitudpasswordInput.value);
    if (isNaN(longuitud) || longuitud < 4) {
        resultadoDiv.textContent = 'Error: La longitud debe ser un número mayor o igual a 4.';
        return;
    }
    let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    let password = '';
    for (let i = 0; i < longuitud; i++) {
        let indice = Math.floor(Math.random() * caracteres.length);
        password += caracteres.charAt(indice);
    }
    resultadoDiv.textContent = 'Contraseña generada: ' + password; 
}