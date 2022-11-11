import React from "react";
import PixelCat from "./pixel-cat.gif";
import "./Greeting.css"

export default function Greeting() {
  return (
    <section className="mx-auto my-6">
      <div className="flex flex-col justify-center items-center max-w-7xl">
        <img src={PixelCat} alt="Pixel cat" className="h-24" />
        <h2 className="lg:text-2xl text-xl text-center mb-4">Добро пожаловать на IT Helper</h2>
        <p className="lg:text-4xl text-2xl text-center font-bold mb-4">
          Устал? Перегорел? Хочется отвлечься? Тогда ты по адресу!
        </p>
        <p className="lg:text-xl text-base text-center text-gray-600 mb-4">У нас ты сможешь: послушать музыку, посетить онлайн-галерею искусств, почитать тематические статьи, связанные с повседневной жизнедеятельностью разработчиков, пообщаться с единомышленниками в чате, расположенном в профиле, и получить помощь по интересующему вопросу. Все это в одном месте!</p>
        <p className="lg:text-xl text-lg text-center text-gray-900">Попробуй начать с магического шара. Может быть у него есть что-то подходящее для тебя?</p>
      </div>
    </section>
  );
}
