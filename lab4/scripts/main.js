// main.js

let counter = 0;

function countClick() {
   counter++;
   const soma = document.querySelector('#contador')
   soma.textContent = counter 
} 

function resetContador() {
    counter = 0;
    const reset = document.querySelector('#contador')
    reset.textContent = counter
}

function destacarTitulo() {
  const titulo = document.getElementById('titulo');
  titulo.style.color = 'blue';
  titulo.style.fontSize = '2rem';
  titulo.textContent = 'Estás com o rato sobre o título!';
}

function voltarTitulo() {
  const titulo = document.getElementById('titulo');
  titulo.style.color = 'black';
  titulo.style.fontSize = '1.5rem';
  titulo.textContent = 'Explora os eventos de rato';
}

function mudarImagem() {
  const mudar = document.querySelector('#imagem')
  mudar.src = "https://picsum.photos/400/251"
}

function mudarTexto() {
  const p = document.getElementById("paragrafo");
  p.textContent = "JavaScript !!!";
  p.style.color = "blue";
}

function voltarTexto() {
  const p = document.getElementById("paragrafo");
  p.textContent = "Move o rato sobre este parágrafo.";
  p.style.color = "black";
}
