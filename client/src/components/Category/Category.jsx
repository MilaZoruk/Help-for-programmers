import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  BoltIcon,
  ChatBubbleBottomCenterTextIcon,
  GlobeAltIcon,
  ScaleIcon,
} from '@heroicons/react/24/outline';
import { getCategoryArticles } from '../../api/articles';
import styles from './Category.module.css'
import { Transition } from '@headlessui/react';
import AddArticle from './AddArticle';

export default function Category() {

  const [isModalShown, setIsModalShown] = useState(false);

  const closeModalHandler = () => setIsModalShown(false); 
  
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  const { id } = useParams();

  useEffect(() => {
    getCategoryArticles(id).then((data) => {
      // console.log(data);
      setArticles(data);
      setLoading(false)
    });
  }, []);

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
        <AddArticle onClose={closeModalHandler} />
      </Transition>
    
     <>
    {loading ?
     (<h1>Данные загружаюся!</h1>)
     :
     (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className={styles.backNavigate}>
              <button onClick={()=>navigate(-1)}
                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Назад
              </button>
          </div>
          <div className={styles.modalWindow}>
              <button onClick={() => setIsModalShown(true)}
                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Добавить статью
              </button>
          </div>
        <div className="lg:text-center">
          {/* <h2 className="text-lg font-semibold text-indigo-600">
            Должно подтягиваться название темы
          </h2> */}
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            Читатель, отдохни, перезагрузи мозги
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Здесь статьи по конктерной тематике ...
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {articles.map((article) => (
              <div key={article.id} className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                    {/* <article.icon className="h-6 w-6" aria-hidden="true" /> */}
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                    <dd>{article.title}</dd>
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {article.content}
                  <a href={article.link} target="_blank" rel="noreferrer" className="mt-2 ml-16 text-base text-blue-700">
                  {/* <a className={styles.linkMore} href={article.link} target="_blank" rel="noreferrer"> */}
                    {' '}
                    ...читать далее
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
     )}</> 
  </>
  );
}
