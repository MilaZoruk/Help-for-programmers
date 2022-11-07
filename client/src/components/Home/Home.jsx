import React from 'react';
import Greeting from '../Greeting/Greeting';
import MagicSphere from '../MagisSphere/MagicSphere';
import PreArticles from '../PreArticles/PreArticles';


export default function Home() {
  return (
    <div className='flex flex-col'>
      <Greeting/>
      <MagicSphere />
      <PreArticles />
    </div>
  );
}
