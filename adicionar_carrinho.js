// Verificando se existe a classe hide, quando clicar no menu, remove a classe, quando clicar novamente, adiciona a classe
let btn_nav = document.getElementById("btn-nav");
let display_nav = document.getElementById("navbarNav");

btn_nav.addEventListener('click', () => {
  if (display_nav.classList.contains("hide")) {
    display_nav.classList.remove("hide");
  } else {
    display_nav.classList.add("hide");
  }
});

// essa sessão eu pego os ids dos button e inputs
let btnPlus = document.getElementById("btn-plus");
let btnMinus = document.getElementById("btn-minus");

let btnPlus2 = document.getElementById("btn-plus2");
let btnMinus2 = document.getElementById("btn-minus2");

let btnPlus3 = document.getElementById("btn-plus3");
let btnMinus3 = document.getElementById("btn-minus3");

let btnPlus4 = document.getElementById("btn-plus4");
let btnMinus4 = document.getElementById("btn-minus4");

let btnPlus5 = document.getElementById("btn-plus5");
let btnMinus5 = document.getElementById("btn-minus5");

let inputQuantity = document.getElementById("input-quantity");
let inputQuantity2 = document.getElementById("input-quantity2");
let inputQuantity3 = document.getElementById("input-quantity3");
let inputQuantity4 = document.getElementById("input-quantity4");
let inputQuantity5 = document.getElementById("input-quantity5");
let totalCart = 0;

// FUNÇÃO PARA ADICIONAR PRODUTOS AO CARRINHO
function adicionarProduto(id) {
  let inputQuantity = document.getElementById(`input-quantity-${id}`);
  let quantidade = parseInt(inputQuantity.value);
  quantidade++;
  inputQuantity.value = quantidade;

  totalCart++; // Atualizando o atributo value
  updateCartCount(); // Chamando a função que atualiza o span

  const produtoElement = document.getElementById(`produto-${id}`);
  const descProduto = document.getElementById(`desc-produto-${id}`);
  const valorProduto = document.getElementById(`valor-produto-${id}`);

  // Crie um ID exclusivo para o produto no carrinho
  const productId = `produto-${id}`;

  addItemToCart(produtoElement.textContent, descProduto.textContent, valorProduto.textContent, productId);
}

// Adicione ouvintes de evento a cada botão de adicionar
for (let i = 1; i <= 5; i++) {
  document.getElementById(`btn-plus-${i}`).addEventListener("click", () => {
    adicionarProduto(i);
  });
}

// Adicione um ouvinte de evento ao elemento pai (cart-container)
const cartContainer = document.getElementById("cart-container");

cartContainer.addEventListener("click", (event) => {
  // Verifique se o elemento clicado é um botão de remover (classe btn-minus)
  if (event.target.classList.contains("btn-minus")) {
    // Obtenha o ID do botão clicado
    const buttonId = event.target.id; // Isso deve ser algo como "btn-minus-1", "btn-minus-2", etc.
    
    // Extraia o número do ID para obter o índice do produto
    const productId = parseInt(buttonId.split("-")[2]);

    // Chame a função para remover o produto com o ID correto
    removerProduto(productId);
  }
});

// Função para remover produtos do carrinho
function removerProduto(id) {
  let inputQuantity = document.getElementById(`input-quantity-${id}`);
  let quantidade = parseInt(inputQuantity.value);
  if (quantidade > 0) {
    quantidade--;
    inputQuantity.value = quantidade;

    totalCart--; // Atualizando o atributo value
    updateCartCount(); // Chamando a função que atualiza o span

    // Remova o item do carrinho se a quantidade for zero
    if (quantidade === 0) {
      removeItemFromCart(`produto-${id}`);
    }
  }
}

// Função para remover um item do carrinho usando o ID do produto
function removeItemFromCart(productId) {
  const cartItem = document.querySelector(`.cart-item[data-product-id="${productId}"]`);

  if (cartItem) {
    cartItem.remove();
    totalCart--; // Atualizando o totalCart
    updateCartCount();
  }
}

// Função para adicionar um item à lista do carrinho
function addItemToCart(nome, descricao, valor, productId) {
  const cartList = document.getElementById("cart-list");

  const listItem = document.createElement("li");
  listItem.className = "list-group-item d-flex justify-content-between lh-sm cart-item";
  listItem.setAttribute("data-product-id", productId);

  const itemDiv = document.createElement("div");
  const nomeElement = document.createElement("h6");
  nomeElement.className = "my-0";
  nomeElement.textContent = nome;

  const descricaoElement = document.createElement("small");
  descricaoElement.className = "text-muted";
  descricaoElement.textContent = descricao;
  itemDiv.appendChild(nomeElement);
  itemDiv.appendChild(descricaoElement);

  const valorElement = document.createElement("span");
  valorElement.className = "text-muted";
  valorElement.textContent = valor;
  valorElement.id = `valor-${productId}`;

  listItem.appendChild(itemDiv);
  listItem.appendChild(valorElement);
  cartList.appendChild(listItem);
}

// Função para atualizar a contagem do carrinho
function updateCartCount() {
  document.getElementById("cart-count").textContent = totalCart;
}

// Evento para fechar o carrinho
document.getElementById("fechar-carrinho").addEventListener("click", () => {
  // Feche o carrinho aqui (adicione o código necessário)
});

// FUNÇÃO PARA MANIPULAÇÃO DOS PRODUTOS SELECIONADOS E CHAMADA DO WHATSAPP
const whatsappButton = document.getElementById("whatsapp-button");

whatsappButton.addEventListener("click", function () {
  const firstName = document.getElementById("firstName").value;
  const address = document.getElementById("address").value;

  // Capturar o produto escolhido pelo cliente (você pode adicionar um elemento HTML para isso)
  const selectedProduct = document.getElementById("product-select").value;

  const whatsappMessage = `Olá, meu nome é ${firstName}, Eu gostaria de pedir um ${selectedProduct}, meu endereço é ${address}.`;

  const whatsappLink = `https://api.whatsapp.com/send?phone=67999397401&text=${whatsappMessage}`;

  window.location.href = whatsappLink;
});
