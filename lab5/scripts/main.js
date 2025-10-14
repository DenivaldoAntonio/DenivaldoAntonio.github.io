

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

function mudarCor(selectElement) {
  document.body.style.backgroundColor = selectElement.value;
}


  let counter = 0;

function countClick() {
  counter++
  const soma = document.querySelector('#contador')
  soma.textContent = counter;
}

function enviarFormulario(event) {
  event.preventDefault(); // Impede o recarregamento da página
  
  const nome = document.querySelector("#nome").value;
  const idade = document.querySelector("#idade").value;
  const mensagem = document.querySelector("#mensagem");

  // Exibe a mensagem abaixo do formulário
  mensagem.textContent = `Olá, o ${nome} tem ${idade} anos.`;

  // Limpar os campos
  document.querySelector("#nome").value = "";
  document.querySelector("#idade").value = "";
}

  let counter2 = 0;


function count() {
  counter2++
  const soma = document.querySelector('#contador2')
  soma.textContent = counter2;
}
setInterval(count, 1000);