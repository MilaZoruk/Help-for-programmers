/* eslint-disable react/prop-types */
import { React, useState } from 'react';
import { useSelector } from 'react-redux';
import { supabase } from '../../supabase/supabaseClient';

export default function ResetPasswordModal({ onClose }) {
  const { userInfo } = useSelector((state) => state.user);

  const [loading, setLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendRecoveryEmailHandler = async () => {
    setLoading(true);
    const { data, error } = await supabase.auth.resetPasswordForEmail(
      userInfo.email,
      { redirectTo: `http://localhost:3000/reset-password/${userInfo.id}` }
    );
    if (data) {
      setLoading(false);
      setIsSent(true);
    }
  };

  return (
    <div className="overflow-y-auto overflow-x-hidden bg-gray-900 bg-opacity-60 fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
      <div className="mx-auto relative p-4 w-full max-w-md h-full md:h-auto top-1/2 -translate-y-1/2">
        <div className="relative bg-white rounded-lg shadow">
          <button
            onClick={onClose}
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
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
          <div className="py-6 px-6 lg:px-8">
            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
              Восстановление пароля
            </h3>
            <p className="mb-4">
              Мы отправим письмо по адресу ниже для восстановления пароля.
            </p>
            <p className="font-bold mb-4">{userInfo.email}</p>
            {isSent ? (
              <p>Письмо успешно отправлено, пожалуйста, проверьте свой почтовый ящик.</p>
            ) : (
              <button
                onClick={sendRecoveryEmailHandler}
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {!loading ? 'Отправить письмо' : 'Отправляем...'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
