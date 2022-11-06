/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState } from 'react';

import { supabase } from '../../supabase/supabaseClient';

export default function AddArticle({ onClose }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [link, setLink] = useState('');
  const [categories, setCategories] = useState('1');

  async function saveArticle(e) {
    e.preventDefault();
    const { data, error } = await supabase.from('posts').insert([
      {
        link,
        title,
        content,
        category_id: categories,
      },
    ]);
  }

  return (
    <div>
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Добавить статью
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Для добавления статьи необходимо заполнить все поля
            </p>
          </div>
        </div>
        <div className="mt-5 md:col-span-2 md:mt-0">
          <form action="#" method="POST" onSubmit={saveArticle}>
            <div className="shadow sm:overflow-hidden sm:rounded-md">
              <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <label
                      htmlFor="company-website"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Указать ссылку на сторонний сайт
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                        http://
                      </span>
                      <input
                        type="url"
                        name="link"
                        id="company-website"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                        className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="www.example.com"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Название статьи
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="title"
                      id="company-website"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Укажите название статьи"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Краткое описание статьи
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="about"
                      name="content"
                      rows={3}
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Укажите описание статьи"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Выбрать категорию
                </label>{' '}
                <select
                  value={categories}
                  onChange={(e) => setCategories(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  {' '}
                  <option value="1">Насущные проблемы программиста</option>{' '}
                  <option value="2">Здоровье программиста</option>{' '}
                  <option value="3">Спорт для программиста</option>{' '}
                  <option value="4">Программист и семья</option>{' '}
                  <option value="5">Отдых программиста</option>{' '}
                  <option value="6">Хобби программиста</option>{' '}
                  <option value="7">
                    Информация о сторонних центрах психологической помощи
                  </option>{' '}
                </select>
                <button
                onClick={onClose}
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Сохранить
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
