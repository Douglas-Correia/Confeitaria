<!DOCTYPE html>
<html>
<head>
	<title>Nome da Confeitaria</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <script src="carrinho.js"></script>
  <script src="script.js"></script>
    <style>
        body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
      }
      
      header {
        background-color: #333;
        color: white;
        padding: 10px;
        text-align: center;
      }
      
      h1 {
        margin-top: 30px;
      }
      
      nav {
        background-color: #ddd;
        padding: 10px;
        text-align: center;
      }
      
      nav a {
        color: black;
        text-decoration: none;
        margin: 10px;
        font-weight: bold;
      }
      
      nav a:hover {
        background-color: #555;
        color: white;
        padding: 5px;
        border-radius: 5px;
      }
      
      section {
        margin: 20px;
        display: flex;
        flex-wrap: wrap;
      }
      
      .product {
        background-color: #f5f5f5;
        padding: 10px;
        margin: 10px;
        border-radius: 5px;
        width: 300px;
      }
      
      .product img {
        width: 100%;
      }
      
      .product h2 {
        margin-top: 0;
        font-size: 1.2em;
      }
      
      .product p {
        margin-bottom: 0;
        font-size: 0.8em;
      }
      
      .product button {
        margin-top: 10px;
        padding: 5px;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-weight: bold;
      }
      
      .product button:hover {
        background-color: #3e8e41;
      }
      
      .cart {
        margin: 20px;
        padding: 10px;
        background-color: #f5f5f5;
        border-radius: 5px;
        width: 300px;
      }
      
      .cart h2 {
        margin-top: 0;
        font-size: 1.2em;
      }
      
      .cart ul {
        padding: 0;
        margin: 0;
        list-style-type: none;
      }
      
      .cart li {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
      }
      
      .cart li span {
        font-weight: bold;
      }
      
    </style>
    
</head>
<body>
	<header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Minha Loja</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="#">Produtos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Carrinho</a>
      </li>
    </ul>
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#">Login</a>
      </li>
    </ul>
  </div>
</nav>

<div class="container-fluid">
  <div class="row">
    <div class="col-md-2 offset-md-10">
      <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#cart" aria-expanded="false" aria-controls="cart-items">
        Carrinho (0)
      </button>
    </div>
  </div>
  <div class="row collapse" id="cart">
    <div class="col-md-12">
      <table class="table cart-items">
        <thead class="list-group">
          <tr>
            <th scope="col">Quantidade</th>
            <th scope="col">Produtos</th>
            <th scope="col">Preço</th>
          </tr>
          <th scope="row" id="carrinho"></td>
        </thead>
        <tbody>
          <th id="carrinho"></td>
        </tbody>
      </table>
      <div class="text-right cart-total">
        <strong class="cart-total">Total: </strong>
        <span id="carrinho" class="cart-total">R$ 0,00</span>
      </div>
      <div class="text-right mt-3">
        <button class="btn btn-success" type="button">Finalizar Compra</button>
      </div>
    </div>
  </div>
</div>

		<div class="container">
			<div class="row">
				<div class="col-6">
					<h1 class="titulo">Bolo Bom</h1>
				</div>
				<div class="col-6 text-right">
                    <img src="caminho/para/o/logo.png" alt="Logo da Confeitaria">
				</div>
			</div>
		</div>

	</header>

      <section class="py-5">
  <div class="container">
    <h2 class="text-center mb-5">Nossos Bolos</h2>
    <ul class="list-unstyled row">
      <li class="col-md-4 mb-5">
        <div class="card h-100">
          <img class="card-img-top" src="imagem-do-bolo-1.jpg" alt="Bolo 1">
          <div class="card-body">
            <h3 class="card-title">Bolo 1</h3>
            <p class="card-text">Descrição do Bolo 1</p>
            <h4 class="card-price">R$ XX,XX</h4>
            <div class="text-center">
              <div class="input-group mb-3">
              <button class="btn btn-danger btn-minus" data-id="bolo-chocolate" onclick="removerDoCarrinho('produto1', 10.00)">-</button>
                <input type="text" class="form-control text-center" value="0" readonly data-id="menos">
                <button class="btn btn-primary btn-plus" data-id="bolo-chocolate" data-name="Bolo de Chocolate" data-price="35" onclick="adicionarAoCarrinho('Bolo de Chocolate', 10.00)">+</button>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="col-md-4 mb-5">
        <div class="card h-100">
          <img class="card-img-top" src="imagem-do-bolo-2.jpg" alt="Bolo 2">
          <div class="card-body">
            <h3 class="card-title">Bolo 2</h3>
            <p class="card-text">Descrição do Bolo 2</p>
            <h4 class="card-price">R$ XX,XX</h4>
            <div class="text-center">
              <div class="input-group mb-3">
              <button class="btn btn-danger" data-id="bolo-chocolate" onclick="removerDoCarrinho('produto2', 15.00)">-</button>
                <input type="text" class="form-control text-center" value="0" readonly>
                <button class="btn btn-primary" data-id="bolo-chocolate" data-name="Bolo de Chocolate" data-price="35" onclick="adicionarAoCarrinho('produto2', 15.00)">+</button>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="col-md-4 mb-5">
        <div class="card h-100">
          <img class="card-img-top" src="imagem-do-bolo-3.jpg" alt="Bolo 3">
          <div class="card-body">
            <h3 class="card-title" data-id="">Bolo 3</h3>
            <p class="card-text" data-name="">Descrição do Bolo 3</p>
            <h4 class="card-price" data-price="">R$ XX,XX</h4>
            <div class="text-center">
              <div class="input-group mb-3">
              <button class="btn btn-danger" data-id="bolo-chocolate" onclick="removerDoCarrinho('produto3', 20.00)">-</button>
                <input type="text" class="form-control text-center" value="0" readonly>
                <button class="btn btn-primary" data-id="bolo-chocolate" data-name="Bolo de Chocolate" data-price="35" onclick="adicionarAoCarrinho('produto3', 20.00)">+</button>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
 
        

	<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
  
</body>
</html>