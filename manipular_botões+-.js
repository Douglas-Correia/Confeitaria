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

// Manipulando botões 1
btnPlus.addEventListener('click', () => {
  let quantity = parseInt(inputQuantity.value);
  quantity++;
  inputQuantity.value = quantity;
});

btnMinus.addEventListener('click', () => {
  let quantity = parseInt(inputQuantity.value);
  if (quantity > 0) {
    quantity--;
    inputQuantity.value = quantity;
  }
});

// Manipulando botões 2
btnPlus2.addEventListener('click', () => {
  let quantity2 = parseInt(inputQuantity2.value);
  quantity2++;
  inputQuantity2.value = quantity2;
});

btnMinus2.addEventListener('click', () => {
  let quantity2 = parseInt(inputQuantity2.value);
  if (quantity2 > 0) {
    quantity2--;
    inputQuantity2.value = quantity2;
  }
});
// Manipulando botões 3
btnPlus3.addEventListener('click', () => {
  let quantity3 = parseInt(inputQuantity3.value);
  quantity3++;
  inputQuantity3.value = quantity3;
})

btnMinus3.addEventListener('click', () => {
  let quantity3 = parseInt(inputQuantity3.value);
  if(quantity3 > 0){
  quantity3--;
  inputQuantity3.value = quantity3;
  }
})

// Manipulando botões 4
btnPlus4.addEventListener('click', () => {
  let quantity4 = parseInt(inputQuantity4.value);
  quantity4++;
  inputQuantity4.value = quantity4;
})

btnMinus4.addEventListener('click', () => {
  let quantity4 = parseInt(inputQuantity4.value);
  if(quantity4 > 0){
    quantity4--;
    inputQuantity4.value = quantity4;
  }
})

//Manipulando botões 5
btnPlus5.addEventListener('click', () => {
  let quantity5 = parseInt(inputQuantity5.value);
  quantity5++;
  inputQuantity5.value = quantity5;
})

btnMinus5.addEventListener('click', () => {
  let quantity5 = parseInt(inputQuantity5.value);
  if(quantity5 > 0){
    quantity5--;
    inputQuantity5.value = quantity5;
  }
})


// adicionando ao carrinho
let cart = {};

function addToCart(name, price, quantity) {
  if (cart[name]) {
    cart[name].quantity += quantity;
  } else {
    cart[name] = { price, quantity };
  }
}

function removeFromCart(name, quantity) {
  if (cart[name]) {
    cart[name].quantity -= quantity;
    if (cart[name].quantity <= 0) {
      delete cart[name];
    }
  }
}

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

// Elemento flutuante
//let cartButton = document.getElementById("cart-button");
//let cartPanel = document.getElementById("cart-panel");

//cartButton.addEventListener('click', () => {
  //if (cartPanel.classList.contains("hide")) {
    //cartPanel.classList.remove("hide");
  //} else {
    //cartPanel.classList.add("hide");
  //}
//});
