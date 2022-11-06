import React from 'react';
import BackRoom from '../BackRoom/BackRoom';
import MenuRoom from '../MenuRoom/MenuRoom';
import Radio from '../Radio/Radio';

export default function Room() {
  return (
    <>
      <Radio />
      <MenuRoom />
      <BackRoom />
    </>
  );
}
