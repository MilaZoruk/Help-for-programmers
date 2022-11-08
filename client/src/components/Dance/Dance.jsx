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
            // src="https://hanzluo.s3-us-west-1.amazonaws.com/music/wuyuwuqing.mp3"
            src="https://zvukipro.com/uploads/files/2022-08/1661517317_i-like-to-move-it-origina.mp3"
            onPlay={e => console.log("onPlay")} />
            <div></div>
            <div className={style.floor}></div>
            <img src="https://i.imgur.com/pXALzSc.gif" className={style.wootdance} width="328" height="272" alt="8-bit dancing Karateka guy"></img>
    </>
    );
};

export default Dance;