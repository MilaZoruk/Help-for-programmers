import React from 'react';
import style from'./Dance.module.css'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Dance = () => {
    return (
  <><div className={style.body}></div>
  
            <AudioPlayer
            className={style.player}
            autoPlay
            src='Dance/SingleLadies.mp3'
            onPlay={e => console.log("onPlay")} />
            <div></div>
            <div className={style.floor}></div>
            <img src="https://i.imgur.com/pXALzSc.gif" className={style.wootdance} width="328" height="272" alt="8-bit dancing Karateka guy"></img>
    </>
    );
};

export default Dance;