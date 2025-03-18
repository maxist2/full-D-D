// Seleccionar los botones de apan-1 y el botón end-turn
const botonesAcciones = document.querySelectorAll('.apan-1 button');
const botonEndTurn = document.getElementById('end-turn');

// Función para aplicar estilo gris al botón presionado
function aplicarEstiloGris(botonPresionado) {
    botonPresionado.style.filter = 'grayscale(100%)';
}

// Función para restaurar el estilo original de todos los botones
function restaurarEstiloOriginal() {
    botonesAcciones.forEach(boton => {
        boton.style.filter = '';
    });
}

// Agregar evento click a los botones de apan-1
botonesAcciones.forEach(boton => {
    boton.addEventListener('click', () => aplicarEstiloGris(boton));
});

// Restaurar estilo al presionar end-turn
botonEndTurn.addEventListener('click', restaurarEstiloOriginal);

// Seleccionar el botón de inspiración
const botonInspiracion = document.getElementById('inspiracion');

// Función para alternar entre los estados de inspiración
function alternarInspiracion() {
    if (botonInspiracion.id === 'inspiracion') {
        botonInspiracion.id = 'inspiracion-active';
    } else {
        botonInspiracion.id = 'inspiracion';
    }
}

// Agregar evento click al botón de inspiración
botonInspiracion.addEventListener('click', alternarInspiracion);
