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