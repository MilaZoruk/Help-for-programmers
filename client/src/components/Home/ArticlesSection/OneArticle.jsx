import React from "react";
import { categories } from '../../../constants/CATEGORIES';

export default function OneArticle({ article }) {
  const currentCategory = categories.find(category => category.id === article.category_id);

  return (
    <article className="pb-6 text-center">
      <h2 className="my-4 text-xl font-bold tracking-tight text-gray-900 hover:text-blue-500">
        <div className="flex flex-col justify-center items-center">
        <span className="w-2/5 text-gray-800 text-xs font-medium inline-flex justify-center items-center px-2.5 py-0.5 rounded mb-2">
          <svg
            className="mr-1 w-3 h-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
          </svg>
          {currentCategory.description}
        </span>
        <a href={article.link} target="_blank" rel="noreferrer">
          {article.title}
        </a>
        </div>
      </h2>
      <div className="flex justify-center items-center space-x-4 text-gray-500 sm:space-x-6">
        <span>{article.created_at.split("T")[0]}</span>
      </div>
    </article>
  );
}
