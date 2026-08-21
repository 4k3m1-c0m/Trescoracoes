let cart = [];

function toggleCart() {
  const modal = document.getElementById('cart-modal');
  modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
}

function addToCart(name, price) {
  cart.push({ name, price });
  updateCartDisplay();
}

function updateCartDisplay() {
  document.getElementById('cart-count').textContent = cart.length;

  const cartList = document.getElementById('cart-items');
  cartList.innerHTML = '';

  let total = 0;

  cart.forEach((item) => {
    total += item.price;
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${item.name}</span>
      <span>R$ ${item.price.toFixed(2).replace('.', ',')}</span>
    `;
    cartList.appendChild(li);
  });

  document.getElementById('cart-total').textContent = total.toFixed(2).replace('.', ',');
}

function checkout() {
  if (cart.length === 0) {
    alert('Seu carrinho está vazio!');
    return;
  }
  alert('Obrigado por comprar com a 3 Corações! O aroma do café já está a caminho.');
  cart = [];
  updateCartDisplay();
  toggleCart();
}

// Simulação de Recurso Nativo
function openCamera() {
  const status = document.getElementById('native-status');
  status.textContent = "⏳ Solicitando acesso à Câmera Nativa...";
  
  setTimeout(() => {
    status.innerHTML = "⚠️ <strong>Integração requerida:</strong> O leitor de QR Code para promoções de embalagem precisa da ponte nativa (Capacitor/Cordova) para acessar a câmera.";
  }, 1000);
}

function getGPSLocation() {
  const status = document.getElementById('native-status');
  status.textContent = "⏳ Obtendo GPS para buscar cafeterias...";

  setTimeout(() => {
    status.innerHTML = "⚠️ <strong>Permissão necessária:</strong> A geolocalização de alta precisão é gerenciada nativamente no aplicativo móvel.";
  }, 1000);
}