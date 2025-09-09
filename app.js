let Amigos = [];

// Variables globales
const input = document.getElementById('amigo');
const botonReiniciar = document.getElementById('reiniciar');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

// Inicialmente el botón reiniciar está deshabilitado
botonReiniciar.disabled = true;

// Función para agregar amigo con validaciones sencillas
function agregarAmigo() {
    const nombre = input.value.trim();

    // Validación: no vacío
    if (!nombre) {
        alert("Por favor ingresa un nombre");
        input.focus();
        return;
    }
    // Validación: caracteres no especiales
    const regex = /[0-9@#\/*\?!¡¿]/;
    if (regex.test(nombre)) {
        alert("Solo se aceptan caracteres no especiales");
        input.focus();
        return;
    }
    // Validación longitud mínima
    if (nombre.length < 3) {
        alert("Ingresa un nombre con al menos 3 caracteres");
        input.focus();
        return;
    }
    // Evitar duplicados
    if (Amigos.includes(nombre)) {          
        alert("Este nombre ya existe, inténtalo con otro nombre");
        input.value = '';
        input.focus();
        return;
    }   
    // Limitar número máximo de amigos
    if (Amigos.length >= 30) {
        alert(`Has alcanzado el número máximo de amigos (${Amigos.length})`);
        input.value = '';
        input.focus();
        return;
    }

    Amigos.push(nombre);

    // Agregar elemento a lista visual
    let li = document.createElement('li');
    li.textContent = nombre;
    listaAmigos.appendChild(li);

    // Limpieza e interfaz
    input.value = '';
    input.focus();

    // Habilita botón de reiniciar porque ya hay amigos
    botonReiniciar.disabled = false;
}

// Función para sortear amigo secreto (elige uno aleatorio y lo muestra)
function sortearAmigo() {
    if (Amigos.length < 3) {
        alert("Debes capturar al menos 3 nombres para realizar el sorteo");
        return;
    }
    const indice = Math.floor(Math.random() * Amigos.length);
    const nombreElegido = Amigos[indice];
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${nombreElegido}</strong></li>`;
}

// Reiniciar todo el juego
function reiniciarJuego() {
    Amigos = [];
    listaAmigos.innerHTML = '';
    resultado.innerHTML = '';
    botonReiniciar.disabled = true;
    input.value = '';
    input.focus();
}

// Asignar eventos a botones (ajusta IDs en tu HTML)
document.getElementById('btn-agregar').onclick = agregarAmigo;
document.getElementById('btn-sortear').onclick = sortearAmigo;
botonReiniciar.onclick = reiniciarJuego;
