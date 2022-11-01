import React from 'react';
import { useSelector } from 'react-redux';

export default function Home() {
  const { userInfo, loading } = useSelector((state) => state.user);
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>{userInfo ? `Hello, ${userInfo.user_name}!` : 'Welcome!'}</div>
      )}
    </div>
  );
}
