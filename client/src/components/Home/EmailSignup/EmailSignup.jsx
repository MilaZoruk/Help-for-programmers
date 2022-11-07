import React from "react";

export default function EmailSignup() {
  return (
    <section>
      <div className="pb-8 px-4 mx-auto max-w-screen-xl lg:px-6 ">
        <div className="mx-auto max-w-screen-md text-center">
          <h2 className="mb-4 text-md tracking-tight font-extrabold text-gray-900 dark:text-white">
            Тут можно подписаться на нашу новостную рассылку
          </h2>
          <p className="mb-6 font-light text-gray-500 md:text-md dark:text-gray-400">
            Мы постоянно растем и развиваемся. Если вас заинтересовал наш
            сервис, и вы хотите следить за изменениями и улучшениями, вы можете
            подписаться на нашу новостную рассылку. Никакого спама, обещаем 🤗
          </p>
          <form className="mx-auto max-w-screen-sm">
            <div className="flex items-center mb-3">
              <div className="relative mr-3 w-full">
                <label
                  for="member_email"
                  className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Email адрес
                </label>
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <input
                  className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="example@example.com"
                  type="email"
                  name="member[email]"
                  id="member_email"
                  required
                />
              </div>
                <button
                  type="submit"
                  className="text-white bg-gray-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
                >
                  Подписаться
                </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
