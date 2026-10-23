/* ========================================================
   ASERIA POS — RESTAURANT POS DASHBOARD CONTROLLER
   Matching Dribbble: Restaurant POS Dashboard UI by Mohammad Ali
   ======================================================== */

// --- POS MENU DATASET ---
const POS_PRODUCTS = [
  // Pizzas (Matching screenshot 6 items)
  {
    id: 'pizza-1',
    category: 'pizza',
    title: 'Classic Margherita',
    subtitle: 'Cheese Pizza',
    desc: 'Fresh mozzarella, ripe tomatoes, and basil bring authentic Italian flavors to life.',
    price: 12.99,
    originalPrice: 15.00,
    rating: '4.7',
    reviews: '1k',
    size: 'Medium',
    image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'pizza-2',
    category: 'pizza',
    title: 'Pepperoni Supreme',
    subtitle: 'Pepperoni Pizza',
    desc: 'Loaded with crispy pepperoni slices and gooey cheese for the ultimate comfort bite.',
    price: 14.49,
    originalPrice: 19.49,
    rating: '4.8',
    reviews: '850',
    size: 'Large',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'pizza-3',
    category: 'pizza',
    title: 'Four Cheese Melt',
    subtitle: 'Cheese Pizza',
    desc: 'A rich blend of mozzarella, cheddar, parmesan, and provolone toasted to perfection.',
    price: 15.99,
    originalPrice: 18.99,
    rating: '4.9',
    reviews: '1.2k',
    size: 'Medium',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'pizza-4',
    category: 'pizza',
    title: 'Hawaiian Pizza',
    subtitle: 'Tropical Pizza',
    desc: 'Packed with savory ham, sweet pineapple chunks, peppers, and mozzarella cheese.',
    price: 13.99,
    originalPrice: 15.99,
    rating: '4.6',
    reviews: '620',
    size: 'Medium',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'pizza-5',
    category: 'pizza',
    title: 'Buffalo Chicken Pizza',
    subtitle: 'Spicy Pizza',
    desc: 'A rich blend of tender chicken, mozzarella, tangy buffalo sauce, and red onion.',
    price: 14.29,
    originalPrice: 16.29,
    rating: '4.8',
    reviews: '910',
    size: 'Large',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'pizza-6',
    category: 'pizza',
    title: 'Spicy Buffalo Blaze',
    subtitle: 'Signature Pizza',
    desc: 'Zesty buffalo sauce, grilled chicken, and creamy ranch drizzle for fire in every slice.',
    price: 15.49,
    originalPrice: 17.59,
    rating: '4.9',
    reviews: '1.5k',
    size: 'Large',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80'
  },

  // Hot drinks
  {
    id: 'drink-hot-1',
    category: 'hot-drinks',
    title: 'Caramel Macchiato',
    subtitle: 'Espresso Special',
    desc: 'Freshly steamed milk with vanilla-flavored syrup, marked with espresso and caramel drizzle.',
    price: 5.49,
    originalPrice: 6.50,
    rating: '4.9',
    reviews: '2.1k',
    size: '12 oz',
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'drink-hot-2',
    category: 'hot-drinks',
    title: 'Velvet Flat White',
    subtitle: 'Artisan Coffee',
    desc: 'Rich ristretto shots of espresso with velvety microfoam poured over.',
    price: 4.89,
    originalPrice: 5.50,
    rating: '4.8',
    reviews: '940',
    size: '10 oz',
    image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'drink-hot-3',
    category: 'hot-drinks',
    title: 'Spiced Chai Latte',
    subtitle: 'Tea Special',
    desc: 'Black tea infused with cinnamon, clove, and other warming spices topped with milk foam.',
    price: 4.99,
    originalPrice: 5.80,
    rating: '4.7',
    reviews: '720',
    size: '12 oz',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80'
  },

  // Cold drinks
  {
    id: 'drink-cold-1',
    category: 'cold-drinks',
    title: 'Iced Matcha Fusion',
    subtitle: 'Cold Beverages',
    desc: 'Ceremonial grade Japanese matcha shaken with oat milk and Madagascar vanilla.',
    price: 6.29,
    originalPrice: 7.20,
    rating: '4.9',
    reviews: '1.4k',
    size: '16 oz',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'drink-cold-2',
    category: 'cold-drinks',
    title: 'Classic Berry Mojito',
    subtitle: 'Mocktail',
    desc: 'Muddled fresh mint, wild blackberries, lime wedges, sparkling water, and crushed ice.',
    price: 5.79,
    originalPrice: 6.80,
    rating: '4.8',
    reviews: '880',
    size: '16 oz',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80'
  },

  // Dessert
  {
    id: 'dessert-1',
    category: 'dessert',
    title: 'Classic Tiramisu',
    subtitle: 'Italian Dolce',
    desc: 'Coffee-dipped ladyfingers layered with mascarpone cream and dusted with cacao.',
    price: 7.99,
    originalPrice: 9.50,
    rating: '4.9',
    reviews: '2.5k',
    size: 'Slice',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'dessert-2',
    category: 'dessert',
    title: 'Belgian Chocolate Lava',
    subtitle: 'Warm Cake',
    desc: 'Molten chocolate center served warm with a scoop of vanilla bean gelato.',
    price: 8.49,
    originalPrice: 10.00,
    rating: '5.0',
    reviews: '3.1k',
    size: 'Single',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80'
  },

  // Burgers
  {
    id: 'burger-1',
    category: 'burgers',
    title: 'Double Truffle Smash',
    subtitle: 'Gourmet Burger',
    desc: 'Two smashed Angus beef patties, aged cheddar, caramelized onions, and black truffle mayo.',
    price: 13.99,
    originalPrice: 16.50,
    rating: '4.9',
    reviews: '1.9k',
    size: 'Double',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'burger-2',
    category: 'burgers',
    title: 'Smoked Bacon Brioche',
    subtitle: 'Craft Burger',
    desc: 'Crispy Applewood smoked bacon, Monterey jack cheese, smoky BBQ relish in toasted brioche.',
    price: 12.49,
    originalPrice: 14.99,
    rating: '4.8',
    reviews: '1.2k',
    size: 'Single',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80'
  }
];

// --- POS APP STATE ---
const PosState = {
  activeCategory: 'pizza',
  searchQuery: '',
  orderType: 'takeaway', // 'takeaway' or 'dinein'
  // Pre-loaded cart items matching Dribbble screenshot!
  cart: [
    {
      id: 'pizza-3',
      title: 'Four Cheese Melt',
      subtitle: 'Cheese Pizza',
      price: 15.99,
      originalPrice: 18.99,
      rating: '4.9',
      reviews: '1.2k',
      size: 'Medium',
      image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80',
      quantity: 1
    },
    {
      id: 'pizza-1',
      title: 'Classic Margherita',
      subtitle: 'Cheese Pizza',
      price: 12.99,
      originalPrice: 15.00,
      rating: '4.7',
      reviews: '1k',
      size: 'Medium',
      image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=600&q=80',
      quantity: 1
    }
  ],
  taxRate: 0.05, // 5%
  discount: 0.00,
  staff: {
    name: 'Aseria Staf',
    id: '17129445521',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
  }
};

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  loadStaffSession();
  setupEventListeners();
  renderProducts();
  renderCart();
});

// Load staff profile if logged in via localStorage
function loadStaffSession() {
  const savedStaff = localStorage.getItem('aseria_pos_staff');
  if (savedStaff) {
    try {
      const parsed = JSON.parse(savedStaff);
      PosState.staff.name = parsed.name || PosState.staff.name;
      PosState.staff.id = parsed.id || PosState.staff.id;
      if (parsed.avatar) PosState.staff.avatar = parsed.avatar;
    } catch (e) {
      console.error(e);
    }
  }

  const nameEl = document.getElementById('staffNameDisplay');
  const idEl = document.getElementById('staffIdDisplay');
  const avatarEl = document.getElementById('staffAvatar');
  if (nameEl) nameEl.textContent = PosState.staff.name;
  if (idEl) idEl.textContent = PosState.staff.id;
  if (avatarEl && PosState.staff.avatar) avatarEl.src = PosState.staff.avatar;
}

// Setup Event Listeners
function setupEventListeners() {
  // Category Chips
  const categoryChips = document.querySelectorAll('.pos-cat-chip');
  categoryChips.forEach(chip => {
    chip.addEventListener('click', () => {
      categoryChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      PosState.activeCategory = chip.dataset.category;
      renderProducts();
    });
  });

  // Search input
  const searchInput = document.getElementById('posSearchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      PosState.searchQuery = e.target.value.trim().toLowerCase();
      if (clearSearchBtn) {
        clearSearchBtn.classList.toggle('visible', PosState.searchQuery.length > 0);
      }
      renderProducts();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      PosState.searchQuery = '';
      clearSearchBtn.classList.remove('visible');
      renderProducts();
    });
  }

  // Order Type tabs (Take away | Dine in)
  const tabTakeaway = document.getElementById('tabTakeaway');
  const tabDinein = document.getElementById('tabDinein');

  if (tabTakeaway && tabDinein) {
    tabTakeaway.addEventListener('click', () => {
      tabTakeaway.classList.add('active');
      tabDinein.classList.remove('active');
      PosState.orderType = 'takeaway';
      showToast('Order mode: Take away');
    });

    tabDinein.addEventListener('click', () => {
      tabDinein.classList.add('active');
      tabTakeaway.classList.remove('active');
      PosState.orderType = 'dinein';
      showToast('Order mode: Dine in');
    });
  }

  // Print Receipt Button & Modal
  const printReceiptBtn = document.getElementById('printReceiptBtn');
  const receiptModal = document.getElementById('receiptModal');
  const closeReceiptModal = document.getElementById('closeReceiptModal');

  if (printReceiptBtn && receiptModal) {
    printReceiptBtn.addEventListener('click', openReceiptModal);
  }

  if (closeReceiptModal && receiptModal) {
    closeReceiptModal.addEventListener('click', () => {
      receiptModal.classList.remove('active');
    });
  }

  if (receiptModal) {
    receiptModal.addEventListener('click', (e) => {
      if (e.target === receiptModal) {
        receiptModal.classList.remove('active');
      }
    });
  }

  // Sidebar navigation active toggles
  const navButtons = document.querySelectorAll('.pos-nav-icons .sidebar-icon-btn');
  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      navButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}

// --- RENDER PRODUCTS GRID ---
function renderProducts() {
  const grid = document.getElementById('posProductsGrid');
  if (!grid) return;

  // Filter products by active category and search term
  let filtered = POS_PRODUCTS.filter(item => {
    const matchesCat = PosState.activeCategory === 'all' || item.category === PosState.activeCategory;
    const matchesSearch = !PosState.searchQuery || 
      item.title.toLowerCase().includes(PosState.searchQuery) ||
      item.desc.toLowerCase().includes(PosState.searchQuery) ||
      item.subtitle.toLowerCase().includes(PosState.searchQuery);
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: #8b92a0;">
        <p style="font-size: 24px; margin-bottom: 8px;">🔍</p>
        <p style="font-size: 16px; font-weight: 600;">No items found</p>
        <p style="font-size: 13px;">Try checking another category or clear your search.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(prod => `
    <article class="product-card" data-id="${prod.id}">
      <div class="product-card-img-wrap">
        <img src="${prod.image}" alt="${prod.title}" loading="lazy">
      </div>
      <div class="product-card-body">
        <h3 class="product-title">${prod.title}</h3>
        <p class="product-desc">${prod.desc}</p>
        <div class="product-footer-row">
          <div class="price-box">
            <span class="price-current">$${prod.price.toFixed(2)}</span>
            <span class="price-original">${prod.originalPrice ? '$' + prod.originalPrice.toFixed(2) : ''}</span>
          </div>
          <button type="button" class="add-cart-btn" onclick="addToCart('${prod.id}')" aria-label="Add ${prod.title} to order">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

// --- CART MANAGEMENT ---
window.addToCart = function(productId) {
  const prod = POS_PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  const existing = PosState.cart.find(c => c.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    PosState.cart.push({
      ...prod,
      quantity: 1
    });
  }

  renderCart();
  showToast(`Added: ${prod.title}`);
};

window.updateQty = function(productId, delta) {
  const itemIndex = PosState.cart.findIndex(c => c.id === productId);
  if (itemIndex === -1) return;

  PosState.cart[itemIndex].quantity += delta;
  if (PosState.cart[itemIndex].quantity <= 0) {
    PosState.cart.splice(itemIndex, 1);
  }

  renderCart();
};

function renderCart() {
  const cartList = document.getElementById('orderItemsList');
  const badge = document.getElementById('orderItemsCountBadge');
  const subtotalEl = document.getElementById('posSubtotal');
  const taxEl = document.getElementById('posTax');
  const discountEl = document.getElementById('posDiscount');
  const grandTotalEl = document.getElementById('posGrandTotal');

  if (!cartList) return;

  const totalCount = PosState.cart.reduce((sum, item) => sum + item.quantity, 0);
  if (badge) badge.textContent = `${totalCount} item${totalCount === 1 ? '' : 's'}`;

  if (PosState.cart.length === 0) {
    cartList.innerHTML = `
      <div class="empty-cart-state">
        <p style="font-size: 28px; margin-bottom: 8px;">🛒</p>
        <p>No items in order yet.</p>
        <p style="font-size: 11px; margin-top: 4px;">Click any item card to add.</p>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = '$0.00';
    if (taxEl) taxEl.textContent = '$0.00';
    if (discountEl) discountEl.textContent = '-$0.00';
    if (grandTotalEl) grandTotalEl.textContent = '$0.00';
    return;
  }

  // Render items exactly formatted like Dribbble right panel
  cartList.innerHTML = PosState.cart.map(item => `
    <div class="order-item-card" data-id="${item.id}">
      <img src="${item.image}" alt="${item.title}" class="order-item-img">
      <div class="order-item-details">
        <h4 class="order-item-name">${item.title}</h4>
        <div class="order-item-category">${item.subtitle || 'Special Item'}</div>
        <div class="order-item-meta">
          <span>★</span> <span>${item.rating || '4.8'} (${item.reviews || '1k'})</span>
          <span class="meta-pill">&bull; ${item.size || 'Regular'}</span>
        </div>
        <div class="order-item-pricing">
          <span class="order-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
          ${item.originalPrice ? `<span class="order-item-old-price">$${(item.originalPrice * item.quantity).toFixed(2)}</span>` : ''}
        </div>
      </div>
      <div class="order-item-actions">
        <div class="qty-stepper">
          <button type="button" class="stepper-btn" onclick="updateQty('${item.id}', -1)" aria-label="Decrease">&minus;</button>
          <span class="stepper-val">${item.quantity}</span>
          <button type="button" class="stepper-btn" onclick="updateQty('${item.id}', 1)" aria-label="Increase">&#43;</button>
        </div>
      </div>
    </div>
  `).join('');

  // Math calculations
  const subtotal = PosState.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * PosState.taxRate;
  const grandTotal = Math.max(0, subtotal + tax - PosState.discount);

  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  if (taxEl) taxEl.textContent = `$${tax.toFixed(2)}`;
  if (discountEl) discountEl.textContent = `-$${PosState.discount.toFixed(2)}`;
  if (grandTotalEl) grandTotalEl.textContent = `$${grandTotal.toFixed(2)}`;
}

// --- RECEIPT PRINT MODAL ---
function openReceiptModal() {
  if (PosState.cart.length === 0) {
    showToast('Cart is empty. Add items first!');
    return;
  }

  const modal = document.getElementById('receiptModal');
  const table = document.getElementById('receiptItemsTable');
  const rSubtotal = document.getElementById('rSubtotal');
  const rTax = document.getElementById('rTax');
  const rDiscount = document.getElementById('rDiscount');
  const rTotal = document.getElementById('rTotal');
  const rOrderType = document.getElementById('receiptOrderType');
  const rStaffName = document.getElementById('receiptStaffName');
  const rOrderNum = document.getElementById('receiptOrderNum');

  if (!modal || !table) return;

  // Set random order number or sequential
  if (rOrderNum) rOrderNum.textContent = `#ORD-${Math.floor(1000 + Math.random() * 9000)}`;
  if (rOrderType) rOrderType.textContent = PosState.orderType === 'takeaway' ? 'Take away' : 'Dine in';
  if (rStaffName) rStaffName.textContent = PosState.staff.name;

  // Items table
  table.innerHTML = PosState.cart.map(item => `
    <div class="receipt-item-row">
      <span>${item.quantity}x ${item.title}</span>
      <strong>$${(item.price * item.quantity).toFixed(2)}</strong>
    </div>
  `).join('');

  const subtotal = PosState.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * PosState.taxRate;
  const grandTotal = Math.max(0, subtotal + tax - PosState.discount);

  if (rSubtotal) rSubtotal.textContent = `$${subtotal.toFixed(2)}`;
  if (rTax) rTax.textContent = `$${tax.toFixed(2)}`;
  if (rDiscount) rDiscount.textContent = `-$${PosState.discount.toFixed(2)}`;
  if (rTotal) rTotal.textContent = `$${grandTotal.toFixed(2)}`;

  modal.classList.add('active');

  // Also sync order to Supabase in background if client is ready
  saveOrderToSupabase(subtotal, tax, grandTotal);
}

// Optional Supabase order recorder
async function saveOrderToSupabase(subtotal, tax, total) {
  if (typeof window.supabaseClient === 'undefined' || !window.supabaseClient) {
    return;
  }

  try {
    const payload = {
      order_type: PosState.orderType,
      items: PosState.cart,
      subtotal: subtotal,
      tax: tax,
      total: total,
      staff_name: PosState.staff.name,
      staff_id: PosState.staff.id,
      created_at: new Date().toISOString()
    };
    const { data, error } = await window.supabaseClient.from('orders').insert([payload]);
    if (error) {
      console.warn('Supabase order sync note:', error.message);
    } else {
      console.log('Order successfully synced to Supabase:', data);
    }
  } catch (err) {
    console.warn('Supabase order insert skipped:', err);
  }
}

// Toast notification helper
function showToast(msg) {
  const container = document.getElementById('posToastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'pos-toast';
  toast.textContent = msg;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = 'opacity 0.3s, transform 0.3s';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 2200);
}
