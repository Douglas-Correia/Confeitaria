// Selecionando todos os botões "+" e "-" na página
const addButtons = document.querySelectorAll(".add-btn");
const minusButtons = document.querySelectorAll(".minus-btn");

// Adicionando um evento de clique para cada botão "+"
addButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const id = event.target.dataset.id; // Obtendo o ID do item
    const itemQuantity = document.querySelector(`#quantity-${id}`); // Selecionando o elemento de quantidade do item correspondente ao ID
    const currentQuantity = Number(itemQuantity.textContent); // Convertendo a quantidade atual em um número
    const newQuantity = currentQuantity + 1; // Adicionando 1 à quantidade atual
    itemQuantity.textContent = newQuantity; // Atualizando a quantidade exibida na página
  });
});

// Adicionando um evento de clique para cada botão "-"
minusButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const id = event.target.dataset.id; // Obtendo o ID do item
    const itemQuantity = document.querySelector(`#quantity-${id}`); // Selecionando o elemento de quantidade do item correspondente ao ID
    const currentQuantity = Number(itemQuantity.textContent); // Convertendo a quantidade atual em um número
    const newQuantity = Math.max(currentQuantity - 1, 0); // Subtraindo 1 da quantidade atual (mas garantindo que não seja negativa)
    itemQuantity.textContent = newQuantity; // Atualizando a quantidade exibida na página
  });
});
