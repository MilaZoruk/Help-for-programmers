import React from 'react';
import ReactPlayer from 'react-player';
import BackRoom from '../BackRoom/BackRoom';
import MenuRoom from '../MenuRoom/MenuRoom';
import styles from './Room.module.css';

export default function Room() {
  return (
    <>
      <div className={styles.playerwrapper}>
          <ReactPlayer
          key=""
          className='react-player'
          url={['https://www.youtube.com/watch?v=i4ompLBhUg4', 'https://www.youtube.com/watch?v=HcugGy1Y3eI']}
          loop={true}
          controls={true}
          fs="1"
          onError={(e) => console.log('onError', e)}
          // playing={true}
          // origin = 'http://localhost:3000'
          // onPlay
        />
      </div>
      <MenuRoom />
      <BackRoom />
    </>
  );
}
