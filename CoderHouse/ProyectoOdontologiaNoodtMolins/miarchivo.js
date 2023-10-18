// Variables Generales
localStorage.clear()
const listaA = {'general': 'Juan Perez', 'ondodoncia': 'Agustina Morón', 'ortodoncia': 'Lucía Ferrera', 'radiografias': 'Lucas Vinicius'};
const listaB = {'general': 'Facundo García', 'ondodoncia': 'Soledad Rodriguez', 'ortodoncia': 'Maria Valtazar', 'radiografias': 'Carlos Pereyra'};

const DateTime = luxon.DateTime
const dt = DateTime.now();
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

// El usuario carge este prompt muy escencial, para validar que es usuario de la plataforma.

let credencial = prompt('Ingrese el número de credencial de 8 números');
//     Este prompt toma la labor de revisar que el usuario halla ingresado bien la credencial.
    if (credencial.length == 8){
        console.log(`*La credencial número ${credencial} fue enviada a una base de datos para revisión...*`)
        main()
    }
    else {
        alert(`Ingrese un número de credencial válido.`)
        fail()
    }


function relojDosDigitos (valor) {
    // relojDosDigitos trabaja para que se genere un cero en todos los casos que ese 
    // tiempo es menor a 10.
    if (valor < 10) {
        termino = '0' + valor;
    }
    else {
    termino = valor;}
    return termino
}

function crearNavegacion () {
    let barra = document.createElement("NAV");
    barra.innerHTML = `
    <h1>Swiss Medical Caballito</h1><img id = "smg" src = "https://fedenoodt.github.io/Pagina_personal/PyC/CoderHouse/odontologiaNoodtMolins/SMG.png">
    `;    
    document.body.appendChild(barra)
}

function main () {
// "main" se encarga de construir la línea del programa.
    // Este es el primer segmento constructor del turno del usuario.

    crearNavegacion()
    // Se arma el interrogante sobre que tipo de consulta se trata.
    let turno = document.createElement("div");
    turno.innerHTML = `
    <div><center>
    <br /><center><h2>Ticket del Centro Odontológico</h2><br /><h3>Ingrese los datos</h3></center>
    <form id="tipoPacientes">
        <label for="tur">Turno</label><br />
        <select name = "turno" id = "tur" multiple>
            <option value = "general">Odontología General</option>
            <option value = "ondodoncia">Ondodoncia</option>
            <option value = "ortodoncia">Ortodoncia</option>
            <option value = "radiografias">Radiografías</option>
        </select><br /><br />
        <input type = "submit" value = "Submit" />
    </form>
    </center></div>`;

    document.body.appendChild(turno);
    // Y se registra lo que haya devuelto.
    let tipo = '';
    let tomaTurno = document.getElementById("tipoPacientes");
    tomaTurno.addEventListener("submit", registrar);

    function registrar (valor) {
    //     "Registrar" tiene la tarea de ver que opción seleccionó un usuario, y darle su turno.
        valor.preventDefault();
        let tipoPacientes = valor.target
        let profesion = (tipoPacientes.children[2].value)
    //     De que valor tome el paciente, va a depender el tipo de turno.
        if (profesion == 'general') {
            tipo = "A";
                tipoPacientes.children[0].value
            } 
        else if 
            (profesion == 'ondodoncia') {
                tipo = "B";
                tipoPacientes.children[1].value
            } 
        else if 
            (profesion == 'ortodoncia') {
                tipo = "C";
                tipoPacientes.children[2].value
            }

        else if
            (profesion == 'radiografias') {
                tipo = "D";
                tipoPacientes.children[3].value
            }

    // Como este programa no va a ser usado por 999 pacientes, o más al dia, turnoID es la variable que genera un número aleatorio durante la ejecución
    turnoID = Math.round(Math.random() * 1000);
    // retorno es la "reunión" entre la especialidad del turno, con el número aleatorio generado.
    retorno = tipo + turnoID;
    //  Guardamos el retorno con el nombre de "Turno" en caso de necesitarlo más tarde.

    let profesional = tipo >= 500 ? listaA[profesion] : listaB[profesion] 
    //    "profesional" difiere entre el Grupo A y B de profesionales. Se encarga de ordenar, dependiendo del turno, al profesional que corresponde a el turno.


    // Se captura el momento que el usuario hace la petición de turno...
    let mes = meses[dt.month - 1];
    let dias = relojDosDigitos(dt.day);
    let horas = relojDosDigitos(dt.hour);
    let minutos = relojDosDigitos(dt.minute);
    // ...Y todo se recopila en la variable "dia", y "hora".
    let dia = `${dias} de ${mes} de ${dt.year}`;
    let hora = `${horas}:${minutos}hs.`;
    // Se formula y muestra la respuesta...
    let imagen = `Su turno es ${retorno}.
    Será llamado por apellido, por el profesional ${profesional} de ${profesion}.
    El turno fue solicitado a las ${hora}, el ${dia}.
    
    Y recuerde lavarse los dientes :)`;
    alert(imagen);

    // Una vez finalizado esto, se elimina esta imagen, y se consulta, si la página validó el usuario,
    // una despedida, y si lo rechazó, un mensaje de error.
    document.body.removeChild(turno)
    tipo != '' ? success() : fail()
    datos = { 'credencial': credencial, 'dia': dia, 'hora': hora, 'profesion': profesion, 'profesional': profesional };
    const enJSON = JSON.stringify(datos);
    localStorage.setItem('Cliente', enJSON)
    
    fetch('registros.json', {
        // "registros.json" es una muestra de como quedarían los objetos cargados en variable "datos", en un 
        // archivo .json.
        method: 'POST',
        body: JSON.stringify({
        enJSON
    }),
    headers: {
        'Contnent-type': 'application/json;charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((data) => console.log(data));

    }
}

fetch('registros.json')
.then((response) => response.json())
.then((data) => console.log(data));         

console.log(fetch('registros.json'));

function fail () {
    crearNavegacion()
    let web = document.createElement("div");
    web.innerHTML = `
    <div><center>
    <br /><center><h2>Ticket del Centro Odontol&oacute;gico</h2><br /><h3>Por favor. Le solicitamos que recarge la p&aacute;gina para tramitar su turno. Muchas gracias.</h3></center></div>`;
    document.body.appendChild(web)
}

function success () {
    crearNavegacion()
    let web = document.createElement("div");
    web.innerHTML = `<div><center><h3> Espero que tenga un buen d&iacute;a.</h3></center></div>`
    document.body.appendChild(web)
}