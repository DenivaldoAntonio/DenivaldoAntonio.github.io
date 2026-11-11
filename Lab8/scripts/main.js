
const API_URL = "https://deisishop.pw.deisi.ulusofona.pt/products";
const BUY_URL = "https://deisishop.pw.deisi.ulusofona.pt/buy";

const produtosLista = document.querySelector('.produtos-lista');
const selectCategoria = document.querySelector('#categoriaSelect');
const ordenarSelect = document.querySelector('#ordenarSelect');
const searchInput = document.querySelector('#searchInput');

const cestoLista = document.querySelector('.cesto-lista');
const totalElemento = document.querySelector('#totalCesto');

const estudante = document.querySelector('#estudante');
const cupao = document.querySelector('#cupao');
const nome = document.querySelector('#nome');
const btnComprar = document.querySelector('#btnComprar');
const resultadoCompra = document.querySelector('#resultadoCompra');

const CHAVE_CESTO = 'produtos-selecionados';

let produtos = [];
let cesto = JSON.parse(localStorage.getItem(CHAVE_CESTO)) || [];



function guardarCesto() {
    localStorage.setItem(CHAVE_CESTO, JSON.stringify(cesto));
}



function obterImagem(caminho) {
    return new URL(caminho, "https://deisishop.pw.deisi.ulusofona.pt").href;
}



function criarProduto(produto) {
    const artigo = document.createElement('article');
    artigo.classList.add('produto');

    const titulo = document.createElement('h2');
    titulo.textContent = produto.title;

    const imagem = document.createElement('img');
    imagem.src = obterImagem(produto.image);
    imagem.alt = produto.title;

    const descricao = document.createElement('p');
    descricao.textContent = produto.description;

    const categoria = document.createElement('p');
    categoria.textContent = 'Categoria: ' + produto.category;

    const preco = document.createElement('p');
    preco.textContent = Number(produto.price).toFixed(2) + ' €';

    const rating = document.createElement('p');

    if (produto.rating) {
        rating.textContent = '★ ' + produto.rating.rate +
            '/5 (' + produto.rating.count + ' avaliações)';
    } else {
        rating.textContent = 'Sem avaliações';
    }

    const botao = document.createElement('button');
    botao.type = 'button';
    botao.textContent = '+ Adicionar ao cesto';

    botao.addEventListener('click', function() {
        let encontrado = false;

        for (let i = 0; i < cesto.length; i++) {
            if (cesto[i].id === produto.id) {
                cesto[i].quantity++;
                encontrado = true;
            }
        }

        if (!encontrado) {
            cesto.push({
                id: produto.id,
                title: produto.title,
                price: Number(produto.price),
                image: produto.image,
                quantity: 1
            });
        }

        guardarCesto();
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

    const imagem = document.createElement('img');
    imagem.src = obterImagem(produto.image);
    imagem.alt = produto.title;

    const titulo = document.createElement('h3');
    titulo.textContent = produto.title;

    const preco = document.createElement('p');
    preco.textContent = 'Preço: ' + Number(produto.price).toFixed(2) + ' €';

    const controlos = document.createElement('div');
    controlos.classList.add('controlos-quantidade');

    const menos = document.createElement('button');
    menos.type = 'button';
    menos.textContent = '−';

    const quantidade = document.createElement('span');
    quantidade.textContent = produto.quantity;

    const mais = document.createElement('button');
    mais.type = 'button';
    mais.textContent = '+';

    const subtotal = document.createElement('p');
    subtotal.textContent =
        'Subtotal: ' + (produto.price * produto.quantity).toFixed(2) + ' €';

    mais.addEventListener('click', function() {
        for (let i = 0; i < cesto.length; i++) {
            if (cesto[i].id === produto.id) {
                cesto[i].quantity++;
            }
        }

        guardarCesto();
        atualizaCesto();
    });

    menos.addEventListener('click', function() {
        for (let i = 0; i < cesto.length; i++) {
            if (cesto[i].id === produto.id) {
                cesto[i].quantity--;

                if (cesto[i].quantity <= 0) {
                    cesto.splice(i, 1);
                }

                break;
            }
        }

        guardarCesto();
        atualizaCesto();
    });

    const remover = document.createElement('button');
    remover.type = 'button';
    remover.classList.add('remover-produto');
    remover.textContent = 'Remover';

    remover.addEventListener('click', function() {
        for (let i = 0; i < cesto.length; i++) {
            if (cesto[i].id === produto.id) {
                cesto.splice(i, 1);
                break;
            }
        }

        guardarCesto();
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



function renderizarProdutos(lista) {
    produtosLista.innerHTML = '';

    lista.forEach(function(produto) {
        produtosLista.append(criarProduto(produto));
    });
}



function atualizarCategorias() {
    const categoriaAtual = selectCategoria.value;
    const categorias = [];

    produtos.forEach(function(produto) {
        if (!categorias.includes(produto.category)) {
            categorias.push(produto.category);
        }
    });

    selectCategoria.innerHTML = '';

    const todas = document.createElement('option');
    todas.value = '';
    todas.textContent = 'Todas';
    selectCategoria.append(todas);

    categorias.forEach(function(categoria) {
        const opcao = document.createElement('option');
        opcao.value = categoria;
        opcao.textContent = categoria;
        selectCategoria.append(opcao);
    });

    selectCategoria.value = categoriaAtual;
}



function atualizarListaProdutos() {
    const pesquisa = searchInput.value.toLowerCase();
    const categoria = selectCategoria.value;
    const ordenacao = ordenarSelect.value;

    let lista = [];

    produtos.forEach(function(produto) {
        if (
            produto.title.toLowerCase().includes(pesquisa) &&
            (categoria === '' || produto.category === categoria)
        ) {
            lista.push(produto);
        }
    });

    if (ordenacao === 'asc') {
        lista.sort(function(a, b) {
            return Number(a.price) - Number(b.price);
        });
    }

    if (ordenacao === 'desc') {
        lista.sort(function(a, b) {
            return Number(b.price) - Number(a.price);
        });
    }

    renderizarProdutos(lista);
}



function atualizaCesto() {
    cestoLista.innerHTML = '';

    let total = 0;

    cesto.forEach(function(produto) {
        cestoLista.append(criaProdutoCesto(produto));

        total = total + produto.price * produto.quantity;
    });

    totalElemento.textContent = 'Total: €' + total.toFixed(2);
}



selectCategoria.addEventListener('change', atualizarListaProdutos);
ordenarSelect.addEventListener('change', atualizarListaProdutos);
searchInput.addEventListener('input', atualizarListaProdutos);



btnComprar.addEventListener('click', function() {

    if (cesto.length === 0) {
        alert('O cesto está vazio!');
        return;
    }

    if (nome.value.trim() === '') {
        alert('Introduza o seu nome!');
        return;
    }

    let ids = [];

    cesto.forEach(function(produto) {
        for (let i = 0; i < produto.quantity; i++) {
            ids.push(produto.id);
        }
    });

    fetch(BUY_URL, {
        method: 'POST',

        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            products: ids,
            student: estudante.checked,
            coupon: cupao.value,
            name: nome.value
        })
    })

    .then(function(response) {
        return response.json();
    })

    .then(function(dados) {

        if (dados.error) {
            resultadoCompra.textContent = dados.error;
        } else {
            resultadoCompra.innerHTML =
                '<p>Total: ' + dados.totalCost + ' €</p>' +
                '<p>Referência: ' + dados.reference + '</p>' +
                '<p>' + dados.message + '</p>';

            cesto = [];

            guardarCesto();
            atualizaCesto();
        }

    })

    .catch(function(erro) {
        resultadoCompra.textContent = 'Erro na compra!';
        console.log(erro);
    });

});



function iniciarLoja() {

    fetch(API_URL)

        .then(function(response) {

            if (!response.ok) {
                throw new Error('Erro HTTP: ' + response.status);
            }

            return response.json();

        })

        .then(function(dados) {

            produtos = dados;

            atualizarCategorias();
            atualizarListaProdutos();
            atualizaCesto();

            console.log(produtos.length + ' produtos carregados.');

        })

        .catch(function(erro) {

            console.log('Erro ao carregar produtos:', erro);

            produtosLista.textContent =
                'Não foi possível carregar os produtos.';

        });

}

iniciarLoja();
