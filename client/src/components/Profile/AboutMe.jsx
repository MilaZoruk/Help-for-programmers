import React from 'react';
import { useSelector } from 'react-redux';

export default function AboutMe() {
  const { userInfo } = useSelector((state) => state.user);

  return (
    <div className="flex items-center justify-center px-5 py-5">
      <div
        className="rounded-lg shadow-xl bg-gray-900 text-white"
        style={{ width: 450 }}
      >
        <div className="border-b border-gray-800 px-8 py-3">
          <div className="inline-block w-3 h-3 mr-2 rounded-full bg-red-500" />
          <div className="inline-block w-3 h-3 mr-2 rounded-full bg-yellow-300" />
          <div className="inline-block w-3 h-3 mr-2 rounded-full bg-green-400" />
        </div>
        <div className="px-8 py-6">
          <p>
            <em className="text-blue-400">const</em>{' '}
            <span className="text-green-400">aboutMe</span>{' '}
            <span className="text-pink-500">=</span>{' '}
            <em className="text-blue-400">function</em>() &#123;
          </p>
          <p>
            &nbsp;&nbsp;<span className="text-pink-500">return</span> &#123;
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;name:{' '}
            <span className="text-yellow-300">
              '{`${userInfo.first_name} ${userInfo.last_name}`}'
            </span>
            ,
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;age:{' '}
            <span className="text-yellow-300">'{userInfo.age}'</span>,
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;bio:{' '}
            <span className="text-yellow-300">'{userInfo.bio}'</span>,
          </p>
          <p>&nbsp;&nbsp;&#125;</p>
          <p>&#125;</p>
        </div>
      </div>
    </div>
  );
}
