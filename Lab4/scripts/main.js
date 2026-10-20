
const ex1 = document.getElementById("ex1");

ex1.addEventListener("mouseover", function () {
    ex1.textContent = "1. Obrigado por passares!";
});

ex1.addEventListener("mouseout", function () {
    ex1.textContent = "1. Passa por aqui!";
});


const ex2 = document.getElementById("ex2");

document.querySelectorAll("[data-cor]").forEach(function (botao) {
    botao.addEventListener("click", function () {
        ex2.style.color = botao.dataset.cor;
    });
});


// 3. Experimenta escrever!
const texto = document.getElementById("texto");

const cores = ["red", "green", "blue"];
let indice = 0;

texto.addEventListener("input", function () {
    texto.style.backgroundColor = cores[indice];

    indice = (indice + 1) % cores.length;
});



// 4. Escolha uma cor em inglês
const form = document.getElementById("form-cor");
const cor = document.getElementById("cor");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (CSS.supports("color", cor.value.trim())) {
        document.body.style.backgroundColor = cor.value.trim();
    } else {
        alert("Cor inválida!");
    }
});


// 5. Conta!
let contador = 0;

document.getElementById("contar").addEventListener("click", function () {
    contador++;
    document.getElementById("contador").textContent = contador;
});
