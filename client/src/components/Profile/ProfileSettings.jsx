import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Transition } from "@headlessui/react";
import { Store } from "react-notifications-component";
import {
  uploadNewAvatar,
  updateUserInfo,
} from "../../features/User/userActions";
import ResetPasswordModal from "./ResetPasswordModal";

export default function ProfileSettings() {
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
  const { userInfo, loading, error } = useSelector((state) => state.user);

  const [isModalShown, setIsModalShown] = useState(false);

  const closeModalHandler = () => setIsModalShown(false);

  const [firstName, setFirstName] = useState(userInfo.first_name);
  const [lastName, setLastName] = useState(userInfo.last_name);
  const [userName, setUserName] = useState(userInfo.user_name);
  const [age, setAge] = useState(userInfo.age);
  const [bio, setBio] = useState(userInfo.bio);
  const [email, setEmail] = useState(userInfo.email);
  const [phoneNumber, setPhoneNumber] = useState(userInfo.phone_number);

  const avatarUploadingHandler = (e) => {
    const userAvatar = e.target.files[0];

    if (!userAvatar.type.includes('image')) {
      Store.addNotification({
        ...notification,
        title: "Ошибка",
        message: "Неверный формат файла",
        type: "danger",
      });
      return;
    }

    dispatch(uploadNewAvatar(userAvatar));

    if (error) {
      Store.addNotification({
        ...notification,
        title: "Ошибка",
        message: "Упс, что-то пошло не так",
        type: "danger",
      });
    }

    if (!loading && !error) {
      Store.addNotification({
        ...notification,
        title: "Успешно",
        message: "Аватар был успешно обновлен",
        type: "success",
      });
    }
  };

  const profileSubmitHandler = (e) => {
    e.preventDefault();

    const userInputData = {
      first_name: firstName,
      last_name: lastName,
      user_name: userName,
      age,
      bio,
      email,
      phone_number: phoneNumber,
    };

    dispatch(updateUserInfo(userInputData));

    if (error) {
      Store.addNotification({
        ...notification,
        title: "Ошибка",
        message: "Упс, что-то пошло не так",
        type: "danger",
      });
    }

    if (!loading && !error) {
      Store.addNotification({
        ...notification,
        title: "Успешно",
        message: "Твой профиль успешно обновлен",
        type: "success",
      });
    }
  };

  return (
    <>
      <Transition
        show={isModalShown}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <ResetPasswordModal onClose={closeModalHandler} />
      </Transition>

      <div className="flex h-full">
        <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
          <main className="flex flex-1 overflow-hidden">
            <div className="flex flex-1 flex-col overflow-y-auto xl:overflow-hidden">
              <div className="flex flex-1 xl:overflow-hidden">
                <div className="flex-1 xl:overflow-y-auto">
                  <div className="mx-auto max-w-3xl py-10 px-4 sm:px-6 lg:py-12 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-blue-gray-900">
                      Настройки профиля
                    </h1>

                    <form
                      onSubmit={profileSubmitHandler}
                      className="divide-y-blue-gray-200 mt-6 space-y-8 divide-y"
                    >
                      <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
                        <div className="sm:col-span-6">
                          <p className="mt-1 text-sm text-blue-gray-500">
                            Здесь ты можешь изменить или добавить информацию о
                            себе.
                          </p>
                        </div>

                        <div className="sm:col-span-3">
                          <label
                            htmlFor="first-name"
                            className="block text-sm font-medium text-blue-gray-900"
                          >
                            Имя
                          </label>
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            onChange={(e) => setFirstName(e.target.value)}
                            value={firstName}
                            autoComplete="given-name"
                            className="mt-1 block w-full rounded-md border-blue-gray-300 text-blue-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                          />
                        </div>

                        <div className="sm:col-span-3">
                          <label
                            htmlFor="last-name"
                            className="block text-sm font-medium text-blue-gray-900"
                          >
                            Фамилия
                          </label>
                          <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            onChange={(e) => setLastName(e.target.value)}
                            value={lastName}
                            autoComplete="family-name"
                            className="mt-1 block w-full rounded-md border-blue-gray-300 text-blue-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                          />
                        </div>

                        <div className="sm:col-span-3">
                          <label
                            htmlFor="username"
                            className="block text-sm font-medium text-blue-gray-900"
                          >
                            Имя пользователя
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm">
                            <input
                              type="text"
                              name="username"
                              id="username"
                              onChange={(e) => setUserName(e.target.value)}
                              value={userName}
                              autoComplete="username"
                              className="mt-1 block w-full rounded-md border-blue-gray-300 text-blue-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <label
                            htmlFor="age"
                            className="block text-sm font-medium text-blue-gray-900"
                          >
                            Возраст
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm">
                            <input
                              type="number"
                              name="age"
                              id="age"
                              onChange={(e) => setAge(e.target.value)}
                              value={age}
                              className="mt-1 block w-full rounded-md border-blue-gray-300 text-blue-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-6">
                          <label
                            htmlFor="photo"
                            className="block text-sm font-medium text-blue-gray-900"
                          >
                            Аватар
                          </label>
                          <div className="mt-1 flex items-center">
                            <img
                              className="inline-block h-20 w-20 rounded-full"
                              src={userInfo.avatar_url}
                              alt=""
                            />
                            <div className="ml-4 flex">
                              <div className="relative flex cursor-pointer items-center rounded-md border border-blue-gray-300 bg-white py-2 px-3 shadow-sm focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-blue-gray-50 hover:bg-blue-gray-50">
                                <label
                                  htmlFor="user-photo"
                                  className="pointer-events-none relative text-sm font-medium text-blue-gray-900"
                                >
                                  <span>
                                    {loading ? "Изменяем" : "Изменить"}
                                  </span>
                                  <span className="sr-only"> user photo</span>
                                </label>
                                <input
                                  id="user-photo"
                                  name="user-photo"
                                  type="file"
                                  accept="image/*"
                                  onChange={avatarUploadingHandler}
                                  disabled={loading}
                                  className="absolute inset-0 h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="sm:col-span-6">
                          <label
                            htmlFor="description"
                            className="block text-sm font-medium text-blue-gray-900"
                          >
                            Расскажи о себе
                          </label>
                          <div className="mt-1">
                            <textarea
                              id="description"
                              name="description"
                              onChange={(e) => setBio(e.target.value)}
                              value={bio}
                              rows={4}
                              className="block w-full rounded-md border-blue-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                            />
                          </div>
                          <p className="mt-3 text-sm text-blue-gray-500">
                            Краткое описание твоего профиля.
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-y-6 pt-8 sm:grid-cols-6 sm:gap-x-6">
                        <div className="sm:col-span-6">
                          <h2 className="text-xl font-medium text-blue-gray-900">
                            Личная информация
                          </h2>
                        </div>

                        <div className="sm:col-span-3">
                          <label
                            htmlFor="email-address"
                            className="block text-sm font-medium text-blue-gray-900"
                          >
                            Email адрес
                          </label>
                          <input
                            type="email"
                            name="email-address"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            id="email-address"
                            autoComplete="email"
                            required
                            className="mt-1 block w-full rounded-md border-blue-gray-300 text-blue-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                          />
                        </div>

                        <div className="sm:col-span-3">
                          <label
                            htmlFor="phone-number"
                            className="block text-sm font-medium text-blue-gray-900"
                          >
                            Номер телефона
                          </label>
                          <input
                            type="tel"
                            name="phone-number"
                            id="phone-number"
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            value={phoneNumber}
                            pattern="^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$"
                            className="mt-1 block w-full rounded-md border-blue-gray-300 text-blue-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                          />
                        </div>

                        <p className="text-sm text-blue-gray-500 sm:col-span-6">
                          Этот аккаунт был создан{" "}
                          <time>{userInfo.created_at.split("T")[0]}</time>.
                        </p>
                      </div>

                      <div className="flex justify-end pt-8">
                        <button
                          onClick={() => setIsModalShown(true)}
                          type="button"
                          className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-gray-800 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                          Восстановить пароль
                        </button>
                        <button
                          type="submit"
                          disabled={loading}
                          className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-gray-800 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-25"
                        >
                          {loading ? "Сохраняем..." : "Сохранить"}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
