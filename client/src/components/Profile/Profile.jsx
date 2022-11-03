import { Transition } from '@headlessui/react';
import { React, useState } from 'react';
import AboutMe from './AboutMe';
import EmergencyFormModal from './EmergencyFormModal';

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
          Yo, this is your profile page.
        </h2>
        <div className="text-center space-y-4">
          <p className="text-xl">
            Yeah, we know you are expecting to see something more useful than
            this...Buuut, to be honest, we don't know yet what to put here.
          </p>
          <p className="text-xl">
            Actually...there is something you can do here. Down below this text
            you can find{' '}
            <span className="text-red-600 font-bold">the red button</span>.
          </p>
          <p className="text-xl">
            Just click on it, fill in the form, tell us everything that bothers
            you too much and we will contact you ASAP. We promise. Thank you.
          </p>
        </div>
        <button
          onClick={() => setIsModalShown(true)}
          type="button"
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
        >
          Click me!
        </button>
        <AboutMe />
      </section>
    </>
  );
}
