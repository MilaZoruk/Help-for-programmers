/* eslint-disable import/no-relative-packages */
import { Transition } from "@headlessui/react";
import { React, useState } from "react";
import { CometChatUI } from "../../cometchat-pro-react-ui-kit-master/CometChatWorkspace/src";
import AboutMe from "./AboutMe";
import EmergencyFormModal from "./EmergencyFormModal";

export default function Profile() {
  const [isModalShown, setIsModalShown] = useState(false);

  const closeModalHandler = () => setIsModalShown(false);

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
        <div style={{ width: "800px", height: "800px" }}>
          <CometChatUI />
        </div>
      </section>
    </>
  );
}
