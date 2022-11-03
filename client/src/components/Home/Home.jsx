import React from 'react';
import { useSelector } from 'react-redux';
import MagicSphere from '../MagisSphere/MagicSphere';

export default function Home() {
  const { userInfo } = useSelector((state) => state.user);
  return (
    <div>
      <h2>{userInfo ? `Hello, ${userInfo.user_name}!` : 'Welcome!'}</h2>
      <MagicSphere />
    </div>
  );
}
