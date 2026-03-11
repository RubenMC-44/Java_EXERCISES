/* 
Ejercicio:
Crea una página con dos campos de entrada de números y cuatro botones: "Sumar", "Restar",
"Multiplicar", y "Dividir".
● Al hacer clic en cualquiera de los botones, debe mostrarse el resultado de la operación en un
área de texto o debajo de los botones.
● Asegúrate de validar los datos para evitar errores (como división por cero o entradas vacías).
*/
let num1Input = document.getElementById('input1');
let num2Input = document.getElementById('input2');
let resultDiv = document.getElementById('resultadoValor');
let sumarButton = document.getElementById('sumar').addEventListener('click', sumar);
let restarButton = document.getElementById('restar').addEventListener('click', restar);
let multiplicarButton = document.getElementById('multiplicar').addEventListener('click', multiplicar);
let dividirButton = document.getElementById('dividir').addEventListener('click', dividir);


function validateInputs() {
    let num1 = parseFloat(num1Input.value);
    let num2 = parseFloat(num2Input.value);
    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.textContent = 'Por favor, ingresa números válidos.';
        return null;                    
    }
    return { num1, num2 };
}
function sumar() {
    let nums =validateInputs(); 
    if (nums) {
        let resultado = nums.num1 + nums.num2;
        resultDiv.textContent = `Resultado: ${resultado}`;
        }
    }

function restar() {
    let nums =validateInputs(); 
    if (nums) {
        let resultado = nums.num1 - nums.num2;
        resultDiv.textContent = `Resultado: ${resultado}`;
        }
    }

    function multiplicar() {
    let nums =validateInputs(); 
    if (nums) {
        let resultado = nums.num1 * nums.num2;
        resultDiv.textContent = `Resultado: ${resultado}`;
        }
    }

    function dividir() {
    let nums =validateInputs(); 
    if (nums) {
        if (nums.num2 === 0) {
            resultDiv.textContent = 'Error: No se puede dividir por cero.';
            return;
    }else {
        let resultado = nums.num1 / nums.num2;
        resultDiv.textContent = `Resultado: ${resultado}`;  
        }
    }
}