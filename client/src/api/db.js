import { supabase } from '../supabase/supabaseClient';

// метод для получения данных из всех таблиц
async function fetchAllData() {
  try {
    // пользователи
    const { data: users } = await supabase
      .from('users')
      .select('id, email, user_name');
    // посты
    const { data: posts } = await supabase
      .from('posts')
      .select('id, title, content, picture, category_id, created_at');
    // комментарии
    const { data: comments } = await supabase
      .from('comments')
      .select('id, content, user_id, post_id, created_at');
    // избранное
    const { data: favorites } = await supabase
      .from('favourites')
      .select('id, user_id, post_id, created_at');
    // категории
    const { data: categories } = await supabase
      .from('categories')
      .select('id, name, created_at');
    return { users, posts, comments, favorites, categories };
  } catch (e) {
    console.error(e);
  }
}

const dbApi = { fetchAllData };

export default dbApi;
