-- ============================================================================
-- Quvasoy Food Rescue — Supabase SQL Database Schema
-- Project: https://vmasqalzwspxubllopzk.supabase.co
-- Copy and run this script in Supabase Dashboard -> SQL Editor
-- ============================================================================

-- 1. Create 'meals' Table
CREATE TABLE IF NOT EXISTS public.meals (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  title JSONB NOT NULL,
  restaurant TEXT NOT NULL,
  location TEXT NOT NULL,
  original_price NUMERIC DEFAULT 0,
  rescue_price NUMERIC DEFAULT 0,
  is_free BOOLEAN DEFAULT FALSE,
  portions_left INTEGER DEFAULT 1,
  time_left_minutes INTEGER DEFAULT 60,
  category TEXT DEFAULT 'plov',
  is_halal BOOLEAN DEFAULT TRUE,
  image_emoji TEXT DEFAULT '🍲'
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.meals ENABLE ROW LEVEL SECURITY;

-- Allow public read access (anon key can view meals)
CREATE POLICY "Allow public read access to meals" 
  ON public.meals FOR SELECT USING (true);

-- Allow public insert (restaurants can list meals)
CREATE POLICY "Allow public insert to meals" 
  ON public.meals FOR INSERT WITH CHECK (true);

-- Allow public update (claiming meal decrements portions)
CREATE POLICY "Allow public update to meals" 
  ON public.meals FOR UPDATE USING (true);


-- 2. Create 'reservations' Table (For claimed meals & pickup codes)
CREATE TABLE IF NOT EXISTS public.reservations (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  dish_id BIGINT REFERENCES public.meals(id) ON DELETE CASCADE,
  pickup_code TEXT NOT NULL,
  user_name TEXT,
  user_phone TEXT,
  status TEXT DEFAULT 'confirmed'
);

ALTER TABLE public.reservations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert to reservations" 
  ON public.reservations FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public read to reservations" 
  ON public.reservations FOR SELECT USING (true);


-- 3. Insert Initial Sample Meals for Quvasoy
INSERT INTO public.meals (title, restaurant, location, original_price, rescue_price, is_free, portions_left, time_left_minutes, category, is_halal, image_emoji)
VALUES 
  ('{"uz": "Osh (Palov) — Zafar Choyxonasi", "ru": "Плов — Чайхана Зафар", "en": "Osh (Plov) — Zafar"}', 'Zafar Choyxonasi', 'Quvasoy, Marg''ilon ko''chasi 14', 32000, 3000, false, 4, 80, 'plov', true, '🍲'),
  ('{"uz": "Shashlik — Bahor Milliy Taomlar", "ru": "Шашлык — Кафе Бахор", "en": "Shashlik — Bahor"}', 'Bahor Milliy Taomlar', 'Quvasoy, Markaziy xiyobon 5', 18000, 0, true, 3, 45, 'plov', true, '🔥'),
  ('{"uz": "Go''shtli Somsa (Issiq) — Rayhon", "ru": "Самса с мясом — Райхон", "en": "Tandir Samsa — Rayhon"}', 'Rayhon Milliy Taomlar', 'Quvasoy, Temiryo''l vokzali yaqinida', 12000, 4000, false, 8, 110, 'bakery', true, '🥟'),
  ('{"uz": "Yangi Tandir Non & Patir — Quvasoy Non", "ru": "Тандырный хлеб и патыр", "en": "Fresh Tandoor Bread — Quvasoy"}', 'Quvasoy Nonvoyxonasi', 'Quvasoy, Bozor maydoni 2', 8000, 0, true, 12, 60, 'bakery', true, '🥖'),
  ('{"uz": "Lag''mon & Mastava — Vodiy Taomlari", "ru": "Лагман и Мастава — Водий", "en": "Lagman & Soup — Vodiy"}', 'Vodiy Oshxonasi', 'Quvasoy, Mustaqillik shoh ko''chasi 88', 28000, 5000, false, 5, 95, 'plov', true, '🍜'),
  ('{"uz": "Meva va Shirinliklar to''plami — Shirin Don", "ru": "Набор свежей выпечки", "en": "Pastry & Fruit Box — Shirin Don"}', 'Shirin Don Qandolatchilik', 'Quvasoy, Madaniyat uyi yonida', 40000, 8000, false, 2, 40, 'bakery', true, '🥐');
