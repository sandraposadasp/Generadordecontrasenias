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

longitudInput.addEventListener("input", () => {
    longitudValor.textContent = longitudInput.value;
});

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