/* eslint-disable camelcase */
import { supabase } from '../supabase/supabaseClient';
import serializeUser from '../utils/serializeUser';

const STORAGE_URL = `${
  import.meta.REACT_APP_SUPABASE_URL
}/storage/v1/object/public/`;

// метод для получения данных пользователя из базы при наличии аутентифицированного пользователя
// объект, возвращаемый методом `auth.user`, извлекается из локального хранилища
const get = async () => {
  const { data } = await supabase.auth.getSession();
  if (data.session) {
    const { data: _userData, error } = await supabase
      .from('users')
      .select()
      .match({ id: data.session.user.id })
      .single();
    if (error) throw error;
    return _userData;
  }
  return null;
};

// метод для регистрации пользователя
const register = async (userData) => {
  const { email, password } = userData;
  // регистрируем пользователя
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) throw error;
  // записываем пользователя в базу
  const { data: _user, error: _error } = await supabase
    .from('users')
    // сериализуем объект пользователя
    .insert([serializeUser(data)])
    .single();
  if (_error) throw _error;
  return _user;
};

// метод для авторизации пользователя
const login = async (userInput) => {
  // авторизуем пользователя
  const { email, password } = userInput;
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;
  // получаем данные пользователя из базы
  const { data: _user, error: _error } = await supabase
    .from('users')
    .select()
    .match({ id: data.user.id })
    .single();
  if (_error) throw _error;
  return _user;
};

// метод для выхода из системы
const logout = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
  return null;
};

// метод для обновления данных пользователя
const update = async (data) => {
  // получаем объект с данными пользователя
  const user = supabase.auth.user();
  if (!user) return;
  const { data: _user, error } = await supabase
    .from('users')
    .update(data)
    .match({ id: user.id })
    .single();
  if (error) throw error;
  return _user;
};

// метод принимает файл - аватар пользователя
const uploadAvatar = async (file) => {
  const user = supabase.auth.user();
  if (!user) return;
  const { id } = user;
  // извлекаем расширение из названия файла
  // метод `at` появился в `ECMAScript` в этом году
  // он позволяет простым способом извлекать элементы массива с конца
  const ext = file.name.split('.').at(-1);
  // формируем название аватара
  const name = `${id}.${ext}`;
  // загружаем файл в хранилище
  const {
    // возвращаемый объект имеет довольно странную форму
    data: { Key },
    error,
  } = await supabase.storage.from('avatars').upload(name, file, {
    // не кешировать файл - это важно!
    cacheControl: 'no-cache',
    // перезаписывать аватар при наличии
    upsert: true,
  });
  if (error) throw error;
  // формируем путь к файлу
  const avatar_url = STORAGE_URL + Key;
  // обновляем данные пользователя -
  // записываем путь к аватару
  const { data: _user, error: _error } = await supabase
    .from('users')
    .update({ avatar_url })
    .match({ id })
    .single();
  if (_error) throw _error;
  // возвращаем обновленного пользователя
  return _user;
};

const userApi = { get, register, login, logout, update, uploadAvatar };

export default userApi;
