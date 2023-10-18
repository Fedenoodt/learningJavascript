// const eventoFuturo = (res) => {
//     return new Promise ((resolve, reject) => {
//         if (res === true) {
//             resolve('Promesa resuelta')
//          } else {
//             reject('Promesa rechazada')
//          }
//     })
// }

// setTimeout(() => {
//     res ? resolve('Promesa resuelta') : reject('Promesa rechazada')}, 2000)

// const eventoFuturo = (res) => { // Efectivamente const eventoFuturo devuele pending en estado exitoso, con delay de dos
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             res ? resolve('Promesa resuelta') : reject('Promesa rechazada')}, 2000)
//         }
//         )
//     }

// console.log( eventoFuturo(true))    // Efectivamente devuelve fullfilled-resuelta
// console.log( eventoFuturo(false))    // Efectivamente devuelve rejected-rechazada

// eventoFuturo(true)
// .then((response) => {   // then usa lo que promete. Si se puede, devuelve response. // Lo explico de vuelta. Then es un
//     console.log(response)                                                           // medio para "intentar" ejecutar
// })                                                                                  //código de forma condicional.

// eventoFuturo(false)
// .catch((error) => {   // Lo mismo con catch. Si no se puede, devuelve error.        // Si esta condición falla, devuelve
//     console.log(error)                                                              // error.
// })

// .finally(() =>
// (console.log('Fin del proceso.-')))    // Efectivamente finnaly() retorna el cierre de ciclo del then/chatch.

// ↓ Hechos por mi...

// const eventoFuturo = () => {
//     return new Promise((resolve, reject) => {})     // Efectivamente devuelve "pending".
// }

// console.log(eventoFuturo());

// const a = true;

// new promise((resolve, reject) => {
//     if (a) {
//         resolve('Te lo prometo')
//     } else {
//         reject('Nada. No me importa.')
//     }
// })
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ CREACION Y ESCUCHA DE PROMESAS ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ 
// const BD = [
//     {id: 1, nombre: 'Producto1', precio: 1500},
//     {id:2, nombre: 'Producto2', precio: 2500},
//     {id:3, nombre: 'producto3', precio: 3500},
//     {id:4, nombre: 'producto4', precio: 3500},
// ]

// console.log(BD)

// const pedirProductos = () => {
//     return new Promise( (resolve, reject) => {
//     setInterval(() => 
//     {resolve(BD)}, 3000)
// })
// }

// // Este modelaje es para generar un array de objetos.

// let productos = [];

// const renderProductos = (arr) => {
//     // genera vista de productos.
// }   
// console.log(
// pedirProductos().then((res) => {
//     productos = res
//     renderProductos(productos)
// }))

// Efectivamente devuelve una promesa, de un array, hace una lectura.

// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ PETICION DE DATOS A JSON ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ 

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())                 // Ahi está el fetch(). efectivamente devuelve una peticion de datos
//     .then((json) => console.log(json));                  // de esa web placeHolder.

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())                 // Estas ds líneas se construyen igual.
//     .then((json) => {
//     console.log(json[8])
//     console.log(json[78])
//     })                  // pero al estar leyendo un array, podemos levantar ID's especificas.

// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ LLAMADO FETCH A JSONPLACEHOLDER ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ 

const lista = document.querySelector('#listado');
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//     .then((data) => {
//         data.forEach((post) =>{                          // Acá se ve como se carga la lista, y con el forEach() 
//             const li = document.createElement('li')      // la levantamos en la web
//             li.innerHTML = `<h4>${post.title}</h4>
//             <p>${post.body}</p>`

//             lista.append(li)
//         })
//     })

// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ CARGA FETCH DE JSON EN HTML ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ 

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body:JSON.stringify({
//         title: 'CoderHouse',
//         body: 'Post de prueba',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json;charset=UTF-8',            // Bien, con esto ya manejas mejor el tema de hacer 
//     },                                                               // un post con fetch
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));

// const pedirPosts = async () => { 
//     const resp = await
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     const data = await resp.json()                                   // Acá hicimos montaje de el async-await, dentro de
                                                                        // todo es bastante sencillo de entender que se usa
//     data.forEach((post) => {                                         // para un mejor léxico y escitura, y que da menos 
//         const li = document.createElement('li')                      // abuso del .then()
//         li.innerHTML = `
//         <h4>${post.title}</h4>
//         <p>${post.body}</p>
//         `
//         lista.append(li)
//     })

//  }

//  pedirPosts()

// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ HACIENDO POST EN JSON CON FETCH ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ 