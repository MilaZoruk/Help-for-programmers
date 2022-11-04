import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import getPosts from '../../api/articles';

const callouts = [
  {
    id:1,
    name: 'Статьи',
    description: 'Насущные проблемы программиста',
    imageSrc:
      'https://media.proglib.io/posts/2020/09/28/34e6b380589fb8c2b6cff6b2409b9f07.png',
    imageAlt:
      'Сегодня прекрасный день!',
  },
  {
    id:2,
    name: 'Статьи',
    description: 'Здоровье программиста',
    imageSrc:
      'https://img.freepik.com/free-vector/ophthalmologists-check-patients-vision_107791-13471.jpg?t=st=1667387480~exp=1667388080~hmac=132e36705ee965c9bacf99dbad8230a6e96f1c754b9387a143eef066a3699580',
    imageAlt:
      'Сегодня прекрасный день!',
  },
  {
    id:3,
    name: 'Статьи',
    description: 'Спорт для программиста',
    imageSrc:
      'https://img.freepik.com/free-vector/people-run-in-row-marathon-jogging-running_107791-15368.jpg?w=996&t=st=1667387349~exp=1667387949~hmac=fe1580b3ce841aa233c18fa54cae790dd5a8a7244714bde6b7c4363e747f535b',
    imageAlt: 'Сегодня прекрасный день!',
  },
  {
    id:4,
    name: 'Статьи',
    description: 'Программист и семья',
    imageSrc:
      'https://img.freepik.com/free-vector/big-family-meeting_74855-5220.jpg?w=2000',
    imageAlt: 'Сегодня прекрасный день!',
  },
  {
    id:5,
    name: 'Статьи',
    description: 'Отдых программиста',
    imageSrc:
      'https://img.freepik.com/premium-vector/couple-of-campers-semi-flat-color-vector-characters-posing-figures-full-body-people-on-white-hiking-together-isolated-modern-cartoon-style-illustration-for-graphic-design-and-animation_151150-6293.jpg',
    imageAlt: 'Сегодня прекрасный день!',
  },
  {
    id:6,
    name: 'Статьи',
    description: 'Хобби программиста',
    imageSrc:
      'https://img.freepik.com/free-vector/characters-work-in-summer-garden-set-gardening_107791-14893.jpg?w=996&t=st=1667387638~exp=1667388238~hmac=95582ce3573de1ef13ac1d657fad2287a5973cc1020145caefdb0c84066f16f6',
    imageAlt: 'Сегодня прекрасный день!',
  },
  {
    id:7,
    name: 'Полезные ссылки',
    description: 'Информация о сторонних центрах психологической помощи',
    imageSrc:
      'https://st2.depositphotos.com/19167412/49057/v/600/depositphotos_490573710-stock-illustration-psychological-help-burnout-syndrome-emaciated.jpg',
    imageAlt: 'Сегодня прекрасный день!',
  },
];

export default function Categories() {

  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Вы сделали правильный выбор, перейдя на этот сайт!</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.id} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <Link to={`/categories/${callout.id}`}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </Link>
                </h3>
                <p className="text-base font-semibold text-gray-900">
                  {callout.description}
                </p>
                <br /><br />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
