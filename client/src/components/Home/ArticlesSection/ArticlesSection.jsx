import { React, useState, useEffect } from "react";
import { SyncLoader } from "react-spinners";
import { getPosts } from "../../../api/articles";
import OneArticle from "./OneArticle";

export default function ArticlesSection() {
  const override = {
    display: "block",
    marginTop: "30px",
    borderColor: "red",
  };

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts().then((data) => {
      setArticles(
        data
          .sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at))
          .slice(0, 5)
      );
      setLoading(false);
    });
  }, []);

  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Актуальное для вас
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Мы постоянно отслеживаем актуальную информацию из мира разработки,
            чтобы держать наших пользователей в курсе событий.
          </p>
        </div>
        <div className="mx-auto max-w-screen-sm divide-y divide-gray-400">
          {loading ? (
            <div className="text-center mx-auto my-8">
              <SyncLoader
                color="rgb(104, 117, 245)"
                loading={loading}
                cssOverride={override}
                size={10}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          ) : (
            <>
              {articles.map((article) => (
                <OneArticle key={article.id} article={article} />
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
