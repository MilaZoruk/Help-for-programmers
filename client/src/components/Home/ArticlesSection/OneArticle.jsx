import React from "react";

export default function OneArticle({ article }) {
  return (
    <article className="pb-6 text-center">
      <h2 className="my-4 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
        <a href={article.link} target="_blank" rel="noreferrer">
          {article.title}
        </a>
      </h2>
      <div className="flex justify-center items-center space-x-4 text-gray-500 sm:space-x-6">
        <span>{article.created_at.split("T")[0]}</span>
      </div>
    </article>
  );
}
