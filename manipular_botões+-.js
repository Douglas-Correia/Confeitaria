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

function updateCartCount(){
  let cartCount = document.getElementById("cart-count");
  cartCount.textContent = totalCart // Atualizando o conteúdo do span
}

btnPlus.addEventListener('click', () => {
  let quantity = parseInt(inputQuantity.value);
  quantity++;
  inputQuantity.value = quantity;

  totalCart++; // Atualizando o atributo value
  updateCartCount() // Chamando a função que atualiza o span

  const productId = document.getElementById("produto1").textContent;
  const descProduto = document.getElementById("desc-produto1").textContent;
  const valorProduto = document.getElementById("valor-produto1").textContent;

  // Redirecionando para a página do carrinho com os valores na query string
  window.location.href = `carrinho.html?productId=${productId}&descProduto=${descProduto}&valorProduto=${valorProduto}`;
});

btnMinus.addEventListener('click', () => {
  let quantity = parseInt(inputQuantity.value);
  if (quantity > 0) {
    quantity--;
    inputQuantity.value = quantity;

    totalCart--; // Atualizando o atributo value
    updateCartCount() // Chamando a função que atualiza o span
    }
});

// Manipulando botões 2
btnPlus2.addEventListener('click', () => {
  let quantity2 = parseInt(inputQuantity2.value);
  quantity2++;
  inputQuantity2.value = quantity2;

  totalCart++; // Atualizando o atributo value
  updateCartCount() // Chamando a função que atualiza o span
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