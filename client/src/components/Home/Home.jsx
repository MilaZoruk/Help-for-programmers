/* eslint-disable */
import React from 'react';
import { useSelector } from 'react-redux';
import Greeting from '../Greeting/Greeting';
import MagicSphere from '../MagisSphere/MagicSphere';
import PreArticles from '../PreArticles/PreArticles';
import styles from './Home.module.css';


export default function Home() {
  const { userInfo } = useSelector((state) => state.user);
  return (
    <div className={styles.home}>
      <h2>{userInfo ? `Hello, ${userInfo.user_name}!` : 'Welcome!'}</h2>
      <Greeting/>
      <MagicSphere />
      <PreArticles />
    </div>
  );
}
