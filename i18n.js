/**
 * Quvasoy Food Rescue — Internationalization (i18n)
 * Full trilingual dictionary: O'zbekcha (UZ), Русский (RU), English (EN)
 */
(function() {
  const LANG_KEY = 'qfr_lang';

  const TRANSLATIONS = {
    uz: {
      appName: "Quvasoy Food Rescue",
      navHome: "Bosh sahifa",
      navFindFood: "Taom topish",
      navForRestaurants: "Restoranlar uchun",
      navSignIn: "Kirish",
      navSignOut: "Chiqish",
      navBrowseFood: "Taomlarni ko'rish",
      heroBadge: "Quvasoyda real vaqtli oziq-ovqat qutqaruvi",
      heroTitle1: "Yaxshi taomni asrang,",
      heroTitle2: "jamiyatni to'ydiring",
      heroSubtitle: "Restoranlar ortib qolgan sifatli taomlarni yuklaydi. Siz ularni yangi va ancha arzon narxda olasiz. Kamroq isrof, ko'proq lazzat — har kuni.",
      btnFindFoodNearMe: "Yaqin atrofdan topish",
      btnImRestaurant: "Men restoronman",
      stat1Number: "2,400+",
      stat1Label: "SHU OYDA QUTQARILGAN TAOMLAR",
      stat2Number: "48",
      stat2Label: "HAMKOR RESTORANLAR",
      stat3Number: "94%",
      stat3Label: "FOYDALANUVCHILAR MAMNUNIYATI",
      mockupSearchPlaceholder: "Taom qidirish...",
      mockupNewBadge: "4 yangi taom!",
      mockupSavedBadge: "34 taom saqlandi",
      mockupRatingBadge: "4.9 baho",
      catalogTitle: "Bugungi yangi taomlar",
      catalogSubtitle: "Quvasoy shahridagi restoranlardan arzon yoki bepul sifatli taomlar",
      filterAll: "Barchasi",
      filterFree: "Bepul",
      filterUnder5k: "5,000 so'mgacha",
      filterPlov: "Osh & Issiq taomlar",
      filterBakery: "Somsa & Non mahsulotlari",
      filterHalal: "Halol sertifikatlangan",
      freeTag: "BEPUL",
      som: "so'm",
      leftCount: "qoldi",
      timeLeft: "qoldi",
      btnClaim: "Band qilish",
      btnDetails: "Tafsilotlar",
      modalClaimTitle: "Taomni band qilish",
      modalClaimDesc: "Ushbu taomni olib ketish uchun sizga maxsus kod beriladi:",
      modalPickupCode: "Olib ketish kodi:",
      modalExpiresIn: "Saqlanish vaqti:",
      modalConfirmBtn: "Tasdiqlash & Kod olish",
      modalCloseBtn: "Yopish",
      partnerModalTitle: "Restoran qo'shish / Taom yuklash",
      partnerModalDesc: "Ortib qolgan toza va yangi taomlarni yuklang, isrof bo'lishining oldini oling.",
      labelDishName: "Taom nomi",
      labelRestName: "Restoran / Kafe nomi",
      labelOriginalPrice: "Asl narxi (so'm)",
      labelRescuePrice: "Qutqaruv narxi (so'm)",
      labelIsFree: "Bepul (ehtiyojmandlarga xayriya)",
      labelPortions: "Porsiyalar soni",
      labelPickupUntil: "Olib ketish vaqti (gacha)",
      btnUploadDish: "Taomni e'lon qilish",
      authModalTitle: "Tizimga kirish",
      authModalDesc: "Oziq-ovqatni asrash hamjamiyatiga qo'shiling",
      labelPhone: "Telefon raqamingiz",
      labelName: "Ismingiz",
      btnSubmitAuth: "Kirish / Ro'yxatdan o'tish",
      toastSuccessClaim: "Taom muvaffaqiyatli band qilindi!",
      toastDishAdded: "Yangi taom e'lonlarga qo'shildi!",
      toastLangSwitched: "Til o'zgartirildi: O'zbekcha"
    },
    ru: {
      appName: "Quvasoy Food Rescue",
      navHome: "Главная",
      navFindFood: "Найти еду",
      navForRestaurants: "Ресторанам",
      navSignIn: "Войти",
      navSignOut: "Выйти",
      navBrowseFood: "Смотреть еду",
      heroBadge: "Спасение еды в Кувасае в реальном времени",
      heroTitle1: "Спасайте хорошую еду,",
      heroTitle2: "кормите сообщество",
      heroSubtitle: "Рестораны выкладывают свежие порции блюд. Вы забираете их горячими по символической цене. Меньше отходов, больше вкуса — каждый день.",
      btnFindFoodNearMe: "Найти рядом со мной",
      btnImRestaurant: "Я ресторан",
      stat1Number: "2,400+",
      stat1Label: "СПАСЕНО БЛЮД В ЭТОМ МЕСЯЦЕ",
      stat2Number: "48",
      stat2Label: "РЕСТОРАНОВ-ПАРТНЕРОВ",
      stat3Number: "94%",
      stat3Label: "ДОВОЛЬНЫХ ПОЛЬЗОВАТЕЛЕЙ",
      mockupSearchPlaceholder: "Поиск блюд...",
      mockupNewBadge: "4 новинки!",
      mockupSavedBadge: "34 спасено",
      mockupRatingBadge: "Рейтинг 4.9",
      catalogTitle: "Доступные блюда сегодня",
      catalogSubtitle: "Свежая еда из заведений города Кувасай со скидкой до 80% или бесплатно",
      filterAll: "Все",
      filterFree: "Бесплатно",
      filterUnder5k: "До 5,000 сум",
      filterPlov: "Плов и горячее",
      filterBakery: "Самса и выпечка",
      filterHalal: "Халяль",
      freeTag: "БЕСПЛАТНО",
      som: "сум",
      leftCount: "осталось",
      timeLeft: "осталось",
      btnClaim: "Забрать",
      btnDetails: "Подробнее",
      modalClaimTitle: "Бронирование блюда",
      modalClaimDesc: "Покажите этот персональный код при получении в заведении:",
      modalPickupCode: "Код выдачи:",
      modalExpiresIn: "Забрать в течение:",
      modalConfirmBtn: "Подтвердить бронь",
      modalCloseBtn: "Закрыть",
      partnerModalTitle: "Для заведений / Добавить блюдо",
      partnerModalDesc: "Выкладывайте остатки свежих блюд и помогайте экологии и жителям города.",
      labelDishName: "Название блюда",
      labelRestName: "Название заведения",
      labelOriginalPrice: "Обычная цена (сум)",
      labelRescuePrice: "Цена спасения (сум)",
      labelIsFree: "Раздать бесплатно",
      labelPortions: "Количество порций",
      labelPickupUntil: "Забрать до",
      btnUploadDish: "Опубликовать блюдо",
      authModalTitle: "Авторизация",
      authModalDesc: "Войдите, чтобы бронировать блюда и копить эко-баллы",
      labelPhone: "Номер телефона",
      labelName: "Ваше имя",
      btnSubmitAuth: "Войти в аккаунт",
      toastSuccessClaim: "Блюдо успешно забронировано!",
      toastDishAdded: "Блюдо опубликовано в ленте!",
      toastLangSwitched: "Язык переключен: Русский"
    },
    en: {
      appName: "Quvasoy Food Rescue",
      navHome: "Home",
      navFindFood: "Find Food",
      navForRestaurants: "For Restaurants",
      navSignIn: "Sign In",
      navSignOut: "Sign Out",
      navBrowseFood: "Browse Food",
      heroBadge: "Real-time food rescue in Quvasoy",
      heroTitle1: "Save Great Food",
      heroTitle2: "Feed the Community",
      heroSubtitle: "Restaurants upload leftover meals. You pick them up fresh, at a fraction of the cost. Less waste, more taste — every single day.",
      btnFindFoodNearMe: "Find Food Near Me",
      btnImRestaurant: "I'm a Restaurant",
      stat1Number: "2,400+",
      stat1Label: "MEALS RESCUED THIS MONTH",
      stat2Number: "48",
      stat2Label: "PARTNER RESTAURANTS",
      stat3Number: "94%",
      stat3Label: "USER SATISFACTION",
      mockupSearchPlaceholder: "Search food...",
      mockupNewBadge: "4 new items!",
      mockupSavedBadge: "34 meals saved",
      mockupRatingBadge: "4.9 rating",
      catalogTitle: "Available Rescued Meals Today",
      catalogSubtitle: "Surplus fresh delicious meals from restaurants in Quvasoy at high discounts or free",
      filterAll: "All",
      filterFree: "Free",
      filterUnder5k: "Under 5,000 so'm",
      filterPlov: "Plov & Hot Meals",
      filterBakery: "Samsa & Bakery",
      filterHalal: "Halal Certified",
      freeTag: "FREE",
      som: "so'm",
      leftCount: "left",
      timeLeft: "left",
      btnClaim: "Claim Meal",
      btnDetails: "Details",
      modalClaimTitle: "Reserve This Meal",
      modalClaimDesc: "Show this one-time pickup code when you arrive at the restaurant:",
      modalPickupCode: "Pickup Code:",
      modalExpiresIn: "Pickup window expires in:",
      modalConfirmBtn: "Confirm & Get Code",
      modalCloseBtn: "Close",
      partnerModalTitle: "Partner Portal / Upload Meal",
      partnerModalDesc: "Upload fresh surplus food to stop food waste in Quvasoy.",
      labelDishName: "Meal Name",
      labelRestName: "Restaurant Name",
      labelOriginalPrice: "Original Price (so'm)",
      labelRescuePrice: "Rescue Price (so'm)",
      labelIsFree: "Mark as Free (Charity donation)",
      labelPortions: "Number of Portions",
      labelPickupUntil: "Pickup Window Closes At",
      btnUploadDish: "Publish Listing",
      authModalTitle: "Sign In to Food Rescue",
      authModalDesc: "Join our local food sustainability network",
      labelPhone: "Phone Number",
      labelName: "Your Full Name",
      btnSubmitAuth: "Continue / Sign In",
      toastSuccessClaim: "Meal successfully reserved!",
      toastDishAdded: "Surplus meal published to live feed!",
      toastLangSwitched: "Language switched: English"
    }
  };

  function getStoredLang() {
    return localStorage.getItem(LANG_KEY) || 'uz';
  }

  function applyLanguage(lang) {
    if (!TRANSLATIONS[lang]) lang = 'uz';
    localStorage.setItem(LANG_KEY, lang);
    const t = TRANSLATIONS[lang];

    // Update switcher buttons active state
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Translate DOM elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = t[key];
        } else {
          el.innerHTML = t[key];
        }
      }
    });

    // Dispatch global event for application listeners
    window.dispatchEvent(new CustomEvent('qfr_lang_changed', { detail: { lang, t } }));
  }

  window.setAppLanguage = function(lang) {
    applyLanguage(lang);
  };

  window.getTranslation = function(key) {
    const lang = getStoredLang();
    return (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) || TRANSLATIONS.en[key] || key;
  };

  window.getCurrentLang = getStoredLang;

  document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(getStoredLang());

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = btn.getAttribute('data-lang');
        applyLanguage(lang);
      });
    });
  });
})();
