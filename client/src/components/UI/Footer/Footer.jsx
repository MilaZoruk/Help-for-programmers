import React from "react";
import { Link } from "react-router-dom";
import ITHelpersLogo from "../itHelpersLogo.png";

export default function Footer() {
  return (
    <footer
      className="w-full p-4 md:p-8 lg:p-10 bg-gray-800"
      style={{ position: "relative" }}
    >
      <div className="mx-auto max-w-screen-xl text-center">
        <img
          src={ITHelpersLogo}
          alt="Brain Logo"
          className="mx-auto h-20 w-auto mb-4"
        />
        <ul className="flex flex-wrap justify-center items-center mb-6 text-white">
          <li>
            <Link to='' className="mr-4 hover:underline md:mr-6 ">
              Главная
            </Link>
          </li>
          <li>
            <Link to='/categories' className="mr-4 hover:underline md:mr-6">
              Статьи
            </Link>
          </li>
          <li>
            <Link to="/relaxroom" className="mr-4 hover:underline md:mr-6 ">
              Комната отдыха
            </Link>
            <Link to="/relaxroom" className="mr-4 hover:underline md:mr-6 ">
              Потанцуем?
            </Link>
          </li>
        </ul>
        <span className="text-sm sm:text-center text-gray-400">
          © 2022 IT Helpers™. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
