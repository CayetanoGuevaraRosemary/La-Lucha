var menu = {
  sandwiches: [
    ["Pavo a la Leña","Pavo jugoso asado a la leña con toque criollo.",16.90,"image/sandwich1.jpg"],
    ["Lechón a la Leña","Lechón cocido lentamente, jugoso y crocante.",16.90,"image/sandwich1.jpg"],
    ["Asado de Res al Jugo","Carne de res asada en su jugo.",16.90,"image/sandwich1.jpg"],
    ["Chicharrón","Chicharrón crocante de cerdo, receta de casa.",15.90,"image/sandwich1.jpg"],
    ["Jamón del País","Jamón del país con cremas criollas.",13.90,"image/sandwich1.jpg"],
    ["Jamón Serrano","Jamón serrano premium con cremas selectas.",15.90,"image/sandwich1.jpg"],
    ["Hamburguesa","Receta cargada con queso fundido.",14.90,"image/sandwich1.jpg"],
    ["Pollo a la Leña","Pollo asado a la leña, jugoso por dentro.",14.90,"image/sandwich1.jpg"],
    ["Pollo Deshilachado","Pollo deshilachado en salsa criolla.",14.90,"image/sandwich1.jpg"],
    ["Pollo con Piña","Pollo con piña, dulce y salado.",14.90,"image/sandwich1.jpg"],
    ["Mixto","Jamón y queso a la parrilla.",15.90,"image/sandwich1.jpg"],
    ["El Preferido","El favorito de la casa.",16.90,"image/sandwich1.jpg"],
    ["Mixto Serrano","Jamón serrano, queso y cremas.",16.90,"image/sandwich1.jpg"],
    ["La Lucha","Receta especial con queso fundido y salsa secreta.",19.90,"image/sandwich1.jpg"],
    ["Club Sandwich","Doble pan, pollo, jamón, tocino, queso y huevo.",19.90,"image/sandwich1.jpg"],
    ["Club a la Leña","Club sandwich con toque ahumado.",19.90,"image/sandwich1.jpg"],
    ["Panini Atún","Panini de atún, toque mediterráneo.",17.90,"image/sandwich1.jpg"]
  ],
  papas: [
    ["Promo Papas + Sanguche","Papas fritas crocantes de acompañamiento.",4.90,"image/papas1.jpg"],
    ["Papas a la Huancaína","Papas bañadas en salsa huancaína.",9.90,"image/papas1.jpg"],
    ["Papas con Chicharrón","Papas fritas con trozos de chicharrón.",12.90,"image/papas1.jpg"]
  ],
  bebidas: [
    ["Chicha Morada","Refrescante chicha morada de la casa.",6.90,"image/bebida1.jpg"],
    ["Limonada","Limonada clásica bien helada.",6.90,"image/bebida1.jpg"],
    ["Inca Kola 500ml","Bebida gaseosa peruana.",5.50,"image/bebida1.jpg"],
    ["Jugo de Lúcuma","Cremoso jugo natural con leche.",11.40,"image/bebida1.jpg"],
    ["Jugo de Maracuyá","Jugo natural de maracuyá bien frío.",8.40,"image/bebida1.jpg"]
  ]
};

var locales = [
  ["Miraflores","Pasaje Champagnat 139"],
  ["Miraflores","Av. Diagonal 308"],
  ["Miraflores","Av. José Larco 999"],
  ["San Miguel","Av. de la Marina 790"],
  ["Santiago de Surco","Av. El Polo 709"],
  ["Surquillo","Calle Manuel Gonzáles Prada 501"],
  ["Cercado de Lima","C.C. Real Plaza Centro Cívico"],
  ["Independencia","C.C. Plaza Norte"],
  ["Santa Anita","Mall Aventura Santa Anita"],
  ["Arequipa","Calle Mercaderes 116-118"],
  ["Trujillo","Mallplaza Trujillo"]
];

function pintarCategoria(cat){
  document.getElementById('listaProductos').innerHTML = menu[cat].map(function(p){
    return '<div class="col-6 col-md-4"><div class="card-lucha"><img src="'+p[3]+'" alt="'+p[0]+'">'
      + '<div class="card-body"><div class="card-title">'+p[0]+'</div>'
      + '<div class="card-desc">'+p[1]+'</div>'
      + '<div class="precio">S/'+p[2].toFixed(2)+'</div></div></div></div>';
  }).join('');
}

function pintarMapa(q){
  document.getElementById('mapaFrame').src = 'https://www.google.com/maps?q='+encodeURIComponent(q)+'&output=embed';
}

function pintarLocales(){
  var cont = document.getElementById('contLocales');
  locales.forEach(function(l, i){
    var div = document.createElement('div');
    div.className = 'local-item'+(i===0 ? ' activo' : '');
    div.innerHTML = '<i class="bi bi-geo-alt-fill text-danger"></i> <strong>'+l[0]+'</strong><br><span class="small">'+l[1]+'</span>';
    div.onclick = function(){
      document.querySelectorAll('.local-item').forEach(el => el.classList.remove('activo'));
      div.classList.add('activo');
      pintarMapa(l[1]+' '+l[0]+' Peru');
    };
    cont.appendChild(div);
  });
  pintarMapa(locales[0][1]+' '+locales[0][0]+' Peru');
}

function activarNavbarScroll(){
  var nav = document.getElementById('navLucha');
  function chk(){ nav.classList.toggle('navbar-solida', window.scrollY > 60); }
  window.addEventListener('scroll', chk);
  chk();
}

document.querySelectorAll('.tab-cat').forEach(function(btn){
  btn.addEventListener('click', function(){
    document.querySelectorAll('.tab-cat').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    pintarCategoria(btn.dataset.cat);
  });
});

pintarCategoria('sandwiches');
pintarLocales();
activarNavbarScroll();
