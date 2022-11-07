/* eslint-disable */
import React, { useEffect, useState } from "react";
import { forwardRef } from "react";
import styles from "./PreArticles.module.css";
import { getPosts } from "../../api/articles";
import { SyncLoader } from "react-spinners";

const blockAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.1,
    },
  }),
};

function PreArticles() {
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
          .slice(0, 4)
      );
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        <div className="mx-auto my-8">
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
        <div
          initial="hidden"
          whileInView="visible"
          // viewport={{ amount: 0.2 }}
          className={styles.preArticles}
        >
          {articles.map((el, index) => (
            <Item
              custom={index + 1}
              variants={blockAnimation}
              data={el}
              key={el.id}
            />
          ))}
        </div>
      )}
    </>
  );
}

const Item = forwardRef(({ data }, ref) => {
  const sliced = data.content.slice(0, 90 - data.title.length);
  return (
    <div ref={ref}>
      <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-1xl font-semibold tracking-tight text-gray-600 dark:text-white">
          {data.title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {sliced}
          {"...."}
        </p>
        <a
          href={data.link}
          target="_blank"
          referrerPolicy="no-referrer"
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Читать
          <svg
            aria-hidden="true"
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
});

// const MotionItem = motion(Item);
export default PreArticles;
