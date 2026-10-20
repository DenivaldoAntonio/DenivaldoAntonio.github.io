// A. Declaração de variáveis

const input = document.querySelector('form input[type="number"]');
const lista = document.querySelector("#lista");
const repetidos = document.querySelector("#listaRepetidos");
const total = document.querySelector("#total");
const totalRepetidos = document.querySelector("#totalRepetidos");
const form = document.querySelector("form");

let colecao = JSON.parse(localStorage.getItem("colecao")) || [];
let cromosRepetidos = JSON.parse(localStorage.getItem("repetidos")) || [];



function guardar() {
    localStorage.setItem("colecao", JSON.stringify(colecao));
    localStorage.setItem("repetidos", JSON.stringify(cromosRepetidos));
}



function atualizar() {
    lista.innerHTML = "";
    repetidos.innerHTML = "";

    colecao.forEach(function(numero) {
        const li = document.createElement("li");
        li.textContent = numero;
        lista.appendChild(li);
    });

    cromosRepetidos.forEach(function(numero, indice) {
        const li = document.createElement("li");
        const botao = document.createElement("button");

        li.textContent = numero + " ";

        botao.textContent = "Eliminar";
        botao.type = "button";

        botao.addEventListener("click", function() {
            cromosRepetidos.splice(indice, 1);
            guardar();
            atualizar();
        });

        li.appendChild(botao);
        repetidos.appendChild(li);
    });

    total.textContent = colecao.length;
    totalRepetidos.textContent = cromosRepetidos.length;
}


form.addEventListener("submit", function(event) {
    event.preventDefault();

    const numero = Number(input.value);

    if (colecao.includes(numero)) {
        cromosRepetidos.push(numero);
        cromosRepetidos.sort(function(a, b) {
            return a - b;
        });
    } else {
        colecao.push(numero);
        colecao.sort(function(a, b) {
            return a - b;
        });
    }

    guardar();
    atualizar();

    input.value = "";
});


atualizar();
