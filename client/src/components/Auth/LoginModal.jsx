/* eslint-disable react/prop-types */
import { React, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { supabase } from "../../supabase/supabaseClient";
import { Store } from "react-notifications-component";
import { loginUser } from "../../features/User/userActions";

import loginSobaka from "./loginSobaka.jpg";

export default function LoginModal({ onClose, onRedirect }) {
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

  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.user);

  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError(null);

    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    const userInput = {
      email,
      password,
    };

    const { data } = await supabase
      .from("users")
      .select()
      .match({ email })
      .single();

    if (!data) {
      setLoginError("Неверный email или пароль");
      setLoginLoading(false);
      return;
    }

    dispatch(loginUser(userInput));
    setLoginLoading(false);

    Store.addNotification({
      ...notification,
      title: "Успешно",
      message: "Успешный вход в систему",
      type: "success",
    });

    onClose();
  };

  const gitHubRegisterHandler = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });

    if (error) {
      Store.addNotification({
        ...notification,
        title: "Ошибка",
        message: "Не получилось войти через GitHub",
        type: "success",
      });
    }

    if (data) {
      Store.addNotification({
        ...notification,
        title: "Успешно",
        message: "Успешный вход через GitHub",
        type: "success",
      });
    }
  };

  return (
    <div className="overflow-y-auto overflow-x-hidden bg-gray-900 bg-opacity-60 fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
      <div className="mx-auto relative p-4 w-full max-w-6xl h-full md:h-auto top-1/2 -translate-y-1/2">
        <button
          onClick={onClose}
          type="button"
          className="absolute top-7 right-[165px] text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
        <div className="flex justify-center">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div
              className="w-full h-auto hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
              style={{ backgroundImage: `url(${loginSobaka})` }}
              alt="LoginSobaka"
            />

            <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 text-2xl text-center">
                Рады снова тебя видеть!
              </h3>
              <form
                onSubmit={formSubmitHandler}
                className="flex flex-col justify-center items-center px-8 pt-6 pb-8 mb-4 bg-white rounded"
              >
                <div className="w-3/4 mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    ref={emailInputRef}
                    id="email"
                    type="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="w-3/4 mb-4">
                  <div className="mb-4 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="password"
                    >
                      Пароль
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      ref={passwordInputRef}
                      id="password"
                      type="password"
                      placeholder="*****"
                      required
                    />
                  </div>
                </div>
                <div className="w-3/4 mb-6 text-center">
                  {loginError && (
                    <p className="text-red-500 text-lg italic mb-4">
                      {loginError}
                    </p>
                  )}
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline disabled:opacity-25"
                    type="submit"
                    disabled={loginLoading}
                  >
                    {loginLoading ? "Обрабатываем запрос" : "Войти"}
                  </button>
                </div>
                <div className="relative">
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-2 text-gray-500 font-bold">
                      Либо через GitHub
                    </span>
                  </div>
                </div>
                <div className="w-1/2 my-4">
                  <button
                    type="button"
                    onClick={gitHubRegisterHandler}
                    className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                  >
                    <span className="sr-only">Sign in with GitHub</span>
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                <div className="text-center">
                  <button
                    onClick={onRedirect}
                    type="button"
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  >
                    Нет аккаунта? Тогда сюда!
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
