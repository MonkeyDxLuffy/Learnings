// Product data
const products = [
  {
    id: "p1",
    name: "iPhone 17",
    specs: "6.3\" Super Retina XDR OLED | A19 Chip | 8GB RAM | 256GB | 48MP Camera | iOS 18",
    price: 124900,
    oldPrice: 139900,
    img: "images/iphone.webp",
    // sale: true
  },
  {
    id: "p2",
    name: "Nothing Phone 3a",
    specs: "6.7\" AMOLED | Snapdragon 8 Gen 2 | 12GB RAM | 256GB | Glyph Interface | Android 14",
    price: 49999,
    oldPrice: 59999,
    img: "images/314524_0_jjix9p.webp",
    sale: false
  },
  {
    id: "p3",
    name: "I watch",
    specs: "Intel Core i5 13th Gen | 16GB RAM | 512GB SSD | 14\" FHD | Windows 11",
    price: 65000,
    oldPrice: 128000,
    img: "images/i watch.webp",
    sale: false
  },
  {
    id: "p4",
    name: "iPad Air M2",
    specs: "11\" Liquid Retina | M2 Chip | 8GB RAM | 128GB | Wi-Fi + Cellular | iPadOS 18",
    price: 68900,
    oldPrice: 78900,
    img: "images/ipad.webp",
    
  },
 
];

let cart = {};

function renderProductGrid() {
  const grid = document.getElementById('productGrid');
  grid.innerHTML = '';
  products.forEach(prod => {
    const card = document.createElement('div');
    card.className = 'product-card';
    if(prod.sale) card.innerHTML += `<span class='sale-tag'>sale</span>`;
    card.innerHTML += `
      <img src="${prod.img}" alt="${prod.name}" />
      <h4>${prod.name}</h4>
      <div class="specs">${prod.specs}</div>
      <div><span class="price">₹${prod.price.toLocaleString()}</span> <span class="old-price">₹${prod.oldPrice.toLocaleString()}</span></div>
      <button onclick="addToCart('${prod.id}')">ADD</button>
    `;
    grid.appendChild(card);
  });
}

// Add to Cart from product card
function addToCart(id) {
  if (!cart[id]) {
    const prod = products.find(p => p.id === id);
    cart[id] = { ...prod, quantity: 1 };
  } else {
    cart[id].quantity += 1;
  }
  updateCartPanel();
}

// Add to cart from Sidebar New Arrival (use iPhone 17 as new arrival)
function addToCartFromSidebar() {
  addToCart("p1");
}

function updateCartPanel() {
  // Update badge
  const count = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById('cartBadge').textContent = count;
  // Render panel
  renderCartPanel();
  document.getElementById('cartPanel').style.display = count === 0 ? 'none' : '';
}

function removeFromCart(id) {
  delete cart[id];
  updateCartPanel();
}

function changeQuantity(id, val) {
  if(cart[id]) {
    cart[id].quantity += val;
    if(cart[id].quantity < 1) {
      removeFromCart(id);
    } else {
      updateCartPanel();
    }
  }
}

function renderCartPanel() {
  const panel = document.getElementById('cartPanel');
  if(Object.keys(cart).length === 0) { panel.innerHTML = ''; return; }
  let total = 0;
  panel.innerHTML = `<h3>🛒 Cart</h3><ul class='cart-list'>`;
  for(let item of Object.values(cart)) {
    const subtotal = item.price * item.quantity; total += subtotal;
    panel.innerHTML += `
      <li class='cart-item'>
        <img src='${item.img}' alt='${item.name}' />
        <span class='name'>${item.name}</span>
        <div class='qty-controls'>
          <button class='qty-btn' onclick="changeQuantity('${item.id}',-1)">-</button>
          <span class='qty'>${item.quantity}</span>
          <button class='qty-btn' onclick="changeQuantity('${item.id}',1)">+</button>
        </div>
        <span class='subtotal'>₹${subtotal.toLocaleString()}</span>
        <button class='remove-btn' onclick="removeFromCart('${item.id}')">×</button>
      </li>
    `;
  }
  panel.innerHTML += `</ul><div class='cart-total'>Total: ₹${total.toLocaleString()}</div>`;
}

// Initial rendering
renderProductGrid();

document.getElementById('cartIcon').addEventListener('click', function(){
  const panel = document.getElementById('cartPanel');
  if (panel.style.display === 'block') {
    panel.style.display = 'none';
  } else {
    panel.style.display = 'block';
    if(Object.keys(cart).length === 0) {
      panel.innerHTML = `<h3>🛒 Cart</h3><p style="text-align:center;color:#aaa;margin:25px 0;">Cart is empty</p>`;
    } else {
      renderCartPanel();
    }
  }
});
