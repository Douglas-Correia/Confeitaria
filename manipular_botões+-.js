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

// FUNÇÃO PARA ALTERAR A QUANTIDADE DO CARRINHO 
function updateCartCount(){
  let cartCount = document.getElementById("cart-count");
  cartCount.textContent = totalCart // Atualizando o conteúdo do span
}

// FUNÇÃO PARA ADICIONAR PRODUTOS AO CARRINHO
btnPlus.addEventListener('click', () => {
  let quantity = parseInt(inputQuantity.value);
  quantity++;
  inputQuantity.value = quantity;

  totalCart++; // Atualizando o atributo value
  updateCartCount() // Chamando a função que atualiza o span

  const productId = document.getElementById("produto1").textContent;
  const descProduto = document.getElementById("desc-produto1").textContent;
  const valorProduto = document.getElementById("valor-produto1").textContent;

  addItemToCart(productId, descProduto, valorProduto);
});

// Selecione todos os botões "Menos" com a classe "btn-minus"
const btnMinusArray = document.querySelectorAll(".btn-minus");

// Adicione um ouvinte de evento a cada botão "Menos"
btnMinusArray.forEach(btnMinus => {
  btnMinus.addEventListener('click', () => {
    let quantity = parseInt(inputQuantity.value);
    if (quantity > 0) {
      quantity--;
      inputQuantity.value = quantity;

      totalCart--; // Atualize o atributo value
      updateCartCount(); // Chame a função que atualiza o span

      // Obtenha o productId do atributo data-product-id
      const productId = btnMinus.getAttribute("data-product-id");
      removeItemFromCart(productId);
    }
  });
});

// Manipulando botões 2
btnPlus2.addEventListener('click', () => {
  let quantity2 = parseInt(inputQuantity2.value);
  quantity2++;
  inputQuantity2.value = quantity2;

  totalCart++; // Atualizando o atributo value
  updateCartCount() // Chamando a função que atualiza o span

  const productId = document.getElementById("produto2").textContent;
  const descProduto = document.getElementById("desc-produto2").textContent;
  const valorProduto = document.getElementById("valor-produto2").textContent;

  addItemToCart(productId, descProduto, valorProduto);
});

btnMinus2.addEventListener('click', () => {
  let quantity2 = parseInt(inputQuantity2.value);
  if (quantity2 > 0) {
    quantity2--;
    inputQuantity2.value = quantity2;

    totalCart--; // Atualizando o atributo value
    updateCartCount() // Chamando a função que atualiza o span
  }
});
// Manipulando botões 3
btnPlus3.addEventListener('click', () => {
  let quantity3 = parseInt(inputQuantity3.value);
  quantity3++;
  inputQuantity3.value = quantity3;

  totalCart++; // Atualizando o atributo value
  updateCartCount() // Chamando a função que atualiza o span
})

btnMinus3.addEventListener('click', () => {
  let quantity3 = parseInt(inputQuantity3.value);
  if(quantity3 > 0){
    quantity3--;
    inputQuantity3.value = quantity3;

    totalCart--; // Atualizando o atributo value
    updateCartCount() // Chamando a função que atualiza o span
  }
})

// Manipulando botões 4
btnPlus4.addEventListener('click', () => {
  let quantity4 = parseInt(inputQuantity4.value);
  quantity4++;
  inputQuantity4.value = quantity4;

  totalCart++; // Atualizando o atributo value
  updateCartCount() // Chamando a função que atualiza o span
})

btnMinus4.addEventListener('click', () => {
  let quantity4 = parseInt(inputQuantity4.value);
  if(quantity4 > 0){
    quantity4--;
    inputQuantity4.value = quantity4;

    totalCart--; // Atualizando o atributo value
    updateCartCount() // Chamando a função que atualiza o span
  }
})

//Manipulando botões 5
btnPlus5.addEventListener('click', () => {
  let quantity5 = parseInt(inputQuantity5.value);
  quantity5++;
  inputQuantity5.value = quantity5;

  totalCart++; // Atualizando o atributo value
  updateCartCount() // Chamando a função que atualiza o span
})

btnMinus5.addEventListener('click', () => {
  let quantity5 = parseInt(inputQuantity5.value);
  if(quantity5 > 0){
    quantity5--;
    inputQuantity5.value = quantity5;

    totalCart--; // Atualizando o atributo value
    updateCartCount() // Chamando a função que atualiza o span
  }
})

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

function removeItemFromCart(productId) {
  // Crie o ID exclusivo do elemento do carrinho
  const cartItemId = "cart-item-" + productId;

  // Selecione o elemento do carrinho com base no cartItemId
  const cartItem = document.getElementById(cartItemId);

  if (cartItem) {
    // Remova o elemento do carrinho
    cartItem.remove();

    // Atualize o carrinho na interface do usuário
    updateCartCount();
  }
}

// Função para adicionar um item à lista do carrinho
function addItemToCart(nome, descricao, valor) {
  const cartList = document.getElementById("cart-list");

  const listItem = document.createElement("li");
  listItem.className = "list-group-item d-flex justify-content-between lh-sm";

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
  valorElement.id = "valor-" + nome.toLowerCase().replace(" ", "-");

  const hr = document.createElement("hr");

  listItem.appendChild(itemDiv);
  listItem.appendChild(valorElement);
  cartList.appendChild(listItem);
}

// FUNÇÃO PARA MANIPULAÇÃO DOS PRODUTOS SELECIONADOS E CHAMADA DO WHATSAPP
const whatsappButton = document.getElementById("whatsapp-button");

whatsappButton.addEventListener("click", function () {
  const firstName = document.getElementById("firstName").value;
  const address = document.getElementById("address").value;
  
  const whatsappMessage = `Olá, meu nome é ${firstName}, Eu gostaria de pedir um ${productId},  meu endereço é ${address}.`;
  
  const whatsappLink = `https://api.whatsapp.com/send?phone=67999397401&text=${whatsappMessage}`;
  
  window.location.href = whatsappLink;
});
