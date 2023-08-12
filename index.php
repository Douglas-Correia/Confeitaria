<!DOCTYPE html>
<html>
<head>
	<title>Bolos delicia</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css">
  <link rel="stylesheet" href="style.css">
 
</head>
<body>
<header>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">Bolos delicia</a>
      <button id="btn-nav" class="navbar-toggler" type="button" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse hide" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Bolos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Doces</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Salgados</a>
          </li>
        </ul>
      </div>
      <div class="navbar-text">
        <span class="badge bg-success text-white ms-1 update-cart-quantity" id="cart-count" value="0">0</span>
        <a href="carrinho.php" class="btn btn-primary ms-1" id="cart-button" action="carrinho.php">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                <path d="M0 0h1v1H0V0zm3 0h10v1H3V0zm11 2H2.133l-.8 4h12.534l-.8-4zM3.2 6L3.8 4h8.4l.6 3H3.2zm-1 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm10 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
        </svg>
    </a>
</div>
    </div>
  </nav>
</header>

<section class="py-5">
  <div class="container">
    <h2 class="text-center mb-5">Nossos Bolos</h2>
    <ul class="list-unstyled row">
      <li class="col-md-4 mb-5">
        <!-- Produto 1 -->
        <div class="col-md-4 mb-3">
          <div class="card">
            <img class="card-img-top" src="https://via.placeholder.com/300x200.png?text=Produto+1" alt="Imagem do produto 1">
            <div class="card-body">
              <h3 class="card-title" id="produto1">Produto 1</h3>
              <p class="card-text" id="desc-produto1">Descrição do Produto 1</p>
              <h4 class="card-price" id="valor-produto1">R$ XX,XX</h4>
              <div class="text-center">
                <div class="input-group mb-3">
                  <button id="btn-minus" class="btn btn-danger">-</button>

                  <input id="input-quantity" type="text" class="form-control text-center" value="0" readonly>

                  <button id="btn-plus" class="btn btn-primary" name="btn-adicionar">+</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Produto 2 -->
        <div class="col-md-4 mb-3">
          <div class="card">
            <img class="card-img-top" src="https://via.placeholder.com/300x200.png?text=Produto+2" alt="Imagem do produto 2">
            <div class="card-body">
              <h3 class="card-title" id="produto2">Produto 2</h3>
              <p class="card-text" id="desc-produto2">Descrição do Produto 2</p>
              <h4 class="card-price" id="valor-produto2">R$ XX,XX</h4>
              <div class="text-center">
                <div class="input-group mb-3">
                <button id="btn-minus2" class="btn btn-danger">-</button>

                  <input id="input-quantity2" type="text" class="form-control text-center" value="0" readonly>

                  <button id="btn-plus2" class="btn btn-primary" name="btn-adicionar">+</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Produto 3 -->
        <div class="col-md-4 mb-3">
          <div class="card">
            <img class="card-img-top" src="https://via.placeholder.com/300x200.png?text=Produto+3" alt="Imagem do produto 2">
            <div class="card-body">
              <h3 class="card-title" id="produto3">Produto 3</h3>
              <p class="card-text" id="desc-produto3">Descrição do Produto 2</p>
              <h4 class="card-price" id="valor-produto3">R$ XX,XX</h4>
              <div class="text-center">
                <div class="input-group mb-3">
                <button id="btn-minus3" class="btn btn-danger">-</button>

                <input id="input-quantity3" type="text" class="form-control text-center" value="0" readonly>

                <button id="btn-plus3" class="btn btn-primary" name="btn-adicionar">+</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Produto 4 -->
        <div class="col-md-4 mb-3">
          <div class="card">
            <img class="card-img-top" src="https://via.placeholder.com/300x200.png?text=Produto+4" alt="Imagem do produto 2">
            <div class="card-body">
              <h3 class="card-title" id="produto4">Produto 4</h3>
              <p class="card-text" id="desc-produto">Descrição do Produto 2</p>
              <h4 class="card-price" id="valor-produto">R$ XX,XX</h4>
              <div class="text-center">
                <div class="input-group mb-3">
                <button id="btn-minus4" class="btn btn-danger">-</button>

                <input id="input-quantity4" type="text" class="form-control text-center" value="0" readonly>

                <button id="btn-plus4" class="btn btn-primary" name="btn-adicionar">+</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Produto 4 -->
      <div class="col-md-4 mb-3">
          <div class="card">
            <img class="card-img-top" src="https://via.placeholder.com/300x200.png?text=Produto+5" alt="Imagem do produto 5">
            <div class="card-body">
              <h3 class="card-title" id="produto5">Produto 5</h3>
              <p class="card-text" id="desc-produto5">Descrição do Produto 2</p>
              <h4 class="card-price" id="valor-produto5">R$ XX,XX</h4>
              <div class="text-center">
                <div class="input-group mb-3">
                <button id="btn-minus5" class="btn btn-danger">-</button>

                <input id="input-quantity5" type="text" class="form-control text-center" value="0" readonly>

                <button id="btn-plus5" class="btn btn-primary" name="btn-adicionar">+</button>
              </div>
            </div>
          </div>
        </div>
    </li>
  </ul>

  <div class="d-flex justify-content-center align-items-center">
  <a href="carrinho.php" class="btn btn-lg btn-outline-secondary btn-primary">Finalizar compra</a>
</div>
</section>
  
	<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
  <script src="manipular_botões+-.js"></script>
  <script src="adicionar_carrinho.js"></script>
  
</body>
</html>