// Crear HTML

// Generar nuevo enlace

// const nuevoEnlace = document.createElement('A');

// Agregamos el href
// nuevoEnlace.href = 'nuevo-enlace.html';
// Agregamos el texto
// nuevoEnlace.textContent = 'Tienda Virtual';
// Agregamos la clase
// nuevoEnlace.classList.add('navegacion__enlace');

// Añadirlo al documento HTML

const navegacion = document.querySelector('.navegacion');
// navegacion.appendChild(nuevoEnlace);

// EVENTOS

// console.log(1);

window.addEventListener( 'load', () => console.log(2) ); // Load espera a que el JS y el documento HTML estén listos

window.onload = function() {
    console.log(3);
} // es lo mismo pero otra manera de hacerlo

document.addEventListener( 'DOMContentLoaded', () => console.log(4) ); // solamente espera a que se descargue el HTML pero espera ni el CSS ni las imagenes. Por lo tanto se descarga mas rapido. Generalmente se utiliza este por una cuestion de que JS solo requiere el html.

// console.log(5);

// Seleccionar un elemento y asociarle un evento

// const btnEnviar = document.querySelector('.boton--primario');

// function enviarForm(e) {
//     console.log(e.target) // nos va a retornar a que elemento le estas dando click
//     e.preventDefault(); // muy util para validar formularios
//     console.log('Enviando formulario...');
// }

// btnEnviar.addEventListener('click', enviarForm);


// Eventos de los inputs y textarea

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombreInput = document.querySelector('#nombre');
const emailInput = document.querySelector('#email');
const mensajeInput = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');


nombreInput.addEventListener('input', leerTexto);

emailInput.addEventListener('input', leerTexto);

mensajeInput.addEventListener('input', leerTexto);

// Evento de submit - 
formulario.addEventListener('submit', e => {
    e.preventDefault();
    
    // validar formulario

    const { nombre, email, mensaje } = datos;

    if (nombre === '' || email === '' || mensaje === '') {
        mostrarAlerta('Todos los campos son obligatorios', true);

        return;
    }; 
        
    
    // enviar formulario
    mostrarAlerta('¡Se ha enviado correctamente su formulario de contacto!');
    
    
})


function leerTexto(e) {
    // console.log(e.target.value);

    datos[e.target.id] = e.target.value;

    // console.log(datos);
}

// Mostrar error en pantalla

// function mostrarError(mensaje) {
//     const error = document.createElement('P');
//     error.textContent = mensaje;
//     error.classList.add('error');

//     formulario.appendChild( error );

//     // que desaparezca desp de 5 segundos

//     setTimeout( () => {
//         error.remove();
//     }, 5000 );
// }

// Mostrar mensaje de exito

// function mostrarExito(mensaje) {
//     const exito = document.createElement('P');
//     exito.textContent = mensaje;
//     exito.classList.add('exito');

//     formulario.appendChild( exito );

//     setTimeout( () => {
//         exito.remove();
//     }, 5000 );
// }

// REFACTORING - hacer que el codigo sea más compacto

function mostrarAlerta(mensaje, error = null) {
    
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('exito');
    }

    formulario.appendChild( alerta );

    setTimeout( () => {
        alerta.remove();
    }, 5000 )
}
