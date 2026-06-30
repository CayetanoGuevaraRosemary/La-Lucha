document.write(`
<nav class="navbar navbar-expand-lg navbar-lucha navbar-transparente fixed-top" id="navLucha">
  <div class="container position-relative">
    <a class="logo-circulo" href="index.html"><img src="img/logo.svg" alt="La Lucha"></a>
    <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navMenu">
      <ul class="navbar-nav me-auto">
        <li class="nav-item"><a class="nav-link" data-link="inicio" href="index.html">Inicio</a></li>
        <li class="nav-item"><a class="nav-link" data-link="nosotros" href="nosotros.html">Nosotros</a></li>
        <li class="nav-item"><a class="nav-link" data-link="ubicanos" href="ubicanos.html">Locales</a></li>
      </ul>
      <ul class="navbar-nav ms-auto align-items-lg-center">
        <li class="nav-item"><a class="nav-link" data-link="servicios" href="servicios.html">Carta</a></li>
        <li class="nav-item"><a class="nav-link" data-link="contacto" href="contacto.html">Contacto</a></li>
        <li class="nav-item"><a class="nav-link" data-link="login" href="login.html">Ingresar</a></li>
        <li class="nav-item"><a class="nav-link position-relative" data-link="carrito" href="carrito.html">
          <i class="material-icons align-middle" style="font-size:1.1rem">shopping_cart</i> Carrito <span id="cartBadge" class="badge bg-danger rounded-pill ms-1">0</span>
        </a></li>
      </ul>
    </div>
  </div>
</nav>
`);
document.addEventListener('DOMContentLoaded', function(){
  var pagina = document.body.getAttribute('data-page');
  document.querySelectorAll('.navbar-lucha a[data-link="'+pagina+'"]').forEach(function(l){ l.classList.add('active','text-danger'); });
  var nav = document.getElementById('navLucha');
  function chk(){ nav.classList.toggle('navbar-solida', window.scrollY > 60); }
  window.addEventListener('scroll', chk);
  chk();
});
