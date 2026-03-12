/* 
Crea una página con un campo de texto donde el usuario pueda escribir un párrafo.
• Muestra en tiempo real el número de caracteres y palabras ingresados debajo del campo.
• Palabras deben ser separadas por espacios, y los caracteres no deben incluir espacios ni saltos de
línea.

*/ 
let inputTexto = document.getElementById("inputText").addEventListener("input",(leerTexto));

function leerTexto () {
    let texto = this.value.trim();
    if (texto === ""){
        document.getElementById("wordCount").innerText= 0;
        document.getElementById("charCount").innerText= 0; 
        return;
    }
    let palabras = texto.split(/\s+/);
    let caracteres = texto.replace(/\s/g,""); 
    document.getElementById("wordCount").innerText= palabras.length;
    document.getElementById("charCount").innerText= caracteres.length; 
    
};

