
const nodeInputNumero = document.querySelector('form input[type="number"]');
const nodeInputSubmit = document.querySelector('form input[type="submit"]');
const nodeUlColecao = document.querySelector("#colecao ul");
const nodeUlRepetidos = document.querySelector("#repetidos ul");

const nodeTotalCromos = document.querySelector("#colecao h3 span");
const nodeTotalRepetidos = document.querySelector("#repetidos h3 span");

const nodeForm = document.querySelector("form");

const colecao = JSON.parse(localStorage.getItem("colecao")) || [];
const repetidos = JSON.parse(localStorage.getItem("repetidos")) || [];


function guardaDados() {
    localStorage.setItem("colecao", JSON.stringify(colecao));
    localStorage.setItem("repetidos", JSON.stringify(repetidos));
}


function guardaCarta() {
    const numero = Number(nodeInputNumero.value);

    if (colecao.includes(numero)) {
        repetidos.push(numero);
        repetidos.sort((a, b) => a - b);
    } else {
        colecao.push(numero);
        colecao.sort((a, b) => a - b);
    }

    guardaDados();

    atualizaLista(colecao, nodeUlColecao);
    atualizaLista(repetidos, nodeUlRepetidos);

    nodeTotalCromos.textContent = colecao.length;
    nodeTotalRepetidos.textContent = repetidos.length;

    nodeInputNumero.value = "";
}


function atualizaLista(lista, nodeLista) {
    nodeLista.innerHTML = "";

    lista.forEach(function(numero, indice) {
        const nodeItem = document.createElement("li");

        if (lista === repetidos) {
            nodeItem.innerHTML = `${numero} <button type="button" data-indice="${indice}">Eliminar</button>`;
        } else {
            nodeItem.textContent = numero;
        }

        nodeLista.appendChild(nodeItem);
    });

    nodeLista.querySelectorAll("button").forEach(function(nodeBotao) {
        nodeBotao.addEventListener("click", function() {
            repetidos.splice(Number(nodeBotao.dataset.indice), 1);

            guardaDados();

            atualizaLista(repetidos, nodeUlRepetidos);
            nodeTotalRepetidos.textContent = repetidos.length;
        });
    });
}


nodeForm.onsubmit = (event) => {
    event.preventDefault();
    guardaCarta();
};


atualizaLista(colecao, nodeUlColecao);
atualizaLista(repetidos, nodeUlRepetidos);

nodeTotalCromos.textContent = colecao.length;
nodeTotalRepetidos.textContent = repetidos.length;
