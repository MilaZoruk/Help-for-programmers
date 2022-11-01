import { supabase } from '../supabase/supabaseClient';

// метод для создания комментария
const create = async (commentData) => {
  const user = supabase.auth.user();
  if (!user) return;
  const { data, error } = await supabase
    .from('comments')
    .insert([{ ...commentData, user_id: user.id }])
    .single();
  if (error) throw error;
  return data;
};

// для обновления комментария
const update = async (commentData) => {
  const user = supabase.auth.user();
  if (!user) return;
  const { data, error } = await supabase
    .from('comments')
    .update({ ...commentData })
    .match({ id: commentData.id, user_id: user.id });
  if (error) throw error;
  return data;
};

// для удаления комментария
const remove = async (id) => {
  const user = supabase.auth.user();
  if (!user) return;
  const { error } = await supabase
    .from('comments')
    .delete()
    .match({ id, user_id: user.id });
  if (error) throw error;
};

const commentApi = { create, update, remove };

export default commentApi;
