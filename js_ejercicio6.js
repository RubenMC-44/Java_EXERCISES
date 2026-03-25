/*
Objetivo del ejercicio: Practicar manejo de eventos, funciones de temporización y manipulación del
DOM.
Ejercicio:
Crea una página con un temporizador que comience en 00:00:00. Incluye tres botones: “Iniciar”, “Pausar”
y “Reiniciar”.
• Al hacer clic en “Iniciar”, el temporizador debe comenzar a contar los segundos, minutos y horas.
• “Pausar” detiene el conteo pero mantiene el tiempo actual.
• “Reiniciar” pone el temporizador en 00:00:00
*/


let horas = 0;
let minutos = 0;
let segundos = 0;
let temporizador;
document.getElementById("iniciar").addEventListener("click", iniciarTemporizador);
document.getElementById("pausar").addEventListener("click", pausarTemporizador);
document.getElementById("reiniciar").addEventListener("click", reiniciarTemporizador);

function iniciarTemporizador() {
    temporizador = setInterval(() => {
        segundos++
        document.getElementById("segundos").innerText = String(segundos).padStart(2, "0");
        ;
        if (segundos === 60) {
            segundos = 0;
            minutos++
            document.getElementById("minutos").innerText = String(minutos).padStart(2, "0");
            if (minutos === 60) {
                minutos = 0;
                horas++;
                document.getElementById("horas").innerText = String(horas).padStart(2, "0");
            }
        }
    }, 1000);
}

function pausarTemporizador() {
    clearInterval(temporizador);
}

function reiniciarTemporizador() {
    clearInterval(temporizador);
    horas = 0;
    minutos = 0;
    segundos = 0; 
    document.getElementById("horas").innerText = String(horas).padStart(2, "0");
    document.getElementById("minutos").innerText = String(minutos).padStart(2, "0");
    document.getElementById("segundos").innerText = String(segundos).padStart(2, "0");
}
