let movimientoActual = 30;
const movimientoMaximo = 30;

const movementBar = document.getElementById('movement-bar');
const movementBarValue = document.getElementById('movement-bar-value');

const actualizarBarraMovimiento = () => {
    const porcentajeMovimiento = (movimientoActual / movimientoMaximo) * 100;
    movementBar.style.width = `${porcentajeMovimiento}%`;
    movementBarValue.textContent = `${movimientoActual} / ${movimientoMaximo}`;
};

const guardarEstadoMovimiento = () => {
    localStorage.setItem('movimientoActual', movimientoActual);
};

const cargarEstadoMovimiento = () => {
    movimientoActual = parseInt(localStorage.getItem('movimientoActual')) || movimientoMaximo;
};

document.getElementById('m_10ft').addEventListener('click', () => {
    movimientoActual = Math.min(movimientoMaximo, movimientoActual + 10);
    actualizarBarraMovimiento();
    guardarEstadoMovimiento(); // Guardar estado
});

document.getElementById('m_5ft').addEventListener('click', () => {
    movimientoActual = Math.min(movimientoMaximo, movimientoActual + 5);
    actualizarBarraMovimiento();
    guardarEstadoMovimiento(); // Guardar estado
});

document.getElementById('m-5ft').addEventListener('click', () => {
    movimientoActual = Math.max(0, movimientoActual - 5);
    actualizarBarraMovimiento();
    guardarEstadoMovimiento(); // Guardar estado
});

document.getElementById('m-10ft').addEventListener('click', () => {
    movimientoActual = Math.max(0, movimientoActual - 10);
    actualizarBarraMovimiento();
    guardarEstadoMovimiento(); // Guardar estado
});

document.getElementById('end-turn').addEventListener('click', () => {
    movimientoActual = movimientoMaximo;
    actualizarBarraMovimiento();
    guardarEstadoMovimiento(); // Guardar estado
});

cargarEstadoMovimiento(); // Cargar estado al inicio
actualizarBarraMovimiento();
