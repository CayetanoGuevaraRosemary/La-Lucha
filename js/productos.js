var menu = {
  sandwiches: [
    ["Pavo a la Leña","Pavo jugoso asado a la leña con toque criollo.",16.90],
    ["Lechón a la Leña","Tradicional lechón cocido lentamente, jugoso y crocante.",16.90],
    ["Asado de Res al Jugo","Carne de res asada en su jugo, tierna y sabrosa.",16.90],
    ["Chicharrón","Chicharrón crocante de cerdo, receta de la casa.",15.90],
    ["Jamón del País","Jamón del país clásico con cremas criollas.",13.90],
    ["Jamón Serrano","Jamón serrano premium con cremas selectas.",15.90],
    ["Hamburguesa","Receta cargada con queso fundido.",14.90],
    ["Pollo a la Leña","Pollo asado a la leña, jugoso por dentro.",14.90],
    ["Pollo Deshilachado","Pollo deshilachado en salsa criolla.",14.90],
    ["Pollo con Piña","Pollo con piña, dulce y salado en equilibrio.",14.90],
    ["Mixto","Combinación de jamón y queso a la parrilla.",15.90],
    ["El Preferido","El favorito de la casa, receta especial.",16.90],
    ["Mixto Serrano","Jamón serrano, queso y cremas de la casa.",16.90],
    ["La Lucha","Receta especial de la casa con queso fundido y salsa secreta.",19.90],
    ["Club Sandwich","Doble pan, pollo, jamón, tocino, queso y huevo frito.",19.90],
    ["Club a la Leña","Club sandwich con toque ahumado a la leña.",19.90],
    ["Panini Atún","Panini de atún con toque mediterráneo.",17.90]
  ],
  papas: [
    ["Promo Papas + Sanguche","Cualquier sanguche acompañado de papas fritas crocantes.",4.90],
    ["Papas a la Huancaína","Papas fritas bañadas en cremosa salsa huancaína.",9.90],
    ["Papas con Chicharrón","Papas fritas coronadas con trozos de chicharrón.",12.90]
  ],
  bebidas: [
    ["Chicha Morada","Refrescante chicha morada de la casa.",6.90],
    ["Limonada","Limonada clásica bien helada.",6.90],
    ["Inca Kola 500ml","Bebida gaseosa peruana.",5.50],
    ["Jugo de Lúcuma","Cremoso jugo natural de lúcuma con leche.",11.40],
    ["Jugo de Maracuyá","Jugo natural de maracuyá bien frío.",8.40]
  ]
};

var iconos = { sandwiches:'restaurant', papas:'lunch_dining', bebidas:'local_drink' };
var titulos = { sandwiches:'Sandwiches', papas:'Papas', bebidas:'Bebidas' };

function pintarCategoria(cat){
  var cont = document.getElementById('listaProductos');
  var html = '';
  menu[cat].forEach(function(p){
    html += `
    <div class="col-sm-6 col-lg-4">
      <div class="card-lucha">
        <div class="card-img-wrap"><span class="img-placeholder"><i class="material-icons" style="font-size:2.2rem">${iconos[cat]}</i><br>${p[0]}</span></div>
        <div class="card-body">
          <div class="card-title">${p[0]}</div>
          <div class="card-desc">${p[1]}</div>
          <div class="card-footer-row">
            <span class="precio">S/${p[2].toFixed(2)}</span>
            <button class="btn-add" onclick="addToCart('${p[0]}',${p[2]})">+ Agregar</button>
          </div>
        </div>
      </div>
    </div>`;
  });
  cont.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', function(){
  if(!document.getElementById('listaProductos')) return;
  document.querySelectorAll('.tab-cat').forEach(function(btn){
    btn.addEventListener('click', function(){
      document.querySelectorAll('.tab-cat').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      pintarCategoria(btn.dataset.cat);
    });
  });
  pintarCategoria('sandwiches');
});
