/* ========================================================
   TANUKI FAMILY — UZBEKISTAN DASHBOARD CONTROLLER
   Full dynamic logic: Categories, Search, Cart Drawer, 
   Table Booking, Bonuses, and Brand switcher.
   ======================================================== */

// --- 1. FULL MENU DATASET (TANUKI & BRANDS) ---
const TANUKI_MENU = [
  // --- FESTIVAL (Matching exact screenshot with gyozas & dim-sums) ---
  {
    id: 'gyodza-1',
    category: 'festival',
    brand: 'tanuki',
    title: 'Qisqichbaqali gyodza qovurilgan',
    desc: 'Qisqichbaqa go\'shti, shirin chili sousi va kunjut bilan xushta\'m qovurilgan gyodza.',
    weight: '180 g',
    price: 55000,
    tag: 'NEW',
    isNew: true,
    image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'gyodza-2',
    category: 'festival',
    brand: 'tanuki',
    title: 'Tom-Yam sousli achchiq gyodza',
    desc: 'Mayin xamir ichida go\'shtli nachinka, o\'tkir Tom-Yam sousi va maydalangan ko\'katlar.',
    weight: '210 g',
    price: 52000,
    tag: 'NEW',
    isNew: true,
    image: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'gyodza-3',
    category: 'festival',
    brand: 'tanuki',
    title: 'Dim-sam mol go\'shti va zanjabil bilan',
    desc: 'Bug\'da pishirilgan nozik dim-samlar, an\'anaviy soya-sarimsoq sousi bilan birga.',
    weight: '190 g',
    price: 48000,
    tag: 'NEW',
    isNew: true,
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'gyodza-4',
    category: 'festival',
    brand: 'tanuki',
    title: 'Klassik yapon gyodzasi (Gyoza Classic)',
    desc: 'Qarsildoq qilib qovurilgan tovuq va karamli yapon gyodzasi, yashil barg ustida.',
    weight: '175 g',
    price: 45000,
    tag: 'NEW',
    isNew: true,
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'gyodza-5',
    category: 'festival',
    brand: 'tanuki',
    title: 'Qarsildoq tovuqli mini-gyodza',
    desc: 'Oltinrang qovurilgan mayin mini gyodzalar, maxsus unagi sousi bilan.',
    weight: '160 g',
    price: 42000,
    tag: 'NEW',
    isNew: true,
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80'
  },

  // --- SOTUV XITLARI (HITS) ---
  {
    id: 'hit-1',
    category: 'hits',
    brand: 'tanuki',
    title: 'Filadelfiya Classic Roll',
    desc: 'Tiramisudek mayin krem-pishloq, yangi losos balig\'i, bodring va avokado.',
    weight: '240 g',
    price: 68000,
    tag: 'ХИТ',
    image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'hit-2',
    category: 'hits',
    brand: 'tanuki',
    title: 'Kaliforniya qisqichbaqa bilan',
    desc: 'Tobiko ikrasi, qor qisqichbaqasi, yapon mayonezi va yangi bodring.',
    weight: '210 g',
    price: 58000,
    tag: 'ХИТ',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'hit-3',
    category: 'hits',
    brand: 'tanuki',
    title: 'Sumiko Premium Set',
    desc: 'Filadelfiya, Kaliforniya, Ebi tempura va Losos maki jamlanmasi (32 dona).',
    weight: '890 g',
    price: 185000,
    tag: 'ХИТ',
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'hit-4',
    category: 'hits',
    brand: 'tanuki',
    title: 'Tom-Yam dengiz mahsulotlari bilan',
    desc: 'Qisqichbaqa, midiya, kalamar, kokos suti, xushbo\'y galangal va limon o\'ti.',
    weight: '350 ml',
    price: 64000,
    tag: 'ХИТ',
    image: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?auto=format&fit=crop&w=600&q=80'
  },

  // --- ROLLAR (ROLLS) ---
  {
    id: 'roll-1',
    category: 'rolls',
    brand: 'tanuki',
    title: 'Dragon Roll (Ilonbaliq bilan)',
    desc: 'Dudlangan ilonbaliq (ugor), qaymoqli pishloq, unagi sousi va qovurilgan kunjut.',
    weight: '250 g',
    price: 74000,
    tag: 'TOP',
    image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'roll-2',
    category: 'rolls',
    brand: 'tanuki',
    title: 'Ebi Tempura Roll',
    desc: 'Qarsildoq tempura qisqichbaqasi, krem-chiz, unagi sous va mikro-ko\'katlar.',
    weight: '220 g',
    price: 62000,
    tag: 'NEW',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'roll-3',
    category: 'rolls',
    brand: 'tanuki',
    title: 'Pishirilgan Losos Roll (Baked)',
    desc: 'Pechda pishirilgan xushbo\'y pishloqli qalpoqcha ostidagi sersuv losos.',
    weight: '260 g',
    price: 65000,
    tag: 'ХИТ',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'roll-4',
    category: 'rolls',
    brand: 'tanuki',
    title: 'Spicy Tuna Roll',
    desc: 'Tuna balig\'i, achchiq sriracha sousi, yashil piyoz va avokado bo\'laklari.',
    weight: '200 g',
    price: 59000,
    tag: 'HOT',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80'
  },

  // --- SUSHISI & SASHIMI ---
  {
    id: 'sushi-1',
    category: 'sushi',
    brand: 'tanuki',
    title: 'Sake Nigiri (Losos)',
    desc: 'Yangi losos filesi yapon guruchi ustida (2 dona).',
    weight: '70 g',
    price: 24000,
    tag: 'CLASSIC',
    image: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sushi-2',
    category: 'sushi',
    brand: 'tanuki',
    title: 'Unagi Nigiri (Ilonbaliq)',
    desc: 'Xushbo\'y dudlangan ugor va unagi sousi (2 dona).',
    weight: '75 g',
    price: 28000,
    tag: 'TOP',
    image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sashimi-1',
    category: 'sashimi',
    brand: 'tanuki',
    title: 'Sashimi Assorti',
    desc: 'Yangi losos, tuna va qisqichbaqa bo\'laklari, daykon va laym bilan.',
    weight: '160 g',
    price: 95000,
    tag: 'PREMIUM',
    image: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?auto=format&fit=crop&w=600&q=80'
  },

  // --- SETLAR (SETS) ---
  {
    id: 'set-1',
    category: 'sets',
    brand: 'tanuki',
    title: 'Tanuki Xit Seti',
    desc: 'Filadelfiya, Kaliforniya, Pishirilgan losos va Maki rollari (40 dona).',
    weight: '1100 g',
    price: 240000,
    tag: 'ХИТ',
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'set-2',
    category: 'sets',
    brand: 'tanuki',
    title: 'Oila to\'plami (Family Feast)',
    desc: 'Butun oila uchun mo\'ljallangan 48 dona xilma-xil rollar jamlanmasi.',
    weight: '1350 g',
    price: 295000,
    tag: 'FAMILY',
    image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=600&q=80'
  },

  // --- GAZAK, SALATLAR, ISSIQ OVQATLAR ---
  {
    id: 'app-1',
    category: 'appetizers',
    brand: 'tanuki',
    title: 'Ebi Tempura (5 dona)',
    desc: 'Tillarang qarsildoq qisqichbaqalar shirin shili sousi bilan.',
    weight: '140 g',
    price: 49000,
    tag: 'CRISP',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'salad-1',
    category: 'salads',
    brand: 'tanuki',
    title: 'Chuka salati yong\'oq sousida',
    desc: 'Yapon dengiz o\'ti, bodom-yong\'oq sousi va qovurilgan oq kunjut.',
    weight: '150 g',
    price: 36000,
    tag: 'FRESH',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'soup-1',
    category: 'soups',
    brand: 'tanuki',
    title: 'Klassik Miso sho\'rvasi',
    desc: 'Tofu pishlog\'i, vakame dengiz o\'ti va yashil piyozli an\'anaviy bulyon.',
    weight: '300 ml',
    price: 26000,
    tag: 'LIGHT',
    image: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'hot-1',
    category: 'hot-dishes',
    brand: 'tanuki',
    title: 'Udon mol go\'shti va sabzavotlar bilan',
    desc: 'Wok tovada pishirilgan qalin yapon ugrasi, tender mol go\'shti va teriyaki sousi.',
    weight: '320 g',
    price: 54000,
    tag: 'HOT',
    image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'dessert-1',
    category: 'desserts',
    brand: 'tanuki',
    title: 'Yapon Mochi assorti (3 dona)',
    desc: 'Mango, qulupnay va matcha ta\'mli mayin guruch pishiriqlari.',
    weight: '120 g',
    price: 32000,
    tag: 'SWEET',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'kids-1',
    category: 'kids',
    brand: 'tanuki',
    title: 'Bolalar uchun Mini Tovuq naggetsi',
    desc: 'Tabiiy tovuq filesidan xushta\'m qovurilgan naggetslar va kartoshka fri.',
    weight: '200 g',
    price: 35000,
    tag: 'KIDS',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80'
  },

  // --- TVOYA PIZZA BRAND DISHES ---
  {
    id: 'pizza-1',
    category: 'hits',
    brand: 'tvoya-pizza',
    title: 'Pepperoni Supreme Pizza',
    desc: 'Italyancha pomidor sousi, ko\'p miqdorda pepperoni kolbasasi va erigan mozzarella.',
    weight: '520 g',
    price: 65000,
    tag: 'ХИТ',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'pizza-2',
    category: 'hits',
    brand: 'tvoya-pizza',
    title: 'To\'rt pishloq (4 Cheese)',
    desc: 'Dor-blyu, parmezan, cheddor va mayin mozzarella pishloqlari jamlanmasi.',
    weight: '490 g',
    price: 68000,
    tag: 'CHEESE',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'pizza-3',
    category: 'hot-dishes',
    brand: 'tvoya-pizza',
    title: 'Barbekyu Tovuqli Pizza',
    desc: 'Dudlangan tovuq filesi, qizil piyoz, BBQ sousi va qo\'ziqorinlar.',
    weight: '550 g',
    price: 62000,
    tag: 'NEW',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80'
  },

  // --- KASPIYKA (SEAFOOD BRAND) ---
  {
    id: 'kaspiyka-1',
    category: 'hits',
    brand: 'kaspiyka',
    title: 'Qovurilgan Qora Dengiz Barabulkasi',
    desc: 'Oltinrang qobiqli mayda yangi baliqlar, limon va tartar sousi bilan.',
    weight: '250 g',
    price: 58000,
    tag: 'FRESH',
    image: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'kaspiyka-2',
    category: 'hot-dishes',
    brand: 'kaspiyka',
    title: 'Qaymoqli sousdagi Midiyalar',
    desc: 'Oq sharbatli sousda pishirilgan katta qora midiyalar va qarsildoq baget.',
    weight: '400 g',
    price: 76000,
    tag: 'ХИТ',
    image: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?auto=format&fit=crop&w=600&q=80'
  },

  // --- KEYTERING (CATERING) ---
  {
    id: 'catering-1',
    category: 'sets',
    brand: 'catering',
    title: 'Korporativ Furset Seti (10 kishilik)',
    desc: 'Mini-brusketalar, kanape, rollar va delikates pishloqlar assortisi.',
    weight: '2500 g',
    price: 490000,
    tag: 'EVENT',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80'
  }
];

// --- 2. GLOBAL STATE ---
let currentBrand = 'tanuki';
let currentCategory = 'festival';
let searchQuery = '';
let cart = JSON.parse(localStorage.getItem('tanuki_cart') || '[]');
let favorites = JSON.parse(localStorage.getItem('tanuki_favorites') || '[]');

// --- 3. DOM ELEMENTS ---
const dishesGrid = document.getElementById('dishesGrid');
const currentSectionTitle = document.getElementById('currentSectionTitle');
const productsCountBadge = document.getElementById('productsCountBadge');
const menuSearchInput = document.getElementById('menuSearchInput');
const clearMenuSearch = document.getElementById('clearMenuSearch');
const cartTotalCount = document.getElementById('cartTotalCount');

// Modals & Drawers
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const openCartBtn = document.getElementById('openCartBtn');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartItemsContainer = document.getElementById('cartItemsContainer');
const emptyCartState = document.getElementById('emptyCartState');
const cartSubtotalText = document.getElementById('cartSubtotalText');
const cartTotalText = document.getElementById('cartTotalText');
const checkoutBtn = document.getElementById('checkoutBtn');

const tableBookingModal = document.getElementById('tableBookingModal');
const openTableBookingBtn = document.getElementById('openTableBookingBtn');
const closeTableBookingModal = document.getElementById('closeTableBookingModal');
const tableBookingForm = document.getElementById('tableBookingForm');

const bonusModal = document.getElementById('bonusModal');
const openBonusBtn = document.getElementById('openBonusBtn');
const closeBonusModal = document.getElementById('closeBonusModal');
const spinWheelBtn = document.getElementById('spinWheelBtn');
const wheelCircle = document.getElementById('wheelCircle');
const bonusResultMsg = document.getElementById('bonusResultMsg');

// Floating mobile cart
const floatingCartBar = document.getElementById('floatingCartBar');
const floatCartQty = document.getElementById('floatCartQty');
const floatCartSum = document.getElementById('floatCartSum');
const floatCartOpenBtn = document.getElementById('floatCartOpenBtn');

// --- 4. CATEGORY NAMES MAP ---
const CATEGORY_NAMES = {
  'festival': 'Festival',
  'hits': 'Sotuv xitlari',
  'rolls': 'Rollar',
  'sushi': 'Sushisi',
  'sashimi': 'Sashimi',
  'sets': 'Setlar',
  'appetizers': 'Gazaklar',
  'salads': 'Salatlar',
  'soups': 'Suyuq ovqatlar',
  'hot-dishes': 'Issiq ovqatlar',
  'desserts': 'Desertlar',
  'kids': 'Bolalar menyusi'
};

// --- 5. INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCartUI();
  setupEventListeners();
  checkAuthUser();
});

// --- 6. CHECK AUTH USER STATUS ---
function checkAuthUser() {
  const staff = localStorage.getItem('aseria_pos_staff') || localStorage.getItem('tanuki_user');
  const authArea = document.getElementById('authActionArea');
  if (staff && authArea) {
    try {
      const user = JSON.parse(staff);
      const name = user.name || user.email?.split('@')[0] || 'Mijoz';
      authArea.innerHTML = `
        <div class="user-logged-pill" style="display: flex; align-items: center; gap: 8px; background: #f0f1f4; padding: 6px 12px; border-radius: 999px; font-size: 13px; font-weight: 700;">
          <span style="background: #e31e24; color: #fff; width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 11px;">👤</span>
          <span>${name}</span>
          <button id="logoutBtn" style="border: none; background: transparent; cursor: pointer; color: #86868b; font-size: 12px; margin-left: 4px;" title="Chiqish">✕</button>
        </div>
      `;
      document.getElementById('logoutBtn')?.addEventListener('click', () => {
        localStorage.removeItem('aseria_pos_staff');
        localStorage.removeItem('tanuki_user');
        window.location.reload();
      });
    } catch(e) {}
  }
}

// --- 7. RENDER PRODUCTS ---
function renderProducts() {
  if (!dishesGrid) return;

  // Filter dataset by brand, category, search
  let filtered = TANUKI_MENU.filter(item => {
    // Brand match (if not Tanuki, only show that brand's items)
    if (currentBrand !== 'tanuki' && item.brand !== currentBrand) return false;
    if (currentBrand === 'tanuki' && item.brand !== 'tanuki') return false;

    // Search query match
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      return item.title.toLowerCase().includes(q) || 
             item.desc.toLowerCase().includes(q) || 
             item.category.toLowerCase().includes(q);
    }

    // Category match
    return item.category === currentCategory;
  });

  // If no items in category for current brand, fallback to all items of brand
  if (filtered.length === 0 && searchQuery.trim() === '') {
    filtered = TANUKI_MENU.filter(item => item.brand === currentBrand);
  }

  // Update Section Title & Count Badge
  if (searchQuery.trim() !== '') {
    currentSectionTitle.textContent = `Qidiruv natijalari: "${searchQuery}"`;
  } else {
    currentSectionTitle.textContent = CATEGORY_NAMES[currentCategory] || 'Menyu';
  }
  productsCountBadge.textContent = `${filtered.length} ta taom`;

  // Empty state
  if (filtered.length === 0) {
    dishesGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: #86868b;">
        <div style="font-size: 40px; margin-bottom: 12px;">🔍</div>
        <h3 style="font-size: 18px; color: #1d1d1f; margin-bottom: 6px;">Hech qanday taom topilmadi</h3>
        <p>Boshqa qidiruv so'zini kiriting yoki boshqa bo'limga o'ting</p>
      </div>
    `;
    return;
  }

  // Build Dish Cards HTML
  dishesGrid.innerHTML = filtered.map(dish => {
    const inCartItem = cart.find(c => c.id === dish.id);
    const isFav = favorites.includes(dish.id);
    const formattedPrice = dish.price.toLocaleString('uz-UZ') + " so'm";

    return `
      <article class="dish-card" data-dish-id="${dish.id}">
        
        <!-- Image Container -->
        <div class="dish-img-container">
          <img src="${dish.image}" alt="${dish.title}" loading="lazy">
          
          <!-- Bookmark Button -->
          <button type="button" class="btn-bookmark ${isFav ? 'favorited' : ''}" 
                  data-action="fav" data-id="${dish.id}" aria-label="Sevimlilar">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
          </button>

          <!-- Tag Badge (NEW / XIT) -->
          ${dish.tag ? `
            <span class="dish-tag-badge ${dish.tag === 'ХИТ' ? 'badge-hit' : ''}">
              ${dish.tag}
            </span>
          ` : ''}
        </div>

        <!-- Card Body -->
        <div class="dish-body">
          <span class="dish-weight">${dish.weight || ''}</span>
          <h3 class="dish-title">${dish.title}</h3>
          <p class="dish-desc">${dish.desc}</p>

          <!-- Card Footer (Price + Add/Counter Button) -->
          <div class="dish-footer">
            <span class="dish-price">${formattedPrice}</span>

            ${inCartItem ? `
              <div class="dish-qty-control">
                <button type="button" class="btn-qty-step" data-action="minus" data-id="${dish.id}">−</button>
                <span class="qty-val">${inCartItem.qty}</span>
                <button type="button" class="btn-qty-step" data-action="plus" data-id="${dish.id}">+</button>
              </div>
            ` : `
              <button type="button" class="btn-add-to-cart" data-action="add" data-id="${dish.id}">
                Savatga
              </button>
            `}
          </div>
        </div>

      </article>
    `;
  }).join('');
}

// --- 8. CART MANAGEMENT ---
function addToCart(dishId) {
  const dish = TANUKI_MENU.find(d => d.id === dishId);
  if (!dish) return;

  const existing = cart.find(c => c.id === dishId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: dish.id,
      title: dish.title,
      price: dish.price,
      image: dish.image,
      qty: 1
    });
  }

  saveCart();
  updateCartUI();
  renderProducts();
  showToast(`"${dish.title}" savatga qo'shildi! 🍣`);
}

function changeQty(dishId, delta) {
  const idx = cart.findIndex(c => c.id === dishId);
  if (idx === -1) return;

  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) {
    cart.splice(idx, 1);
  }

  saveCart();
  updateCartUI();
  renderProducts();
}

function saveCart() {
  localStorage.setItem('tanuki_cart', JSON.stringify(cart));
}

function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const formattedTotal = totalPrice.toLocaleString('uz-UZ') + " so'm";

  // Header cart count
  if (cartTotalCount) {
    cartTotalCount.textContent = totalItems;
  }

  // Floating mobile bar
  if (floatingCartBar) {
    if (totalItems > 0) {
      floatingCartBar.classList.add('has-items');
      floatCartQty.textContent = `${totalItems} ta taom`;
      floatCartSum.textContent = formattedTotal;
    } else {
      floatingCartBar.classList.remove('has-items');
    }
  }

  // Drawer Summary Lines
  if (cartSubtotalText) cartSubtotalText.textContent = formattedTotal;
  if (cartTotalText) cartTotalText.textContent = formattedTotal;

  // Drawer items render
  if (cartItemsContainer) {
    if (cart.length === 0) {
      cartItemsContainer.style.display = 'none';
      if (emptyCartState) emptyCartState.style.display = 'flex';
      if (checkoutBtn) checkoutBtn.disabled = true;
    } else {
      cartItemsContainer.style.display = 'flex';
      if (emptyCartState) emptyCartState.style.display = 'none';
      if (checkoutBtn) checkoutBtn.disabled = false;

      cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item-row">
          <img src="${item.image}" alt="${item.title}" class="cart-item-thumb">
          <div class="cart-item-details">
            <h4 class="cart-item-title">${item.title}</h4>
            <span class="cart-item-price">${(item.price * item.qty).toLocaleString('uz-UZ')} so'm</span>
          </div>
          <div class="cart-item-actions">
            <button type="button" class="btn-item-qty" data-action="minus" data-id="${item.id}">−</button>
            <span class="cart-item-qty-text">${item.qty}</span>
            <button type="button" class="btn-item-qty" data-action="plus" data-id="${item.id}">+</button>
          </div>
        </div>
      `).join('');
    }
  }
}

// --- 9. FAVORITES / BOOKMARKS ---
function toggleFavorite(dishId) {
  const idx = favorites.indexOf(dishId);
  if (idx === -1) {
    favorites.push(dishId);
    showToast("Taom sevimlilarga saqlandi! ❤️");
  } else {
    favorites.splice(idx, 1);
    showToast("Sevimlilardan olib tashlandi.");
  }
  localStorage.setItem('tanuki_favorites', JSON.stringify(favorites));
  renderProducts();
}

// --- 10. TOAST NOTIFICATIONS ---
function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

// --- 11. EVENT LISTENERS SETUP ---
function setupEventListeners() {
  
  // 1. Delegated click on dishes grid & cart drawer
  document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-action]');
    if (!target) return;

    const action = target.getAttribute('data-action');
    const id = target.getAttribute('data-id');

    if (action === 'add') {
      addToCart(id);
    } else if (action === 'plus') {
      changeQty(id, 1);
    } else if (action === 'minus') {
      changeQty(id, -1);
    } else if (action === 'fav') {
      toggleFavorite(id);
    }
  });

  // 2. Category Pills
  const catPills = document.querySelectorAll('.cat-pill');
  catPills.forEach(pill => {
    pill.addEventListener('click', () => {
      catPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCategory = pill.getAttribute('data-category');
      searchQuery = '';
      if (menuSearchInput) menuSearchInput.value = '';
      if (clearMenuSearch) clearMenuSearch.style.display = 'none';
      renderProducts();
    });
  });

  // Scroll categories next
  document.getElementById('catScrollNext')?.addEventListener('click', () => {
    const list = document.getElementById('categoryPillsList');
    if (list) list.scrollBy({ left: 240, behavior: 'smooth' });
  });

  // 3. Brand Tabs (Tanuki, TVOYA Pizza, Kaspiyka, Keytering)
  const brandTabs = document.querySelectorAll('.brand-tab');
  brandTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      brandTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentBrand = tab.getAttribute('data-brand');
      renderProducts();
    });
  });

  // 4. Menu Search Input
  if (menuSearchInput) {
    menuSearchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      if (clearMenuSearch) {
        clearMenuSearch.style.display = searchQuery ? 'block' : 'none';
      }
      renderProducts();
    });
  }

  if (clearMenuSearch) {
    clearMenuSearch.addEventListener('click', () => {
      menuSearchInput.value = '';
      searchQuery = '';
      clearMenuSearch.style.display = 'none';
      renderProducts();
    });
  }

  // 5. Stories Next button
  document.getElementById('storiesNextBtn')?.addEventListener('click', () => {
    const track = document.getElementById('storiesTrack');
    if (track) track.scrollBy({ left: 280, behavior: 'smooth' });
  });

  // Stories card click opens wheel / promo
  document.querySelectorAll('.story-card').forEach(card => {
    card.addEventListener('click', () => {
      const storyType = card.getAttribute('data-story');
      if (storyType === 'wheel') {
        openBonusModalFunc();
      } else if (storyType === 'festival') {
        const festPill = document.querySelector('.cat-pill[data-category="festival"]');
        festPill?.click();
      } else {
        showToast("Tanuki maxsus taklifi tanlandi! ✨");
      }
    });
  });

  // 6. Cart Drawer Toggle
  openCartBtn?.addEventListener('click', openCartDrawerFunc);
  floatCartOpenBtn?.addEventListener('click', openCartDrawerFunc);
  closeCartBtn?.addEventListener('click', closeCartDrawerFunc);
  cartOverlay?.addEventListener('click', closeCartDrawerFunc);

  function openCartDrawerFunc() {
    cartDrawer?.classList.add('active');
    cartOverlay?.classList.add('active');
  }

  function closeCartDrawerFunc() {
    cartDrawer?.classList.remove('active');
    cartOverlay?.classList.remove('active');
  }

  // Checkout button
  checkoutBtn?.addEventListener('click', () => {
    if (cart.length === 0) return;
    const address = document.getElementById('deliveryAddressInput')?.value || "Toshkent shahri";
    const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    alert(`🎉 Buyurtmangiz qabul qilindi!\n\nYetkazish manzili: ${address}\nJami to'lov: ${total.toLocaleString('uz-UZ')} so'm\n\nKuryer 35 daqiqa ichida yetkazib beradi!`);
    cart = [];
    saveCart();
    updateCartUI();
    renderProducts();
    closeCartDrawerFunc();
  });

  // 7. Table Booking Modal
  openTableBookingBtn?.addEventListener('click', () => {
    tableBookingModal?.classList.add('active');
    const today = new Date().toISOString().split('T')[0];
    const dateInput = document.getElementById('bookDate');
    if (dateInput) dateInput.value = today;
  });

  closeTableBookingModal?.addEventListener('click', () => {
    tableBookingModal?.classList.remove('active');
  });

  tableBookingModal?.addEventListener('click', (e) => {
    if (e.target === tableBookingModal) tableBookingModal.classList.remove('active');
  });

  tableBookingForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('bookName').value;
    const phone = document.getElementById('bookPhone').value;
    const guests = document.getElementById('bookGuests').value;
    const time = document.getElementById('bookTime').value;

    alert(`✅ Rahmat, ${name}!\n\nStol muvaffaqiyatli band qilindi.\nMehmonlar: ${guests}\nVaqt: ${time}\nTez orada administratorimiz ${phone} raqamiga tasdiqlov qo'ng'irog'ini amalga oshiradi.`);
    tableBookingModal?.classList.remove('active');
  });

  // 8. Bonus Wheel Modal
  openBonusBtn?.addEventListener('click', openBonusModalFunc);
  closeBonusModal?.addEventListener('click', closeBonusModalFunc);
  bonusModal?.addEventListener('click', (e) => {
    if (e.target === bonusModal) closeBonusModalFunc();
  });

  function openBonusModalFunc() {
    bonusModal?.classList.add('active');
    if (bonusResultMsg) bonusResultMsg.textContent = '';
  }

  function closeBonusModalFunc() {
    bonusModal?.classList.remove('active');
  }

  let wheelSpinning = false;
  spinWheelBtn?.addEventListener('click', () => {
    if (wheelSpinning) return;
    wheelSpinning = true;
    bonusResultMsg.textContent = "Charxpalak aylanmoqda... 🍀";

    const randomDegree = 1800 + Math.floor(Math.random() * 360);
    wheelCircle.style.transform = `rotate(${randomDegree}deg)`;

    setTimeout(() => {
      wheelSpinning = false;
      const prizes = [
        "🎉 Tabriklaymiz! Siz 'Sumiko Seti' yutib oldingiz!",
        "✨ Ajoyib! 50 000 so'm keshbek hisobingizga qo'shildi!",
        "🍣 Sovg'a sifatida bepul 'Filadelfiya roll' yutdingiz!",
        "🚀 Bepul yetkazib berish kuponi taqdim etildi!"
      ];
      const win = prizes[Math.floor(Math.random() * prizes.length)];
      bonusResultMsg.textContent = win;
      showToast(win, 'success');
    }, 3600);
  });

  // 9. Lang & City dropdown toggles
  setupDropdown('langPicker', 'langDropdown');
  setupDropdown('cityPicker', 'cityDropdown');

  function setupDropdown(triggerId, dropdownId) {
    const trigger = document.getElementById(triggerId);
    if (!trigger) return;

    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      trigger.classList.toggle('open');
    });

    document.addEventListener('click', () => {
      trigger.classList.remove('open');
    });
  }

  // City selection
  document.querySelectorAll('.city-option').forEach(opt => {
    opt.addEventListener('click', () => {
      document.querySelectorAll('.city-option').forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
      const cityName = opt.textContent;
      document.getElementById('selectedCityName').textContent = cityName;
      showToast(`Shahar o'zgartirildi: ${cityName}`);
    });
  });

  // Map Restaurants button
  document.getElementById('openRestaurantsMapBtn')?.addEventListener('click', () => {
    alert("📍 Toshkentdagi Tanuki Family restoranlari:\n\n1. Tanuki Center — Amir Temur ko'chasi, 24\n2. Tanuki Chilonzor — Bunyodkor shoh ko'chasi\n3. Tanuki Mirzo Ulug'bek — Parkent ko'chasi\n4. TVOЯ Pizza — Oybek ko'chasi, 8\n\nIsh vaqti: 11:00 dan 23:00 gacha");
  });
}
