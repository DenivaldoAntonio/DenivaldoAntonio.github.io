// Armazena a referência ao elemento uma vez
const element = document.querySelector('.meu-elemento');

function count() {
    // Usa a referência armazenada, evitando pesquisa repetida
    element.textContent = parseInt(element.textContent) + 1;
}

// Chame a função count conforme necessário
count();

// Pesquisa realizada apenas uma vez, fora da função
const heading = document.querySelector('h1');

function updateHeading() {
    // Usa a referência armazenada para atualizar propriedades ou conteúdo
    heading.textContent = 'Novo Título';
    heading.style.color = 'blue';
}

// Chame a função para modificar o conteúdo ou o estilo do heading
updateHeading();
