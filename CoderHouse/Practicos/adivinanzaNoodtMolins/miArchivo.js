// Juego que valida adivinar un número por un jugador.


// Variables de inicialización.
let aleatorio = Math.random() * 499;
let numero = Math.round(aleatorio);
let valido = false;
let vidas = 10;
// ("Valido" es el booleano central del while).


// Función resultado que muestra el resultado por pantalla.
    function resultado(adivino) {
    // El validador NaN para no mostrar falsos ingresos.
        if (!isNaN (parseInt(adivino))) {
            fragmento = document.write(`<h2>Usted ha dicho ${adivino}.</h2><br /><h2>El n&uacute;mero es ${numero}.</h2><br /><br /><h2>Usted contaba con un total de ${vidas} vidas.</h2><br /><br /><h2>(El m&aacute;ximo n&uacute;mero aleatorio es 500)</h2><br /><br /><hr /><br /><br />`);
            return fragmento
    }
}
// Aviso previo a jugar.
alert(`Usted cuenta con ${vidas} vidas.`)
// Título del historial posterior a jugar.
document.write(`<h1>Historial</h1>`)
// While que valida que TODAS las condiciones se den.
while (!valido & vidas > 0) {
    
    let adivino = prompt("Adivine el numero, de entre una y tres cifras, que no es mayor a 500... ");

    // Valor exedido.
    if (parseInt(adivino) > 500) {
        alert("Ingrese un número, que sea igual, o menor a 500. Por favor.");
        console.log("Usuario exedio limite de altura.");}



    // Número más alto.
    else if (parseInt(adivino) > numero) {
        --vidas;
        alert(`No. El número es más chico. Usted tiene ${vidas} vidas.`);
        resultado(parseInt(adivino, vidas));
    }

    // Número más bajo
    else if (parseInt(adivino) < numero) {
        --vidas;
        alert(`No. El número es mas grande Usted tiene ${vidas} vidas.`);
        resultado(parseInt(adivino, vidas));
    }     

    // Solución a ingreso por texto.
    else if (isNaN (parseInt(adivino))) {
        resultado(parseInt(`texto`, vidas));
        alert("Ingrese un número, por favor.");
        console.warn("Error: Violacion de parseInt().");
    }

    // Se valida la victoria.
    else if (adivino == numero) {
        document.write(`<h1>Victoria:</h1>`)
        resultado(parseInt(adivino, vidas));
        alert(`Con un total de ${(vidas)} vidas. Usted ha ganado.`);
        // (Imagen decorativa de Victoria).
        document.write('<img style = "width:1000px;" src="https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/b5/Enderdragondeath.gif/revision/latest/scale-to-width-down/250?cb=20210123183442">');

        document.write('<img style = "width:1000px;" src="https://cdnb.artstation.com/p/assets/images/images/013/853/991/original/jessica-money-victorygif2.gif?1541389567">');
        valido = true;
    }

    }
// Se valida la derrota, después del while.
if (vidas == 0) {
    document.write(`<h1>Derrota:</h1>`);
    alert("Usted ha perdido.")
    // (Imagen decorativa Game Over).
    document.write('<img src="https://www.discordianos.com/uploads/monthly_2020_10/b3f54e62430007.5a965f20d8cdb.gif.5835a667ccf1f931ab0e295d54ec02ff.gif">');
    valido = true;
}
    // "Botón de volver a jugar".
    document.write('<a href = "https://fedenoodt.github.io/Pagina_personal/PyC/CoderHouse/javascriptNoodtMolins/Adivinanza.html"><h1>Clic ac&aacute; para volver a jugar...</h1></a>'); 