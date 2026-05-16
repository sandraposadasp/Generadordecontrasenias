const passwordInput = document.getElementById("password");
const longitudInput = document.getElementById("longitud");
const longitudValor = document.getElementById("longitudValor");
const nivelTexto = document.getElementById("nivel");

const mayusculas = document.getElementById("mayusculas");
const minusculas = document.getElementById("minusculas");
const numeros = document.getElementById("numeros");
const simbolos = document.getElementById("simbolos");

const botonGenerar = document.getElementById("generar");
const botonCopiar = document.getElementById("copiar");

//Slider
longitudInput.addEventListener("input", () => {
    longitudValor.textContent = longitudInput.value;
});

//caracteres
function getMayuscula() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getMinuscula() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getNumero() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getSimbolo() {
    const simbolos = "!@#$%^&*()_+[]{}<>?";
    return simbolos[Math.floor(Math.random() * simbolos.length)];
}

//generar contraseña
function generarPassword() {
    let password = "";
    const longitud = longitudInput.value;

    const opciones = [];

    if (mayusculas.checked) opciones.push(getMayuscula);
    if (minusculas.checked) opciones.push(getMinuscula);
    if (numeros.checked) opciones.push(getNumero);
    if (simbolos.checked) opciones.push(getSimbolo);

    if (opciones.length === 0) {
        alert("Selecciona al menos una opción");
        return;
    }

    for (let i = 0; i < longitud; i++) {
        const random = opciones[Math.floor(Math.random() * opciones.length)];
        password += random();
    }

    passwordInput.value = password;
    
    evaluarSeguridad(password);
}

//evaluar seguridad

function evaluarSeguridad(password) {
    let nivel = 0;

    // Reglas
    if (password.length >= 8) nivel++;
    if (/[A-Z]/.test(password)) nivel++;
    if (/[a-z]/.test(password)) nivel++;
    if (/[0-9]/.test(password)) nivel++;
    if (/[^A-Za-z0-9]/.test(password)) nivel++;

    // Clasificación
    if (nivel <= 2) {
        nivelTexto.textContent = "Débil";
        nivelTexto.className = "debil";
    } else if (nivel <= 4) {
        nivelTexto.textContent = "Media";
        nivelTexto.className = "media";
    } else {
        nivelTexto.textContent = "Fuerte";
        nivelTexto.className = "fuerte";
    }
}