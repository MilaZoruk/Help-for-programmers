import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../supabase/supabaseClient';

export default function ResetPassword() {
  const navigate = useNavigate();
  const [pass, setPass] = useState('');
  const [confirmedPass, setConfirmedPass] = useState('');
  const [resetPassEror, setResetPassError] = useState(null);
  const [resettingPass, setResettingPass] = useState(false);

  const resetPasswordHandler = async (e) => {
    e.preventDefault();
    if (pass === confirmedPass) {
      setResettingPass(true);
      const { data, error } = await supabase.auth.updateUser({
        password: pass,
      });
      if (error) setResetPassError(error.message);
      if (data) navigate('/');
    } else {
      setResettingPass(false);
      setResetPassError('Passwords do not match');
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
        <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Change Password
        </h2>
        <form
          className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
          onSubmit={resetPasswordHandler}
        >
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              New Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              onChange={(e) => setPass(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="confirm-password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Confirm password
            </label>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="••••••••"
              onChange={(e) => setConfirmedPass(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          {resetPassEror && <p>{resetPassEror}</p>}
          <button
            type="submit"
            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            {resettingPass ? 'Updating...' : 'Reset passwod'}
          </button>
        </form>
      </div>
    </div>
  );
}
