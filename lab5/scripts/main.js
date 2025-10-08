let counter = 0;

function mudarTexto() {
  const p = document.getElementById("paragrafo");
  p.textContent = "1. Obrigado por passares";
}


function voltarTexto() {
  const p = document.getElementById("paragrafo");
  p.textContent = "1. Passa por aqui";
}

const texto = document.querySelector("#pintaTexto");

document.querySelector("#btnRed").onclick = () => {
  texto.style.color = "red";
};

document.querySelector("#btnGreen").onclick = () => {
  texto.style.color = "green";
};

document.querySelector("#btnBlue").onclick = () => {
  texto.style.color = "blue";
};


var cores = ["red", "blue", "green", "yellow"];
var indice = 0;

var campo = document.querySelector("#campoTexto");

campo.addEventListener("keydown", function () {
  campo.style.backgroundColor = cores[indice];
  indice = (indice + 1) % cores.length;
});

function mudarCor(inputElement) {
  document.body.style.backgroundColor = inputElement.value;
}


function countClick() {
  counter++
  const soma = document.querySelector('#contador')
  soma.textContent = counter;
}