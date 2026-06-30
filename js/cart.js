function getCart(){ return JSON.parse(localStorage.getItem('cartLucha') || '[]'); }
function saveCart(c){ localStorage.setItem('cartLucha', JSON.stringify(c)); updateBadge(); }

function addToCart(nombre, precio){
  var cart = getCart();
  var item = cart.find(p => p.nombre === nombre);
  if(item){ item.cant++; } else { cart.push({nombre:nombre, precio:precio, cant:1}); }
  saveCart(cart);
  var btn = event.target;
  var txt = btn.textContent;
  btn.innerHTML = '<i class="material-icons align-middle" style="font-size:1rem">check</i> Agregado';
  setTimeout(()=> btn.textContent = txt, 900);
}

function updateBadge(){
  var badge = document.getElementById('cartBadge');
  if(!badge) return;
  var total = getCart().reduce((s,p)=>s+p.cant,0);
  badge.textContent = total;
}

document.addEventListener('DOMContentLoaded', updateBadge);
