// Crea una página web con un botón que diga "Cambiar color". Cada vez que el usuario haga clic en el
//botón, el color de fondo de la página debe cambiar a un color aleatorio.

var button = document.getElementById("clickButton");
button.addEventListener("click", function() {
    // Generar un color aleatorio
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    // Cambiar el color de fondo de la página
    document.body.style.backgroundColor = randomColor;
    console.log(randomColor);
});
