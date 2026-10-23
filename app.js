/**
 * Quvasoy Food Rescue — Core Application Logic
 * Powers all interactive buttons, claims, modal dialogues, catalog filtering, and real-time i18n
 */

'use strict';

const APP_DATA = {
  meals: [
    {
      id: 1,
      title: { uz: "Osh (Palov) — Zafar Choyxonasi", ru: "Плов — Чайхана Зафар", en: "Osh (Plov) — Zafar" },
      restaurant: "Zafar Choyxonasi",
      location: "Quvasoy, Marg'ilon ko'chasi 14",
      originalPrice: 32000,
      rescuePrice: 3000,
      isFree: false,
      portionsLeft: 4,
      timeLeftMinutes: 80,
      category: "plov",
      isHalal: true,
      imageEmoji: "🍲"
    },
    {
      id: 2,
      title: { uz: "Shashlik — Bahor Milliy Taomlar", ru: "Шашлык — Кафе Бахор", en: "Shashlik — Bahor" },
      restaurant: "Bahor Milliy Taomlar",
      location: "Quvasoy, Markaziy xiyobon 5",
      originalPrice: 18000,
      rescuePrice: 0,
      isFree: true,
      portionsLeft: 3,
      timeLeftMinutes: 45,
      category: "plov",
      isHalal: true,
      imageEmoji: "🔥"
    },
    {
      id: 3,
      title: { uz: "Go'shtli Somsa (Issiq) — Rayhon", ru: "Самса с мясом — Райхон", en: "Tandir Samsa — Rayhon" },
      restaurant: "Rayhon Milliy Taomlar",
      location: "Quvasoy, Temiryo'l vokzali yaqinida",
      originalPrice: 12000,
      rescuePrice: 4000,
      isFree: false,
      portionsLeft: 8,
      timeLeftMinutes: 110,
      category: "bakery",
      isHalal: true,
      imageEmoji: "🥟"
    },
    {
      id: 4,
      title: { uz: "Yangi Tandir Non & Patir — Quvasoy Non", ru: "Тандырный хлеб и патыр", en: "Fresh Tandoor Bread — Quvasoy" },
      restaurant: "Quvasoy Nonvoyxonasi",
      location: "Quvasoy, Bozor maydoni 2",
      originalPrice: 8000,
      rescuePrice: 0,
      isFree: true,
      portionsLeft: 12,
      timeLeftMinutes: 60,
      category: "bakery",
      isHalal: true,
      imageEmoji: "🥖"
    },
    {
      id: 5,
      title: { uz: "Lag'mon & Mastava — Vodiy Taomlari", ru: "Лагман и Мастава — Водий", en: "Lagman & Soup — Vodiy" },
      restaurant: "Vodiy Oshxonasi",
      location: "Quvasoy, Mustaqillik shoh ko'chasi 88",
      originalPrice: 28000,
      rescuePrice: 5000,
      isFree: false,
      portionsLeft: 5,
      timeLeftMinutes: 95,
      category: "plov",
      isHalal: true,
      imageEmoji: "🍜"
    },
    {
      id: 6,
      title: { uz: "Meva va Shirinliklar to'plami — Shirin Don", ru: "Набор свежей выпечки", en: "Pastry & Fruit Box — Shirin Don" },
      restaurant: "Shirin Don Qandolatchilik",
      location: "Quvasoy, Madaniyat uyi yonida",
      originalPrice: 40000,
      rescuePrice: 8000,
      isFree: false,
      portionsLeft: 2,
      timeLeftMinutes: 40,
      category: "bakery",
      isHalal: true,
      imageEmoji: "🥐"
    }
  ],
  activeFilter: 'all',
  selectedMeal: null,
  currentUser: JSON.parse(localStorage.getItem('qfr_user') || 'null')
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  initNavEvents();
  initModals();
  initCatalog();
  initMockupInteractions();
  initAuth();
  updateUserUI();

  // Connect & Sync with Supabase Database
  if (window.QFR_Supabase && typeof window.QFR_Supabase.fetchMeals === 'function') {
    window.QFR_Supabase.fetchMeals().then(remoteMeals => {
      if (remoteMeals && remoteMeals.length > 0) {
        APP_DATA.meals = remoteMeals;
        renderCatalogGrid();
        console.log('[Supabase] Live meals loaded from database:', remoteMeals.length);
      }
    });
  }

  // Listen to Language changes to re-render texts
  window.addEventListener('qfr_lang_changed', (e) => {
    updateDynamicTexts(e.detail.lang);
  });

  // Initial render of dynamic texts
  const currentLang = (typeof window.getCurrentLang === 'function') ? window.getCurrentLang() : 'uz';
  updateDynamicTexts(currentLang);
});

/* ==========================================================================
   Navigation & Action Button Bindings
   ========================================================================== */
function initNavEvents() {
  // Navigation Pills active toggle
  document.querySelectorAll('.nav-pill').forEach(pill => {
    pill.addEventListener('click', (e) => {
      document.querySelectorAll('.nav-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
    });
  });

  // Hero "Find Food Near Me" & Header "Browse Food" buttons
  const findFoodBtn = document.getElementById('findFoodHeroBtn');
  const browseHeaderBtn = document.getElementById('browseFoodHeaderBtn');

  [findFoodBtn, browseHeaderBtn].forEach(btn => {
    if (btn) {
      btn.addEventListener('click', (e) => {
        const catalogSec = document.getElementById('catalog');
        if (catalogSec) {
          catalogSec.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  });

  // "I'm a Restaurant" & "For Restaurants" CTA buttons
  const imRestBtn = document.getElementById('imRestaurantHeroBtn');
  const partnerModalBtn = document.getElementById('partnerModalBtn');

  [imRestBtn, partnerModalBtn].forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => {
        openModal('restaurantModal');
      });
    }
  });

  // Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileMenuToggle');
  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      const centerNav = document.querySelector('.center-nav');
      if (centerNav) {
        if (centerNav.style.display === 'block') {
          centerNav.style.display = 'none';
        } else {
          centerNav.style.display = 'block';
          centerNav.style.position = 'absolute';
          centerNav.style.top = '74px';
          centerNav.style.left = '0';
          centerNav.style.width = '100%';
          centerNav.style.backgroundColor = 'var(--bg-card)';
          centerNav.style.padding = '16px';
          centerNav.style.borderBottom = '1px solid var(--border-color)';
        }
      }
    });
  }
}

/* ==========================================================================
   Phone Mockup Interactive Buttons
   ========================================================================== */
function initMockupInteractions() {
  // Bell icon inside mockup
  const bellBtn = document.getElementById('phoneNotificationsBtn');
  if (bellBtn) {
    bellBtn.addEventListener('click', () => {
      showToast("🔔 Quvasoy: 2 ta yangi bepul taom joylandi!", "info");
    });
  }

  // Floating bubbles clicks
  const bubbleNew = document.getElementById('bubbleNewItems');
  if (bubbleNew) {
    bubbleNew.addEventListener('click', () => {
      document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Inside phone card clicks
  document.querySelectorAll('.phone-food-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = parseInt(card.getAttribute('data-dish-id'), 10);
      const meal = APP_DATA.meals.find(m => m.id === id);
      if (meal) {
        openClaimModal(meal);
      }
    });
  });

  // Inside phone search filter
  const phoneSearch = document.getElementById('phoneSearchInput');
  if (phoneSearch) {
    phoneSearch.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      document.querySelectorAll('.phone-food-card').forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(q) ? 'flex' : 'none';
      });
    });
  }
}

/* ==========================================================================
   Food Catalog & Real-time Filter Chips
   ========================================================================== */
function initCatalog() {
  const filterChips = document.querySelectorAll('.filter-chip');
  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      APP_DATA.activeFilter = chip.getAttribute('data-filter');
      renderCatalogGrid();
    });
  });

  renderCatalogGrid();
}

function renderCatalogGrid() {
  const grid = document.getElementById('foodCatalogGrid');
  if (!grid) return;

  const lang = (typeof window.getCurrentLang === 'function') ? window.getCurrentLang() : 'uz';
  let filtered = [...APP_DATA.meals];

  if (APP_DATA.activeFilter === 'free') {
    filtered = filtered.filter(m => m.isFree || m.rescuePrice === 0);
  } else if (APP_DATA.activeFilter === 'under5k') {
    filtered = filtered.filter(m => m.rescuePrice <= 5000);
  } else if (APP_DATA.activeFilter === 'plov') {
    filtered = filtered.filter(m => m.category === 'plov');
  } else if (APP_DATA.activeFilter === 'bakery') {
    filtered = filtered.filter(m => m.category === 'bakery');
  } else if (APP_DATA.activeFilter === 'halal') {
    filtered = filtered.filter(m => m.isHalal);
  }

  const t = {
    freeTag: (typeof window.getTranslation === 'function') ? window.getTranslation('freeTag') : 'BEPUL',
    btnClaim: (typeof window.getTranslation === 'function') ? window.getTranslation('btnClaim') : 'Band qilish',
    som: (typeof window.getTranslation === 'function') ? window.getTranslation('som') : 'so\'m',
    leftCount: (typeof window.getTranslation === 'function') ? window.getTranslation('leftCount') : 'qoldi'
  };

  grid.innerHTML = filtered.map(meal => {
    const title = meal.title[lang] || meal.title.uz;
    const priceText = meal.isFree ? `<span class="catalog-rescue-price" style="color:var(--color-green);">${t.freeTag}</span>` : `<span class="catalog-rescue-price">${meal.rescuePrice.toLocaleString()} ${t.som}</span>`;
    const origPriceText = meal.originalPrice ? `<span class="catalog-original-price">${meal.originalPrice.toLocaleString()} ${t.som}</span>` : '';

    return `
      <article class="catalog-card" data-dish-id="${meal.id}">
        <div class="card-top-row">
          <span class="restaurant-badge">${meal.restaurant}</span>
          <span class="portions-pill">${meal.portionsLeft} ${t.leftCount}</span>
        </div>

        <h3 class="catalog-dish-title">${meal.imageEmoji} ${title}</h3>
        <p class="catalog-dish-desc">📍 ${meal.location}</p>

        <div class="catalog-price-row">
          ${priceText}
          ${origPriceText}
        </div>

        <div class="catalog-footer-row">
          <div class="catalog-timer-info">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>${meal.timeLeftMinutes} daqiqa ichida</span>
          </div>
          <button type="button" class="btn btn-primary-green btn-sm" onclick="handleMealClaim(${meal.id})">
            ${t.btnClaim}
          </button>
        </div>
      </article>
    `;
  }).join('');
}

window.handleMealClaim = function(dishId) {
  const meal = APP_DATA.meals.find(m => m.id === dishId);
  if (meal) {
    openClaimModal(meal);
  }
};

/* ==========================================================================
   Modals & Claim Logic
   ========================================================================== */
function initModals() {
  // Close buttons on all modals
  document.querySelectorAll('.modal-close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      closeAllModals();
    });
  });

  // Backdrop click closes modal
  document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeAllModals();
    });
  });

  // ESC key closes modals
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAllModals();
  });

  // Claim Confirmation Button
  const confirmBtn = document.getElementById('confirmClaimBtn');
  if (confirmBtn) {
    confirmBtn.addEventListener('click', async () => {
      const code = document.getElementById('pickupCodeDisplay').textContent;
      const meal = APP_DATA.selectedMeal;

      if (meal && meal.portionsLeft > 0) {
        meal.portionsLeft--;
        renderCatalogGrid();

        // Sync reservation to Supabase
        if (window.QFR_Supabase && typeof window.QFR_Supabase.recordReservation === 'function') {
          const userName = APP_DATA.currentUser ? APP_DATA.currentUser.name : 'Mehmon';
          const userPhone = APP_DATA.currentUser ? APP_DATA.currentUser.phone : '';
          window.QFR_Supabase.recordReservation(meal.id, code, userName, userPhone);
        }
      }
      closeAllModals();
      showToast(`🎉 ${code} muvaffaqiyatli band qilindi! Restoranda ushbu kodni ko'rsatib oling.`, 'success');
    });
  }

  // Restaurant Dish Upload Form
  const uploadForm = document.getElementById('uploadDishForm');
  if (uploadForm) {
    uploadForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const dishName = document.getElementById('dishNameInput').value.trim();
      const restName = document.getElementById('restNameInput').value.trim();
      const origPrice = parseInt(document.getElementById('origPriceInput').value, 10) || 20000;
      const isFree = document.getElementById('isFreeCheckbox').checked;
      const rescuePrice = isFree ? 0 : (parseInt(document.getElementById('rescuePriceInput').value, 10) || 5000);
      const portions = parseInt(document.getElementById('portionsInput').value, 10) || 4;

      const newMeal = {
        id: Date.now(),
        title: { uz: `${dishName} — ${restName}`, ru: `${dishName} — ${restName}`, en: `${dishName} — ${restName}` },
        restaurant: restName,
        location: "Quvasoy shahar markazi",
        originalPrice: origPrice,
        rescuePrice: rescuePrice,
        isFree: isFree,
        portionsLeft: portions,
        timeLeftMinutes: 90,
        category: "plov",
        isHalal: true,
        imageEmoji: "🍲"
      };

      // Add to local state
      APP_DATA.meals.unshift(newMeal);
      renderCatalogGrid();
      closeAllModals();
      uploadForm.reset();
      showToast(`✅ "${dishName}" muvaffaqiyatli joylandi!`, 'success');

      // Sync to Supabase Database
      if (window.QFR_Supabase && typeof window.QFR_Supabase.addMeal === 'function') {
        const saved = await window.QFR_Supabase.addMeal(newMeal);
        if (saved && saved.id) {
          newMeal.id = saved.id;
          console.log('[Supabase] Dish uploaded with ID:', saved.id);
        }
      }

      // Scroll to catalog
      document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
    });
  }
}

function openClaimModal(meal) {
  APP_DATA.selectedMeal = meal;
  const lang = (typeof window.getCurrentLang === 'function') ? window.getCurrentLang() : 'uz';
  const title = meal.title[lang] || meal.title.uz;

  // Generate dynamic 5-digit pickup reference
  const randomRef = Math.floor(10000 + Math.random() * 90000);
  document.getElementById('pickupCodeDisplay').textContent = `#QFR-${randomRef}`;
  document.getElementById('claimModalDishTitle').textContent = `${meal.imageEmoji} ${title}`;
  document.getElementById('pickupExpiresText').textContent = `⏱ ${meal.timeLeftMinutes} daqiqa ichida oling`;

  const detailsContainer = document.getElementById('claimModalDetails');
  detailsContainer.innerHTML = `
    <p><strong>Restoran:</strong> ${meal.restaurant}</p>
    <p><strong>Manzil:</strong> 📍 ${meal.location}</p>
    <p><strong>Narxi:</strong> ${meal.isFree ? '<span style="color:var(--color-green);font-weight:700;">BEPUL</span>' : meal.rescuePrice.toLocaleString() + ' so\'m'}</p>
    <p><strong>Qolgan porsiya:</strong> ${meal.portionsLeft} ta</p>
  `;

  openModal('claimModal');
}

function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  }
}

function closeAllModals() {
  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  });
  document.body.classList.remove('modal-open');
}

/* ==========================================================================
   User Auth Simulation
   ========================================================================== */
function initAuth() {
  const signInBtn = document.getElementById('signInBtn');
  if (signInBtn) {
    signInBtn.addEventListener('click', () => {
      if (APP_DATA.currentUser) {
        if (confirm(`${APP_DATA.currentUser.name}, akkauntdan chiqmoqchimisiz?`)) {
          APP_DATA.currentUser = null;
          localStorage.removeItem('qfr_user');
          updateUserUI();
          showToast("Tizimdan chiqildi", "info");
        }
      } else {
        openModal('authModal');
      }
    });
  }

  const authForm = document.getElementById('authForm');
  if (authForm) {
    authForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('authNameInput').value.trim();
      const phone = document.getElementById('authPhoneInput').value.trim();

      APP_DATA.currentUser = { name, phone };
      localStorage.setItem('qfr_user', JSON.stringify(APP_DATA.currentUser));
      closeAllModals();
      updateUserUI();
      showToast(`Xush kelibsiz, ${name}!`, "success");
    });
  }
}

function updateUserUI() {
  const signInBtn = document.getElementById('signInBtn');
  if (!signInBtn) return;

  if (APP_DATA.currentUser) {
    signInBtn.textContent = `👤 ${APP_DATA.currentUser.name}`;
    signInBtn.style.borderColor = 'var(--color-green)';
  } else {
    const lang = (typeof window.getCurrentLang === 'function') ? window.getCurrentLang() : 'uz';
    const t = (typeof window.getTranslation === 'function') ? window.getTranslation('navSignIn') : 'Kirish';
    signInBtn.textContent = t;
  }
}

/* ==========================================================================
   Dynamic Texts Synchronization for Phone Mockup & Cards
   ========================================================================== */
function updateDynamicTexts(lang) {
  const plovName = document.querySelector('[data-dish-key="plov"]');
  const shashlikName = document.querySelector('[data-dish-key="shashlik"]');
  const timer1h20 = document.querySelector('[data-timer-key="1h20m"]');
  const timer45m = document.querySelector('[data-timer-key="45m"]');

  if (lang === 'uz') {
    if (plovName) plovName.textContent = "Osh (Palov) — Zafar";
    if (shashlikName) shashlikName.textContent = "Shashlik — Bahor";
    if (timer1h20) timer1h20.textContent = "1s 20d";
    if (timer45m) timer45m.textContent = "45d";
  } else if (lang === 'ru') {
    if (plovName) plovName.textContent = "Плов — Зафар";
    if (shashlikName) shashlikName.textContent = "Шашлык — Бахор";
    if (timer1h20) timer1h20.textContent = "1ч 20м";
    if (timer45m) timer45m.textContent = "45м";
  } else {
    if (plovName) plovName.textContent = "Osh (Plov) — Zafar";
    if (shashlikName) shashlikName.textContent = "Shashlik — Bahor";
    if (timer1h20) timer1h20.textContent = "1h 20m";
    if (timer45m) timer45m.textContent = "45m";
  }

  updateUserUI();
  renderCatalogGrid();
}

/* ==========================================================================
   Toast Notification Helper
   ========================================================================== */
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('toast-leave');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
