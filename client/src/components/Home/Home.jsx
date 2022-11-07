import React from 'react';
import Greeting from './Greeting/Greeting';
import MagicSphere from './MagisSphere/MagicSphere';
import ArticlesSection from './ArticlesSection/ArticlesSection';
import EmailSignup from './EmailSignup/EmailSignup';
// import PreArticles from './PreArticles/PreArticles';


export default function Home() {
  return (
    <div className='flex flex-col'>
      <Greeting/>
      <MagicSphere />
      <ArticlesSection />
      <EmailSignup />
      {/* <PreArticles /> */}
    </div>
  );
}
