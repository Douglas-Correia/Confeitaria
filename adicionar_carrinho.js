document.addEventListener("DOMContentLoaded", function () {
  if (window.location.href.includes("carrinho.html")) {
    // Obtendo os valores da query string da URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("productId");
    const descProduto = urlParams.get("descProduto");
    const valorProduto = urlParams.get("valorProduto");

    if (window.location.href.includes("carrinho.html")) {
      addItemToCart(productId, descProduto, valorProduto);
    }
    const whatsappButton = document.getElementById("whatsapp-button");
  
    whatsappButton.addEventListener("click", function () {
      const firstName = encodeURIComponent(document.getElementById("firstName").value);
      const address = encodeURIComponent(document.getElementById("address").value);
      
      const whatsappMessage = `Olá, meu nome é ${firstName}, Eu gostaria de pedir um ${productId},  meu endereço é ${address}.`;
      
      const whatsappLink = `https://api.whatsapp.com/send?phone=67999397401&text=${whatsappMessage}`;
      
      window.location.href = whatsappLink;
  });
  }
});

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

  listItem.appendChild(itemDiv);
  listItem.appendChild(valorElement);

  cartList.appendChild(listItem);
}