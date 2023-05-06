let carrinho = [];

function adicionarAoCarrinho(produto, preco) {
	let item = carrinho.find(function (item) {
		return item.produto === produto;
	});
	if (item) {
		item.quantidade++;
	} else {
		carrinho.push({
			produto: produto,
			preco: preco,
			quantidade: 1
		});
	}
	atualizarCarrinho();
}

function removerDoCarrinho(produto, preco) {
	let item = carrinho.find(function (item) {
		return item.produto === produto;
	});
	if (item && item.quantidade > 0) {
		item.quantidade--;
		if (item.quantidade === 0) {
			carrinho = carrinho.filter(function (item) {
				return item.produto !== produto;
			});
		}
	}
	atualizarCarrinho();
}

function atualizarCarrinho() {
	let carrinhoElemento = document.getElementById("carrinho");
	carrinhoElemento.innerHTML = "";
	let total = 0;
	for (let i = 0; i < carrinho.length; i++) {
		let item = carrinho[i];
		let itemElemento = document.createElement("div");
		itemElemento.innerHTML = item.quantidade + " x " + item.produto + " - R$ " + (item.quantidade * item.preco).toFixed(2);
		carrinhoElemento.appendChild(itemElemento);
		total += item.quant
    }}