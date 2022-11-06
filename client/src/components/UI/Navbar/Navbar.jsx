import { Fragment, useState } from 'react';
import { NavLink as Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { logoutUser } from '../../../features/User/userActions';
import RegisterModal from '../../Auth/RegisterModal';
import LoginModal from '../../Auth/LoginModal';

import styles from './Navbar.module.css';

export default function Navbar() {
  const navigate = useNavigate('/');
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);

  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const closeRegisterModalHandler = () => {
    setIsRegisterModalOpen(false);
  };

  const closeLoginModalHandler = () => {
    setIsLoginModalOpen(false);
  };

  const closeRegisterOpenLoginModalHandler = () => {
    setIsRegisterModalOpen(false);
    setIsLoginModalOpen(true);
  };

  const closeLoginOpenRegisterModalHandler = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(true);
  };

  const logoutHandler = () => {
    dispatch(logoutUser());
    navigate('/');
  };

  return (
    <>
      {isRegisterModalOpen && (
        <RegisterModal
          onClose={closeRegisterModalHandler}
          onRedirect={closeRegisterOpenLoginModalHandler}
        />
      )}
      {isLoginModalOpen && (
        <LoginModal
          onClose={closeLoginModalHandler}
          onRedirect={closeLoginOpenRegisterModalHandler}
        />
      )}

      <header className={styles.header}>
        <Disclosure as="nav" className="bg-gray-800 w-full">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-9xl px-6 sm:px-6 lg:px-16 py-2">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="block h-8 w-auto lg:hidden"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                        alt="Your Company"
                      />
                      <img
                        className="hidden h-8 w-auto lg:block"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                        alt="Your Company"
                      />
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                      <div className="flex space-x-4">
                        {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                        <Link
                          to="/"
                          className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                        >
                          Главная
                        </Link>
                        <Link
                          to="/categories"
                          className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                          Статьи
                        </Link>
                        <Link
                         to="/relaxroom"
                          className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                          Комната отдыха
                        </Link>
                        <a
                          href="/calendar"
                          className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                          Calendar
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex items-center">
                      {userInfo !== null ? (
                        <Menu as="div" className="relative ml-3">
                          <div>
                            <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                              <span className="sr-only">Open user menu</span>
                              <img
                                className="h-12 w-12 rounded-full"
                                src={userInfo?.avatar_url}
                                alt="User avatar"
                              />
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <Menu.Item>
                                <Link
                                  to="/profile"
                                  className="block px-4 py-2 text-sm text-gray-700"
                                >
                                  Профиль
                                </Link>
                              </Menu.Item>
                              {userInfo.role === 'superuser' ? (
                                <Menu.Item>
                                  <Link
                                    to="/admin-dashboard"
                                    className="block px-4 py-2 text-sm text-gray-700"
                                  >
                                    Панель управления
                                  </Link>
                                </Menu.Item>
                              ) : null}
                              <Menu.Item>
                                <Link
                                  to="/profile-settings"
                                  className="block px-4 py-2 text-sm text-gray-700"
                                >
                                  Настройки профиля
                                </Link>
                              </Menu.Item>
                              <Menu.Item>
                                <button
                                  type="button"
                                  onClick={logoutHandler}
                                  className="block px-4 py-2 text-sm text-gray-700"
                                >
                                  Выход
                                </button>
                              </Menu.Item>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      ) : (
                        <>
                          <Disclosure.Button
                            as="button"
                            onClick={() => setIsLoginModalOpen(true)}
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                          >
                            Login
                          </Disclosure.Button>
                          <Disclosure.Button
                            as="button"
                            onClick={() => setIsRegisterModalOpen(true)}
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                          >
                            Register
                          </Disclosure.Button>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="-mr-2 flex sm:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                  {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                  >
                    Dashboard
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Team
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Projects
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Calendar
                  </Disclosure.Button>
                </div>
                {userInfo ? (
                  <div className="border-t border-gray-700 pt-4 pb-3">
                    <div className="flex items-center px-5">
                      <div className="flex-shrink-0">
                        <img
                          className="h-10 w-10 bg-white rounded-full"
                          src={userInfo?.avatar_url}
                          alt="User avatar"
                        />
                      </div>
                      <div className="ml-3">
                        <div className="text-base font-medium text-white">
                          {`${userInfo.first_name} ${userInfo.last_name}`}
                        </div>
                        <div className="text-sm font-medium text-gray-400">
                          {userInfo.email}
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 space-y-1 px-2">
                      <Disclosure.Button
                        as="a"
                        href="#"
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        Your Profile
                      </Disclosure.Button>
                      {userInfo.role === 'superuser' ? (
                        <Disclosure.Button
                          as="a"
                          href="#"
                          className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                        >
                          Admin
                        </Disclosure.Button>
                      ) : null}

                      <Link to="/profile-settings">
                        <Disclosure.Button
                          as="button"
                          className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                        >
                          Settings
                        </Disclosure.Button>
                      </Link>
                      <Disclosure.Button
                        as="button"
                        onClick={logoutHandler}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        Sign out
                      </Disclosure.Button>
                    </div>
                  </div>
                ) : (
                  <>
                    <Disclosure.Button
                      as="button"
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Login
                    </Disclosure.Button>
                    <Disclosure.Button
                      as="button"
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Register
                    </Disclosure.Button>
                  </>
                )}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </header>
    </>
  );
}
