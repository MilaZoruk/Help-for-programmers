import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  BoltIcon,
  ChatBubbleBottomCenterTextIcon,
  GlobeAltIcon,
  ScaleIcon,
} from '@heroicons/react/24/outline';
import getCategoryArticles from '../../api/articles';

export default function Category() {
  const [articles, setArticles] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getCategoryArticles(id).then((data) => {
      console.log(data);
      setArticles(data);
    });
  }, [id]);

  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-lg font-semibold text-indigo-600">
            Должно подтягиваться название темы
          </h2>
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            Читатель, отдохни, перезагрузи мозги
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Здесь статьи по конктерной тематике ... блаблаблала
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
                  <a href={article.link} target="_blank" rel="noreferrer">
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
  );
}
