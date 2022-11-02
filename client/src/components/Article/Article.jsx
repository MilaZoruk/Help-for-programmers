import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getOnePost from '../../api/articles';

import {
  BoltIcon,
  ChatBubbleBottomCenterTextIcon,
  GlobeAltIcon,
  ScaleIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Твой код никого не интересует',
    description: ' И это правда',
    icon: GlobeAltIcon,
  },
  {
    name: 'Следующая статья',
    description: 'бла бла',
    icon: ScaleIcon,
  },
  {
    name: 'Название статьи',
    description: 'Тру-ля ля',
    icon: BoltIcon,
  },
  {
    name: 'Еще одна',
    description: 'Очень много текста',
    icon: ChatBubbleBottomCenterTextIcon,
  },
];

export default function Example() {
  const { id } = useParams();

  useEffect(() => {
    getOnePost(id).then((posts) => {
      console.log(posts);
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
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
