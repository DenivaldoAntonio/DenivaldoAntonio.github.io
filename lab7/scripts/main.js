let produtos = [];

const produtosLista = document.querySelector('.produtos-lista');
const selectCategoria = document.getElementById('categoriaSelect');
const ordenarSelect = document.getElementById('ordenarSelect');
const searchInput = document.getElementById('searchInput');

const cestoLista = document.querySelector('.cesto-lista');
const totalElemento = document.getElementById('totalCesto');
const carrinho = {};

// 🔹 Carregar produtos da API
fetch('https://deisishop.pythonanywhere.com/products/')
    .then(response => response.json())
    .then(data => {
        produtos = data;
        console.log("Produtos carregados:", produtos);
        mostrarProdutos(produtos);
    })
    .catch(error => console.error('Erro ao carregar produtos:', error));

// 🔹 Buscar categorias da API
fetch('https://deisishop.pythonanywhere.com/categories/')
    .then(response => response.json())
    .then(categorias => {
        console.log("Categorias carregadas:", categorias);
        categorias.forEach(cat => {
            const option = document.createElement('option');
            option.value = cat.id;
            option.textContent = cat.name;
            selectCategoria.appendChild(option);
        });
    })
    .catch(error => console.error('Erro ao carregar categorias:', error));

// 🔹 Criar elemento de produto
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

    const categoria = document.createElement('p');
    // Ajusta de acordo com a estrutura da API: id ou objeto {id,name}
    categoria.textContent = produto.category.name ? `Categoria: ${produto.category.name}` : `Categoria: ${produto.category}`;

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

    artigo.append(titulo, img, desc, preco, categoria, botao);
    return artigo;
}

// 🔹 Atualizar lista de produtos
function mostrarProdutos(lista) {
    produtosLista.innerHTML = "";
    const listaOrdenada = ordenarProdutos(lista);
    listaOrdenada.forEach(produto => {
        const artigo = criarProduto(produto);
        produtosLista.appendChild(artigo);
    });
}

// 🔹 Ordenar produtos
function ordenarProdutos(lista) {
    const criterio = ordenarSelect.value;
    if (criterio === "asc") {
        return lista.slice().sort((a, b) => a.price - b.price);
    } else if (criterio === "desc") {
        return lista.slice().sort((a, b) => b.price - a.price);
    }
    return lista;
}

// 🔹 Filtrar produtos por categoria e pesquisa
function filtrarProdutos() {
    let listaFiltrada = produtos;

    const categoriaId = selectCategoria.value;
    if (categoriaId !== "") {
        listaFiltrada = listaFiltrada.filter(p => {
            // Ajuste dependendo da estrutura
            return p.category.id ? p.category.id === parseInt(categoriaId) : p.category === parseInt(categoriaId);
        });
    }

    const termo = searchInput.value.trim().toLowerCase();
    if (termo !== "") {
        listaFiltrada = listaFiltrada.filter(p => p.title.toLowerCase().includes(termo));
    }

    mostrarProdutos(listaFiltrada);
}

// 🔹 Eventos de filtro e ordenação
selectCategoria.addEventListener('change', filtrarProdutos);
searchInput.addEventListener('input', filtrarProdutos);
ordenarSelect.addEventListener('change', filtrarProdutos);

// 🔹 Cesto
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
    guardarCarrinho();
}

function guardarCarrinho() {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

function carregarCarrinhoDoLocalStorage() {
    const dados = localStorage.getItem('carrinho');
    if (dados) {
        Object.assign(carrinho, JSON.parse(dados));
        atualizarCesto();
    }
}

// 🔹 Inicializar
document.addEventListener('DOMContentLoaded', () => {
    carregarCarrinhoDoLocalStorage();
});
