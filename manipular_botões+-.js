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
// Variável global para armazenar os produtos no carrinho
let carrinhoProdutos = [];

// Função para adicionar produto ao carrinho
function adicionarProduto(id) {
  const inputQuantity = document.getElementById(`input-quantity-${id}`);
  let quantidade = parseInt(inputQuantity.value);

  quantidade++; // Incrementar a quantidade

  // Atualizar o valor do input com a nova quantidade
  inputQuantity.value = quantidade;

  const productId = `produto-${id}`;
  const produtoElement = document.getElementById(productId);
  const descProduto = document.getElementById(`desc-produto-${id}`);
  const valorProdutoElement = document.getElementById(`valor-produto-${id}`);

  if (produtoElement && valorProdutoElement) {
    const nomeProduto = produtoElement.textContent;
    const valorProdutoTexto = valorProdutoElement.textContent;
    const valorProduto = parseFloat(valorProdutoTexto.replace("R$ ", "").replace(",", "."));

    const valorTotal = valorProduto * quantidade;

    // Verifique se o produto já está no carrinho
    if (carrinhoProdutos[productId]) {
      // Atualize a quantidade
      carrinhoProdutos[productId].quantidade = quantidade;

      // Atualize o valor total
      carrinhoProdutos[productId].valorTotal = carrinhoProdutos[productId].valor * quantidade;

      // Agora, você pode atualizar os elementos no carrinho para refletir as mudanças
      const listItem = document.querySelector(`.cart-item[data-product-id="${productId}"]`);

      if (listItem) {
        const quantidadeElement = listItem.querySelector(".quantidade");
        const valorTotalElement = listItem.querySelector(".valor-total");

        quantidadeElement.textContent = `x ${quantidade}`;
        valorTotalElement.textContent = `R$ ${carrinhoProdutos[productId].valorTotal.toFixed(2)}`;
      }
    } else {
        // Se não estiver no carrinho, adicione como um novo item
        addItemToCart(nomeProduto, descProduto.textContent, valorProduto, quantidade, valorTotal, productId);
        carrinhoProdutos[productId] = {
          nome: nomeProduto,
          descricao: descProduto.textContent,
          valor: valorProduto,
          quantidade: quantidade,
          valorTotal: valorTotal,
      };
    }

    totalCart++;
    updateCartCount();
  }
}

// Simplificando a adição de ouvintes de evento para botões de adicionar
for (let i = 1; i <= 5; i++) {
  const btnPlus = document.getElementById(`btn-plus-${i}`);
  btnPlus.addEventListener("click", () => {
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

    const productId = `produto-${id}`;
    if (carrinhoProdutos[productId]) {
      // Reduza a quantidade no carrinho
      carrinhoProdutos[productId].quantidade--;

      // Atualize o valor total do produto no carrinho
      carrinhoProdutos[productId].valorTotal = carrinhoProdutos[productId].valor * carrinhoProdutos[productId].quantidade;

      // Atualize os elementos no carrinho para refletir as mudanças
      const listItem = document.querySelector(`.cart-item[data-product-id="${productId}"]`);

      if (listItem) {
        const quantidadeElement = listItem.querySelector(".quantidade");
        const valorTotalElement = listItem.querySelector(".valor-total");

        quantidadeElement.textContent = `x ${carrinhoProdutos[productId].quantidade}`;
        valorTotalElement.textContent = `R$ ${carrinhoProdutos[productId].valorTotal.toFixed(2)}`;

        // Se a quantidade chegar a 0, remova o item do carrinho
        if (carrinhoProdutos[productId].quantidade === 0) {
          removeItemFromCart(productId);
        }
      }
    }
  }
}

// Função para remover um item do carrinho usando o ID do produto
function removeItemFromCart(productId) {
  const cartItem = document.querySelector(`.cart-item[data-product-id="${productId}"]`);

  if (cartItem) {
    cartItem.remove();
    updateCartCount(); // Atualiza o totalCart

    // Remova o produto do carrinhoProdutos
    delete carrinhoProdutos[productId];
  }
}

// Função para adicionar um item à lista do carrinho
function addItemToCart(nome, descricao, valorUnitario, quantidade, valorTotal, productId) {
  const cartList = document.getElementById("cart-list");

  const listItem = document.querySelector(`.cart-item[data-product-id="${productId}"]`);

  if (listItem) {
    // Se o item já estiver no carrinho, atualize a quantidade, o valor total e a descrição
    const quantidadeElement = listItem.querySelector(".quantidade");
    const valorTotalElement = listItem.querySelector(".valor-total");
    const descricaoElement = listItem.querySelector(".descricao");

    carrinhoProdutos[productId].quantidade = quantidade;
    carrinhoProdutos[productId].valorTotal = valorTotal;
    carrinhoProdutos[productId].descricao = descricao;

    quantidadeElement.textContent = `x ${quantidade}`;
    valorTotalElement.textContent = `R$ ${valorTotal.toFixed(2)}`;
    descricaoElement.textContent = descricao;
  } else {
    // Se o item não estiver no carrinho, crie um novo elemento
    const listItem = document.createElement("li");
    listItem.className = "list-group-item d-flex justify-content-between lh-sm cart-item";
    listItem.setAttribute("data-product-id", productId);

    const itemDiv = document.createElement("div");
    const nomeElement = document.createElement("h6");
    nomeElement.className = "my-0";
    nomeElement.textContent = nome;

    const descricaoElement = document.createElement("small");
    descricaoElement.className = "text-muted descricao";
    descricaoElement.textContent = descricao;
    itemDiv.appendChild(nomeElement);
    itemDiv.appendChild(descricaoElement);

    const valorTotalElement = document.createElement("span");
    valorTotalElement.className = "valor-total";
    valorTotalElement.textContent = `R$ ${valorTotal.toFixed(2)}`;

    const quantidadeElement = document.createElement("span");
    quantidadeElement.className = "quantidade";
    quantidadeElement.textContent = `x ${quantidade}`;

    listItem.appendChild(itemDiv);
    listItem.appendChild(valorTotalElement);
    listItem.appendChild(quantidadeElement);
    cartList.appendChild(listItem);
  }
  // Adicionar informações do produto ao carrinhoProdutos
  carrinhoProdutos[productId] = {
    nome: nome,
    descricao: descricao,
    valor: valorUnitario,
    quantidade: quantidade,
    valorTotal: valorTotal,
  };
}

// Função para atualizar a contagem do carrinho
function updateCartCount() {
  document.getElementById("cart-count").textContent = totalCart;
  document.getElementById("quantity-carrinho").textContent = totalCart;
}

const whatsappButton = document.getElementById("whatsapp-button");

whatsappButton.addEventListener("click", function () {
  let firstName = document.querySelector("#firstName").value;
  let address = document.querySelector("#address").value;

  const deliveryOptionElements = document.querySelectorAll('input[name="delivery"]');
  let deliveryOption;
  deliveryOptionElements.forEach(element => {
    if (element.checked) {
      deliveryOption = element.value;
    }
  });

  const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

  // Obtenha os produtos selecionados com base em carrinhoProdutos
  const selectedProducts = Object.keys(carrinhoProdutos).map(productId => {
    const item = carrinhoProdutos[productId];
    return `${item.quantidade} x ${item.nome} (${item.descricao}) por R$ ${item.valorTotal.toFixed(2)}`;
  });

  const selectedProductsString = selectedProducts.join(", ");

  // Calcular o valor total do carrinho
  const totalValue = Object.values(carrinhoProdutos).reduce((total, item) => total + item.valorTotal, 0);

  let deliveryMessage;
  if (deliveryOption === "pickup") {
    deliveryMessage = "Retirada no local";
  } else {
    // Se não for retirada no local, incluir o endereço de entrega
    deliveryMessage = `Entregar no endereço: ${address}`;
  }

  const whatsappMessage = `Olá, meu nome é ${firstName}.\n` +
    `Eu gostaria de fazer um pedido com os seguintes produtos:\n${selectedProductsString}\n` +
    `Opção de entrega: ${deliveryMessage},\n` +
    `Método de pagamento: ${paymentMethod}\n` +
    `Valor Total: R$ ${totalValue.toFixed(2)}`;

  const whatsappLink = `https://api.whatsapp.com/send?phone=67999397401&text=${encodeURIComponent(whatsappMessage)}`;

  window.location.href = whatsappLink;
});
