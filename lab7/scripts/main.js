let produtos = []

fetch('https://deisishop.pythonanywhere.com/products/')
    .then(response => response.json())
    .then(data => {
        produtos = data
        const produtosLista = document.querySelector('.produtos-lista');
        produtos.forEach(produto => {
            const artigo = criarProduto(produto);
            produtosLista.appendChild(artigo);
        });
    })
    .catch(error => console.error('Erro:', error));

document.addEventListener('DOMContentLoaded', () => {
    carregarCarrinhoDoLocalStorage(); // restaura o carrinho salvo
});

const cestoLista = document.querySelector('.cesto-lista');
const totalElemento = document.getElementById('totalCesto');
const carrinho = {};


function criarProduto(produto) {
    const artigo = document.createElement('article');
    artigo.classList.add('produto');

    const titulo = document.createElement('h3');
    titulo.textContent = produto.title;

    const img = document.createElement('img');
    img.src = produto.image;
    img.alt = produto.title;

    const desc = document.createElement('p');
    desc.textContent = produto.description;

    const preco = document.createElement('p');
    preco.textContent = `Preço: €${produto.price.toFixed(2)}`;

    const botao = document.createElement('button');
    botao.textContent = "+ Adicionar ao Cesto";

    botao.addEventListener('click', () => {
        if (carrinho[produto.id]) {
            carrinho[produto.id].quantidade += 1;
        } else {
            carrinho[produto.id] = { ...produto, quantidade: 1 };
        }
        atualizarCesto();
    });

    artigo.append(titulo, img, desc, preco, botao);
    return artigo;
}

function atualizarCesto() {
    cestoLista.innerHTML = "";
    let total = 0;

    for (const id in carrinho) {
        const item = carrinho[id];
        const artigo = document.createElement('article');
        artigo.classList.add('produto');

        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.title;
        img.style.maxWidth = "80px";

        const titulo = document.createElement('h3');
        titulo.textContent = item.title;

        const quantidade = document.createElement('p');
        quantidade.innerHTML = `Quantidade: <span class="quantidade">${item.quantidade}</span>`;

        const preco = document.createElement('p');
        preco.textContent = `Preço: €${item.price.toFixed(2)}`;

        const botoes = document.createElement('div');
        botoes.classList.add('botoes-cesto');

        const mais = document.createElement('button');
        mais.textContent = "+";
        mais.addEventListener('click', () => {
            carrinho[id].quantidade += 1;
            atualizarCesto();
        });

        const menos = document.createElement('button');
        menos.textContent = "-";
        menos.addEventListener('click', () => {
            carrinho[id].quantidade -= 1;
            if (carrinho[id].quantidade <= 0) {
                delete carrinho[id];
            }
            atualizarCesto();
        });

        botoes.append(mais, menos);
        artigo.append(img, titulo, quantidade, preco, botoes);
        cestoLista.appendChild(artigo);

        total += item.price * item.quantidade;
    }

    totalElemento.textContent = `Total: €${total.toFixed(2)}`;

    // ✅ Guarda o estado atual no LocalStorage
    guardarCarrinho();
}

// Salva o carrinho no localStorage
function guardarCarrinho() {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

// Carrega o carrinho salvo
function carregarCarrinhoDoLocalStorage() {
    const dados = localStorage.getItem('carrinho');
    if (dados) {
        Object.assign(carrinho, JSON.parse(dados));
        atualizarCesto();
    }
}
