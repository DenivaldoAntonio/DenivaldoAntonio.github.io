

const produtosLista = document.querySelector('.produtos-lista');
const selectCategoria = document.getElementById('categoriaSelect');
const ordenarSelect = document.getElementById('ordenarSelect');
const searchInput = document.getElementById('searchInput');

const cestoLista = document.querySelector('.cesto-lista');
const totalElemento = document.getElementById('totalCesto');

const CHAVE_CESTO = 'produtos-selecionados';

if (localStorage.getItem(CHAVE_CESTO) === null) {
    localStorage.setItem(CHAVE_CESTO, JSON.stringify([]));
}



function obterProdutosSelecionados() {
    try {
        const dados = localStorage.getItem(CHAVE_CESTO);
        const lista = dados ? JSON.parse(dados) : [];

        return Array.isArray(lista) ? lista : [];
    } catch (erro) {
        console.error('Erro ao ler o cesto:', erro);
        return [];
    }
}

function guardarProdutosSelecionados(lista) {
    localStorage.setItem(CHAVE_CESTO, JSON.stringify(lista));
}

function normalizarCesto() {
    const lista = obterProdutosSelecionados();
    const agrupados = new Map();

    lista.forEach(item => {
        if (!item || item.id === undefined) return;

        const quantidade = Math.max(
            1,
            Number(item.quantity) || 1
        );

        if (agrupados.has(item.id)) {
            agrupados.get(item.id).quantity += quantidade;
        } else {
            agrupados.set(item.id, {
                ...item,
                quantity: quantidade
            });
        }
    });

    guardarProdutosSelecionados([...agrupados.values()]);
}

function criarProduto(produto) {
    const artigo = document.createElement('article');
    artigo.classList.add('produto');

    const titulo = document.createElement('h2');
    titulo.textContent = produto.title;

    const imagem = document.createElement('img');
    imagem.src = produto.image;
    imagem.alt = produto.title;
    imagem.loading = 'lazy';

    const descricao = document.createElement('p');
    descricao.textContent = produto.description;

    const categoria = document.createElement('p');
    categoria.textContent = `Categoria: ${produto.category}`;

    const preco = document.createElement('p');
    preco.textContent = `${Number(produto.price).toFixed(2)} €`;

    const rating = document.createElement('p');
    rating.textContent = produto.rating
        ? `★ ${produto.rating.rate}/5 (${produto.rating.count} avaliações)`
        : 'Sem avaliações';

    const botao = document.createElement('button');
    botao.type = 'button';
    botao.textContent = '+ Adicionar ao cesto';

    botao.addEventListener('click', () => {
        const selecionados = obterProdutosSelecionados();

        const existente = selecionados.find(
            item => item.id === produto.id
        );

        if (existente) {
            existente.quantity = (Number(existente.quantity) || 1) + 1;
        } else {
            selecionados.push({
                id: produto.id,
                title: produto.title,
                price: Number(produto.price),
                image: produto.image,
                quantity: 1
            });
        }

        guardarProdutosSelecionados(selecionados);
        atualizaCesto();
    });

    artigo.append(
        titulo,
        imagem,
        descricao,
        categoria,
        preco,
        rating,
        botao
    );

    return artigo;
}

function criaProdutoCesto(produto) {
    const artigo = document.createElement('article');
    artigo.classList.add('produto-cesto');

    const titulo = document.createElement('h3');
    titulo.textContent = produto.title;

    const imagem = document.createElement('img');
    imagem.src = produto.image;
    imagem.alt = produto.title;
    imagem.loading = 'lazy';

    const preco = document.createElement('p');
    preco.textContent =
        `Preço: ${Number(produto.price).toFixed(2)} €`;

    const controlos = document.createElement('div');
    controlos.classList.add('controlos-quantidade');

    const menos = document.createElement('button');
    menos.type = 'button';
    menos.textContent = '−';
    menos.setAttribute('aria-label', 'Diminuir quantidade');

    const quantidade = document.createElement('span');
    quantidade.textContent = produto.quantity;

    const mais = document.createElement('button');
    mais.type = 'button';
    mais.textContent = '+';
    mais.setAttribute('aria-label', 'Aumentar quantidade');

    const subtotal = document.createElement('p');
    subtotal.classList.add('subtotal');

    function atualizarSubtotal() {
        subtotal.textContent =
            `Subtotal: ${(Number(produto.price) * produto.quantity).toFixed(2)} €`;
    }

    atualizarSubtotal();

    mais.addEventListener('click', () => {
        const lista = obterProdutosSelecionados();
        const item = lista.find(p => p.id === produto.id);

        if (!item) return;

        item.quantity = (Number(item.quantity) || 1) + 1;

        guardarProdutosSelecionados(lista);
        atualizaCesto();
    });

    menos.addEventListener('click', () => {
        const lista = obterProdutosSelecionados();
        const item = lista.find(p => p.id === produto.id);

        if (!item) return;

        item.quantity = (Number(item.quantity) || 1) - 1;

        if (item.quantity <= 0) {
            guardarProdutosSelecionados(
                lista.filter(p => p.id !== produto.id)
            );
        } else {
            guardarProdutosSelecionados(lista);
        }

        atualizaCesto();
    });

    const remover = document.createElement('button');
    remover.type = 'button';
    remover.classList.add('remover-produto');
    remover.textContent = 'Remover';

    remover.addEventListener('click', () => {
        const lista = obterProdutosSelecionados();

        guardarProdutosSelecionados(
            lista.filter(p => p.id !== produto.id)
        );

        atualizaCesto();
    });

    controlos.append(menos, quantidade, mais);

    artigo.append(
        imagem,
        titulo,
        preco,
        controlos,
        subtotal,
        remover
    );

    return artigo;
}

function renderizarProdutos(listaProdutos) {
    produtosLista.innerHTML = '';

    listaProdutos.forEach(produto => {
        produtosLista.append(criarProduto(produto));
    });
}

// Atualizar as categorias disponíveis
function atualizarCategorias() {
    const categoriaAtual = selectCategoria.value;

    const categorias = [
        ...new Set(produtos.map(produto => produto.category))
    ];

    selectCategoria.innerHTML = '';

    const todas = document.createElement('option');
    todas.value = '';
    todas.textContent = 'Todas';
    selectCategoria.append(todas);

    categorias.forEach(categoria => {
        const opcao = document.createElement('option');
        opcao.value = categoria;
        opcao.textContent = categoria;
        selectCategoria.append(opcao);
    });

    selectCategoria.value = categorias.includes(categoriaAtual)
        ? categoriaAtual
        : '';
}

function atualizarListaProdutos() {
    const pesquisa = searchInput.value.trim().toLowerCase();
    const categoria = selectCategoria.value;
    const ordenacao = ordenarSelect.value;

    let lista = [...produtos];

    if (categoria) {
        lista = lista.filter(
            produto => produto.category === categoria
        );
    }

    if (pesquisa) {
        lista = lista.filter(produto =>
            produto.title.toLowerCase().includes(pesquisa)
        );
    }

    if (ordenacao === 'asc') {
        lista.sort((a, b) => a.price - b.price);
    } else if (ordenacao === 'desc') {
        lista.sort((a, b) => b.price - a.price);
    }

    renderizarProdutos(lista);
}

function atualizaCesto() {
    const selecionados = obterProdutosSelecionados();

    cestoLista.innerHTML = '';

    let total = 0;

    selecionados.forEach(produto => {
        const quantidade = Math.max(
            1,
            Number(produto.quantity) || 1
        );

        const produtoCesto = {
            ...produto,
            quantity: quantidade
        };

        cestoLista.append(criaProdutoCesto(produtoCesto));

        total += Number(produto.price) * quantidade;
    });

    totalElemento.textContent = `Total: €${total.toFixed(2)}`;
}


selectCategoria.addEventListener('change', atualizarListaProdutos);
ordenarSelect.addEventListener('change', atualizarListaProdutos);
searchInput.addEventListener('input', atualizarListaProdutos);


function iniciarLoja() {
    if (!Array.isArray(produtos)) {
        console.error('A lista produtos não está disponível.');
        produtosLista.textContent =
            'Não foi possível carregar os produtos.';
        return;
    }

    normalizarCesto();
    atualizarCategorias();
    renderizarProdutos(produtos);
    atualizaCesto();

    console.log(`${produtos.length} produtos carregados.`);
}

iniciarLoja();
