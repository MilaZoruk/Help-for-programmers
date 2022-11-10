import React, { useState } from 'react';
import style from'./Dance.module.css'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Dance = () => {

  const musicTracks = [
    {
      name: "I Like to move it",
      src: "https://zvukipro.com/uploads/files/2022-08/1661517317_i-like-to-move-it-origina.mp3"
    },
    {
      name: "Tokyo Drift",
      src:  "https://zvukipro.com/uploads/files/2022-08/1661775811_tokyo-drift-teriyaki-boyz-music.mp3"
    },
    {
      name: "Game music",
      src: "https://zvukipro.com/uploads/files/2022-01/1641668307_jjd-nyan-cat.mp3"
    },]
    const [trackIndex, setTrackIndex] = useState(0);

    const handleClickPrevious = () => {
      setTrackIndex((currentTrack) =>
        currentTrack === 0 ? musicTracks.length - 1 : currentTrack - 1
      );
    };
  
    const handleClickNext = () => {
      setTrackIndex((currentTrack) =>
        currentTrack < musicTracks.length - 1 ? currentTrack + 1 : 0
      );
    };
    return (
      <>
          <div className={style.body}>
            <div className={style.player}>
            <AudioPlayer
            className={style.color}
            autoPlay
            preload="auto"
            src={musicTracks[trackIndex].src}
            onPlay={e => console.log("onPlay")}
            showSkipControls={true}
            showJumpControls={false}
            muted={true}
            header={`Просто нажми Play и двигайся с нашим прога-мэном: ${musicTracks[trackIndex].name}`}
            onClickPrevious={handleClickPrevious}
            onClickNext={handleClickNext}
            onEnded={handleClickNext}
            /></div>
            <div className={style.back}></div>
            <img src="https://i.imgur.com/pXALzSc.gif" className={style.wootdance} width="328" height="272" alt="8-bit dancing Karateka guy">
            </img>
          </div>
    </>
    );
};

export default Dance;