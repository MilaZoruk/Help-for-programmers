import React from 'react';
import { useSelector } from 'react-redux';

export default function Home() {
  const { userInfo } = useSelector((state) => state.user);
  return <div>{userInfo ? `Hello, ${userInfo.user_name}!` : 'Welcome!'}</div>;
}
