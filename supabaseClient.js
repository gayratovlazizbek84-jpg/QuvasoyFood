/**
 * Quvasoy Food Rescue — Supabase Client Integration
 * Connected to project: https://vmasqalzwspxubllopzk.supabase.co
 */

(function() {
  const SUPABASE_URL = 'https://vmasqalzwspxubllopzk.supabase.co';
  const SUPABASE_ANON_KEY = 'sb_publishable_bRQclz36j5SqUHQQGA_a2w_h-L2B5uR';

  let supabaseClient = null;

  // Initialize Supabase client using window.supabase from CDN
  function initSupabase() {
    if (window.supabase && typeof window.supabase.createClient === 'function') {
      try {
        supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        console.log('[Supabase] Successfully connected to Quvasoy Food Rescue project!');
      } catch (err) {
        console.warn('[Supabase] Initialization error:', err);
      }
    } else {
      console.warn('[Supabase] Supabase JS library not yet loaded.');
    }
  }

  // Export functions globally
  window.QFR_Supabase = {
    getClient: function() {
      if (!supabaseClient) initSupabase();
      return supabaseClient;
    },

    // 1. Fetch live meals from Supabase
    fetchMeals: async function() {
      const client = window.QFR_Supabase.getClient();
      if (!client) return null;

      try {
        const { data, error } = await client
          .from('meals')
          .select('*')
          .order('id', { ascending: false });

        if (error) {
          console.warn('[Supabase] Could not fetch meals table (might not exist yet):', error.message);
          return null;
        }

        // Map DB fields to app format
        return data.map(item => ({
          id: item.id,
          title: typeof item.title === 'string' ? { uz: item.title, ru: item.title, en: item.title } : (item.title || { uz: 'Taom', ru: 'Блюдо', en: 'Meal' }),
          restaurant: item.restaurant || 'Restoran',
          location: item.location || 'Quvasoy',
          originalPrice: Number(item.original_price || 0),
          rescuePrice: Number(item.rescue_price || 0),
          isFree: Boolean(item.is_free),
          portionsLeft: Number(item.portions_left || 1),
          timeLeftMinutes: Number(item.time_left_minutes || 60),
          category: item.category || 'plov',
          isHalal: item.is_halal !== false,
          imageEmoji: item.image_emoji || '🍲'
        }));
      } catch (err) {
        console.warn('[Supabase] Error executing fetchMeals:', err);
        return null;
      }
    },

    // 2. Add new meal to Supabase (from Restaurant Modal)
    addMeal: async function(meal) {
      const client = window.QFR_Supabase.getClient();
      if (!client) return null;

      try {
        const dbPayload = {
          title: meal.title,
          restaurant: meal.restaurant,
          location: meal.location,
          original_price: meal.originalPrice,
          rescue_price: meal.rescuePrice,
          is_free: meal.isFree,
          portions_left: meal.portionsLeft,
          time_left_minutes: meal.timeLeftMinutes,
          category: meal.category,
          is_halal: meal.isHalal,
          image_emoji: meal.imageEmoji
        };

        const { data, error } = await client
          .from('meals')
          .insert([dbPayload])
          .select();

        if (error) {
          console.warn('[Supabase] Could not insert into meals table:', error.message);
          return null;
        }

        return data ? data[0] : null;
      } catch (err) {
        console.warn('[Supabase] Error executing addMeal:', err);
        return null;
      }
    },

    // 3. Record reservation / claim in Supabase
    recordReservation: async function(dishId, pickupCode, userName, userPhone) {
      const client = window.QFR_Supabase.getClient();
      if (!client) return false;

      try {
        // Insert reservation
        await client.from('reservations').insert([{
          dish_id: dishId,
          pickup_code: pickupCode,
          user_name: userName || 'Mehmon',
          user_phone: userPhone || '',
          status: 'confirmed'
        }]);

        // Decrement portions left in meals table if possible
        const { data: currentDish } = await client.from('meals').select('portions_left').eq('id', dishId).single();
        if (currentDish && currentDish.portions_left > 0) {
          await client.from('meals').update({ portions_left: currentDish.portions_left - 1 }).eq('id', dishId);
        }

        return true;
      } catch (err) {
        console.warn('[Supabase] Error recording reservation:', err);
        return false;
      }
    }
  };

  // Try initializing immediately or on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', initSupabase);
})();
