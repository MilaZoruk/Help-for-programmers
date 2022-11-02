import { supabase } from '../supabase/supabaseClient';

// export default async function getPosts() {
//   const { data: posts, error } = await supabase.from('posts').select('*');
//   return posts;
// }

export default async function getOnePost(id) {
  const { data: posts, error } = await supabase
    .from('posts')
    .select('*')
    .eq('category_id', id);
  return posts;
}
