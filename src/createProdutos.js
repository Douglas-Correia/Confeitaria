import { catalogoProdutos } from "./utilidades";

export function criarProdutos(){
    for(const produto of catalogoProdutos){
        const cardProdutos = `
        <div class="border-solid w-48 m-2 flex flex-col p-2 justify-between shadow-xl shadow-slate-400 rounded-lg group" id="card-produto">
            <img src="${produto.img}" alt="" class="group-hover:scale-110 duration-300 my-3 rounded-lg">
            <p class="text-sm">${produto.nomeProduto}</p>
            <p class="text-sm">${produto.descProduto}</p>
            <p class="text-sm">${produto.preco}.00</p>
            <button id="adicionar" class="bg-slate-950 text-slate-200 hover:bg-slate-700"><i class="fa-solid fa-cart-plus"></i>"</button>
        </div>`;

        document.querySelector("#container-produtos").innerHTML += cardProdutos;
    }
}