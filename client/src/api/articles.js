import { supabase } from '../supabase/supabaseClient';

export async function getPosts() {
  const { data: posts, error } = await supabase.from('posts').select('*');
  return posts;
}

export async function getCategoryArticles(id) {
  const { data: posts, error } = await supabase
    .from('posts')
    .select('*')
    .eq('category_id', id);
  return posts;
}
