import React from 'react';
import BackRoom from '../BackRoom/BackRoom';
import Radio from '../Radio/Radio';
import styles from './Room.module.css';

export default function Room() {
  return (
    <>
      <Radio className={styles.radio} />
      <BackRoom />
    </>
  );
}
