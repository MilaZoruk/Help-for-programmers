import React from "react";
import PixelCat from "./pixel-cat.gif";

export default function Greeting() {
  return (
    <section className="mx-auto my-6">
      <div className="flex flex-col justify-center items-center max-w-7xl">
        <img src={PixelCat} alt="Pixel cat" className="h-24" />
        <h2 className="text-2xl mb-4">Добро пожаловать на IT Helper</h2>
        <p className="text-4xl text-center font-bold mb-4">
          Устал? Перегорел? Хочется отвлечься? Тогда ты по адресу!
        </p>
        <p className="text-xl text-center text-gray-600 mb-4">У нас ты сможешь: послушать музыку, посетить онлайн-галерею искусств, почитать тематические статьи, связанные с повседневной жизнедеятельностью разработчиков, пообщаться с единомышленниками в чате, расположенном в профиле, и получить помощь по интересующему вопросу. Все это в одном месте!</p>
        <p className="text-xl text-center text-gray-900">Попробуй начать с магического шара. Может быть у него есть что-то подходящее для тебя?</p>
      </div>
    </section>
  );
}
