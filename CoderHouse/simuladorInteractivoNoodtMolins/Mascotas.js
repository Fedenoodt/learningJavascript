// Variables Generales

validez = false;
item = "";
precio = "";

// Funciones generales
function constructor () {
    // "constructor" se encarga de, primero validar que lo que ingresó el usuario, 
    // esté bien, y después devolver lo necesario para imprimir su ingreso.
    validar(producto, listaProductos);
    
}

//function validar (producto, listaProductos) {
    // validar se encarga de que el ingreso de usuario, sea exactamente un número
    // en la lista.
//    let largo = listaProductos.length;
//    if producto >== 1 & producto ==< largo:
//        let devolucion = true;
//    else:
//    alert(`Ingrese el producto por orden de pedido, por favor. ( 1 a ${largo})`);
//        let devolucion = false;
//    return devolucion
// }

// function ordenanza (listaProductos) {
//     validez = validar(producto, listaProductos);
//     if validez:
//         let item = listaProoductos[`${seleccion[producto]}`];
//         let precio = seleccion[producto];
// }

// Primer impresión de la página

document.write(`<h1>Tienda de mascotas</h1>`);
document.write(`<h2>Esta api permite calcular tu compra de productos, en base a posibles descuentos.</h2>`);

// Precios y entes reguladores de comidas de animales, valuadas por kilo.

perrosLittle = 945;
perrosMid = 970;
perrosBig = 1015;

gatosLittle = 874;
gatosMid = 896;
gatosBig = 921;

//(Toda la comida de bebé cuesta +%5)

function animalBebe (animal, porcentaje) {
    // "animalBebe" calcula dicho aumento.
    let aumento = Math.round(((animal * porcentaje) / 100) + animal);
    return aumento;
}

let perrosBebeLittle = animalBebe(perrosLittle, 5);
let perrosBebeMid = animalBebe(perrosMid, 5);
let perrosBebeBig = animalBebe(perrosBig, 5);

gatosBebeLittle = animalBebe(gatosLittle, 5);
let gatosBebeMid = animalBebe(gatosMid, 5);
let gatosBebeBig = animalBebe(gatosBig, 5);

let verduraPeces = 878;
let carnePeces = 881;

// Se guarda todo en una lista y un diccionario ordenadamente para la selección del usuario.

let seleccion = ['gatosLittle', 'gatosMid', 'gatosBig', 'perrosLittle', 'perrosMid', 'perrosBig', 'gatosBebeLittle', 'gatosBebeMid', 'gatosBebeBig', 'perrosBebeLittle', 'perrosBebeMid', 'perrosBebeBig', 'verduraPeces', 'carnePeces'];
let listaProductos = {'gatosLittle': gatosLittle, 'gatosMid' : gatosMid, 'gatosBig' : gatosBig, 'perrosLittle' : perrosLittle, 'perrosMid' : perrosMid, 'perrosBig' : perrosBig, 'gatosBebeLittle' : gatosBebeLittle, 'gatosBebeMid' : gatosBebeMid, 'gatosBebeBig' : gatosBebeBig, 'perrosBebeLittle' : perrosBebeLittle, 'perrosBebeMid' : perrosBebeMid, 'perrosBebeBig' : perrosBebeBig, 'verduraPeces' : verduraPeces, 'carnePeces' : carnePeces};

// Se empieza a presentar la web interna. Mostrando la lista de precios.

listaCompras = `
<div class = "in-flex">
    <div><h2>Lista de productos:</h2>
        <ol>
            <li>Comida de gato chico: $${gatosLittle}</li>
            <li>Comida de gato mediano: $${gatosMid}</li>
            <li>Comida de gato grande $${gatosBig}</li>
            <li>Comida de perro chico: $${perrosLittle}</li>
            <li>Comida de perro mediano: $${perrosMid}</li>
            <li>Comida de perro grande $${perrosBig}</li>
            <li>Comida de gato bebe chico: $${gatosBebeLittle}</li>
            <li>Comida de gato bebe mediano: $${gatosBebeMid}</li>
            <li>Comida de gato bebe grande $${gatosBebeBig}</li>
            <li>Comida de perro bebe chico: $${perrosBebeLittle}</li>
            <li>Comida de perro bebe mediano: $${perrosBebeMid}</li>
            <li>Comida de perro bebe grande $${perrosBebeBig}</li>
             <li>Comida de verduras para peces $${verduraPeces}</li>
            <li>Comida de carne para peces $${carnePeces}</li>
        </ol>
        <a class = "boton1" href = "">Comprar un producto</a>
     </div>
`;

// Se construye el espacio de ingreso del usuario.

let articulo = `<div> <form id= "pedido">
<input type = "number"> <label>Ingrese número del pedido</label> </input>;
<input type = "submit" value = "Elegir producto" class = "accionador" onclick = "constructor ()">  </input></div></form>
</div>`;

// "actual" se encarga de que el usuario vea su situación referente al producto actual, valga la redundancia.

let actual = `<div><h1>Usted no eligió ningún producto.</h1></div></div>`;

document.write(listaCompras, articulo, actual);

// "producto" se refiere al número que ingresó el usuario, para referenciar con la lista.
let producto = querySelector(".producto");

// Finalmente después de validar, se vuelve a validar el booleano por seguridad, para registrar la solicitud del usuario.
//if validar(producto, listaProoductos):
//    let item = listaProoductos[`${seleccion[producto]}`];
//    let precio = seleccion[producto];

//document.clear();    


// Descuento = (productoActual * 100 ) / valorDescuento
