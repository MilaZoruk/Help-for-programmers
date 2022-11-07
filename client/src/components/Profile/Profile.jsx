/* eslint-disable import/no-relative-packages */
import { useSelector } from "react-redux";
import { Transition } from "@headlessui/react";
import { React, useEffect, useState } from "react";
import { CometChat } from '@cometchat-pro/chat';
import { CometChatUI } from "../../cometchat-pro-react-ui-kit-master/CometChatWorkspace/src";
import AboutMe from "./AboutMe";
import EmergencyFormModal from "./EmergencyFormModal";
import { AUTH_KEY } from '../../constants/COMET_CHAT';

export default function Profile() {
  const { userInfo } = useSelector((state) => state.user);
  const [isModalShown, setIsModalShown] = useState(false);

  const closeModalHandler = () => setIsModalShown(false);

  useEffect(() => {
    CometChat.login(userInfo.id, AUTH_KEY).then(
      (user) => {
        console.log('Login Successful:', { user });
      },
      (error) => {
        console.log('Login failed with exception:', { error });
      }
    );
  }, [userInfo.id])

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
        <EmergencyFormModal onClose={closeModalHandler} />
      </Transition>

      <section className="flex flex-col justify-center items-center p-20 space-y-4">
        <h2 className="text-3xl text-center font-bold mb-4">
          Привет, ты находишься на странице своего личного профиля!
        </h2>
        <AboutMe />
        <div className="w-1/2 text-center space-y-4">
          <p className="text-xl">
            Здесь ты можешь пообщаться с другими пользователями в чате ниже,
            обсудить насущные темы, либо просто провести время в приятной
            компании единомышленников.
          </p>
        </div>
        <div className="bg-white" style={{ width: "800px", height: "800px" }}>
          <CometChatUI />
        </div>
      </section>
    </>
  );
}
