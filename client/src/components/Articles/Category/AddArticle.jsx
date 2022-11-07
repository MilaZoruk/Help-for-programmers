/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-redundant-roles */
import { Modal } from "flowbite-react";
import React, { useState } from "react";
import { Store } from "react-notifications-component";

import { supabase } from "../../../supabase/supabaseClient";

export default function AddArticle({ isModalShown, onClose }) {
  const notification = {
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated animate__fadeIn"],
    animationOut: ["animate__animated animate__fadeOut"],
    dismiss: {
      duration: 5000,
      onScreen: true,
    },
  };

  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [link, setLink] = useState("");
  const [categories, setCategories] = useState("1");
  const [errorAdding, setErrorAdding] = useState(null);

  async function saveArticle(e) {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await supabase.from("posts").insert([
      {
        link,
        title,
        content,
        category_id: categories,
      },
    ]);

    if (error) {
      setLoading(false);
      setErrorAdding("Упс! Что-то пошло не так.");
      return;
    }

    setLoading(false);

    Store.addNotification({
      ...notification,
      title: "Успешно",
      message: "Статья успешно добавлена",
      type: "success",
    });

    onClose();
  }

  return (
    <Modal show={isModalShown} size="xl" popup onClose={onClose}>
      <Modal.Header />
      <Modal.Body>
        <form onSubmit={saveArticle}>
          <div className="shadow sm:overflow-hidden sm:rounded-md">
            <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
              <div>
                <div className="col-span-3 sm:col-span-2">
                  <label
                    htmlFor="website"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Ссылка на источник
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="url"
                      name="link"
                      id="website"
                      value={link}
                      onChange={(e) => setLink(e.target.value)}
                      required
                      className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="http://example.com"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="about"
                  className="block text-sm font-medium text-gray-700"
                >
                  Название
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="title"
                    id="company-website"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Как кодить без Stack Overflow?"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="about"
                  className="block text-sm font-medium text-gray-700"
                >
                  Краткое описание
                </label>
                <div className="mt-1">
                  <textarea
                    id="about"
                    name="content"
                    rows={3}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Самая интересная статья на свете..."
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="about"
                  className="block text-sm font-medium text-gray-700"
                >
                  Краткое описание
                </label>
                <select
                  value={categories}
                  onChange={(e) => setCategories(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  {" "}
                  <option value="1">Насущные проблемы программиста</option>{" "}
                  <option value="2">Здоровье программиста</option>{" "}
                  <option value="3">Спорт для программиста</option>{" "}
                  <option value="4">Программист и семья</option>{" "}
                  <option value="5">Отдых программиста</option>{" "}
                  <option value="6">Хобби программиста</option>{" "}
                  <option value="7">
                    Информация о сторонних центрах психологической помощи
                  </option>
                  <option value="8">Что почитать программисту?</option>
                  <option value="9">Мама-программист</option>
                </select>
              </div>
              {errorAdding && (
                <p className="text-red-500 text-lg italic mb-4">
                  {errorAdding}
                </p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="mt-8 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
              >
                { loading ? 'Добавляем...' : 'Добавить' }
              </button>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}
