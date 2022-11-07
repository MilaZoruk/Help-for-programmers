import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCategoryArticles } from "../../api/articles";
import styles from "./Category.module.css";
import { Transition } from "@headlessui/react";
import AddArticle from "./AddArticle";
import { useSelector } from "react-redux";
import { SyncLoader } from "react-spinners";

export default function Category() {
  const override = {
    display: "block",
    marginTop: "30px",
    borderColor: "red",
  };

  const { userInfo } = useSelector((state) => state.user); // если суперюзер и админ, есть кнопка добавления статьи

  const [isModalShown, setIsModalShown] = useState(false);

  const closeModalHandler = () => setIsModalShown(false);

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    getCategoryArticles(id).then((data) => {
      // console.log(data);
      setArticles(data);
      setLoading(false);
    });
  }, [id]);

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
        <AddArticle isModalShown={isModalShown} onClose={closeModalHandler} />
      </Transition>

      <>
        {loading ? (
          <SyncLoader
            color="rgb(104, 117, 245)"
            loading={loading}
            cssOverride={override}
            size={10}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <div className="bg-white py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="lg:text-center">
                <button
                  onClick={() => navigate(-1)}
                  className="w-1/5 mb-8 px-4 py-2 font-bold text-white bg-gray-800 rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Назад
                </button>
                <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                  Читатель, отдохни, перезагрузи мозги
                </p>
                <hr className="mt-8" />
              </div>

              {userInfo?.role === "superuser" || userInfo?.role === "admin" ? (
                <div className="flex justify-center items-center">
                  <button
                    onClick={() => setIsModalShown(true)}
                    className="w-1/5 mt-8 px-4 py-2 font-bold text-white bg-gray-800 rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Добавить статью
                  </button>
                </div>
              ) : null}

              <div className="mt-10">
                <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
                  {articles.map((article) => (
                    <div key={article.id} className="relative">
                      <dt>
                        <div className="absolute flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500 text-white" />
                        <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                          <dd>{article.title}</dd>
                        </p>
                      </dt>
                      <dd className="mt-2 ml-16 text-base text-gray-500">
                        {article.content}
                        <a
                          href={article.link}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-2 ml-16 text-base text-blue-700"
                        >
                          {" "}
                          ...читать далее
                        </a>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        )}
      </>
    </>
  );
}
