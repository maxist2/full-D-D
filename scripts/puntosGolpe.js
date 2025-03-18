const progressBar = document.getElementById('progress-bar');
const tempBar = document.getElementById('temp-bar');
const progressBarValue = document.getElementById('progress-bar-value');
const tempBarValue = document.getElementById('temp-bar-value');

let puntosActuales = 50;
let puntosMaximos = 100;
let puntosTemporales = 0;

const mostrarSalud = document.getElementById('mostrar-salud');
const mostrarPgTemp = document.getElementById('mostrar-pg-temp');

const actualizarBarraProgreso = () => {
    const maximoTotal = puntosMaximos + puntosTemporales;
    const porcentaje = (puntosActuales / maximoTotal) * 100;
    const porcentajeTemp = (puntosTemporales / maximoTotal) * 100;

    progressBar.style.width = `${porcentaje}%`;
    tempBar.style.width = `${porcentajeTemp}%`;
    tempBar.style.left = `${porcentaje}%`;

    // Cambiar color según porcentaje
    if (porcentaje > 75) {
        progressBar.style.backgroundColor = '#4caf50'; // Verde
    } else if (porcentaje > 50) {
        progressBar.style.backgroundColor = '#ffeb3b'; // Amarillo
    } else if (porcentaje > 25) {
        progressBar.style.backgroundColor = '#ff9800'; // Naranja
    } else {
        progressBar.style.backgroundColor = '#f44336'; // Rojo
    }

    progressBarValue.textContent = `${puntosActuales}`;
    tempBarValue.textContent = puntosTemporales > 0 ? `+${puntosTemporales}` : '';
};

const actualizarUI = () => {
    mostrarSalud.textContent = `${puntosActuales} / ${puntosMaximos}`;
    mostrarPgTemp.textContent = puntosTemporales > 0 ? `(+${puntosTemporales} temp)` : '';
};

const obtenerValorInput = () => {
    const valor = parseInt(document.getElementById('v-mod').value);
    return isNaN(valor) || valor < 0 ? 0 : valor;
};

const guardarEstadoPuntos = () => {
    localStorage.setItem('puntosActuales', puntosActuales);
    localStorage.setItem('puntosMaximos', puntosMaximos);
    localStorage.setItem('puntosTemporales', puntosTemporales);
};

const cargarEstadoPuntos = () => {
    puntosActuales = parseInt(localStorage.getItem('puntosActuales')) || 50;
    puntosMaximos = parseInt(localStorage.getItem('puntosMaximos')) || 100;
    puntosTemporales = parseInt(localStorage.getItem('puntosTemporales')) || 0;
};

document.getElementById('daño').addEventListener('click', () => {
    const dano = obtenerValorInput();
    if (dano > 0) {
        let danoRestante = dano;

        if (puntosTemporales > 0) {
            const danoTemp = Math.min(puntosTemporales, danoRestante);
            puntosTemporales -= danoTemp;
            danoRestante -= danoTemp;
        }

        if (danoRestante > 0) {
            puntosActuales = Math.max(0, puntosActuales - danoRestante);
        }

        document.getElementById('v-mod').value = '';
        actualizarUI();
        actualizarBarraProgreso();
        guardarEstadoPuntos(); // Guardar estado
    }
});

document.getElementById('curacion').addEventListener('click', () => {
    const curacion = obtenerValorInput();
    if (curacion > 0) {
        puntosActuales = Math.min(puntosMaximos, puntosActuales + curacion);
        document.getElementById('v-mod').value = '';
        actualizarUI();
        actualizarBarraProgreso();
        guardarEstadoPuntos(); // Guardar estado
    }
});

document.getElementById('extra').addEventListener('click', () => {
    const pgTemp = obtenerValorInput();
    if (pgTemp > 0) {
        puntosTemporales = pgTemp;
        document.getElementById('v-mod').value = '';
        actualizarUI();
        actualizarBarraProgreso();
        guardarEstadoPuntos(); // Guardar estado
    }
});

cargarEstadoPuntos(); // Cargar estado al inicio
actualizarUI();
actualizarBarraProgreso();
