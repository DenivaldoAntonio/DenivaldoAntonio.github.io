
function carregarProdutos(produtos) {
    const section = document.querySelector('#produtos');
  
    produtos.forEach((produto) => {
      console.log(`ID: ${produto.id}, Title: ${produto.title}`);
  
      const artigo = criarProduto(produto);
  
      section.append(artigo);
    });
  }

  function criarProduto(produto) {
    const article = document.createElement('article');
  
    const titleElement = document.createElement('h2');
    titleElement.textContent = produto.title;
  
    const imgElement = document.createElement('img');
    imgElement.src = produto.imageUrl;
    imgElement.alt = produto.title;
  
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = produto.description;
  
    const priceElement = document.createElement('span');
    priceElement.textContent = `Preço: R$ ${produto.price}`;
  
    article.appendChild(titleElement);
    article.appendChild(imgElement);
    article.appendChild(descriptionElement);
    article.appendChild(priceElement);
  
    return article;
  }
  
carregarProdutos(produtos)