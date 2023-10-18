fetch('registros.json')
.then((response) => response.json())
// .then((data) => document.write(data));
// .then((data) => console.log(data));
.then((data) => localStorage.setItem('registro', JSON.stringify(data)))


let registro = localStorage.getItem('registro')
document.write(registro)