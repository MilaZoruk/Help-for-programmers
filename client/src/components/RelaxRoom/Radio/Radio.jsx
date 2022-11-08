/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from "react";
import { RadioBrowserApi } from "radio-browser-api";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import defaultImage from "./icon-radio.png";
import styles from "./Radio.module.css";
import { SyncLoader } from "react-spinners";

export default function Radio() {
  const override = {
    display: "block",
    marginTop: "30px",
    borderColor: "red",
  };

  const [stations, setStations] = useState();
  const [stationFilter, setStationFilter] = useState('hit');
  const [loadingStations, setLoadingStations] = useState(true);

  const setupApi = async (stf) => {
    const api = new RadioBrowserApi("My Radio App");

    const newStations = await api
      .searchStations({
        language: "russia",
        tag: stf,
        limit: 10,
      })
      .then((data) => data);

    return newStations;
  };

  function FourRandom (num) {

    let indexRadio=[];
    let index = 0;

    while (index < 4) {
     let random = Math.floor(Math.random()*num);

     if (indexRadio.includes(random)) continue
      indexRadio.push(random)
      index+=1
    }
    return indexRadio
  }

  useEffect(() => {
    setupApi(stationFilter).then((data) => {
      // console.log(' data', data);
      const random = FourRandom(data.length);
      const randomStations = data.filter((el, i) => random.includes(i));
      // console.log('~ randomStations', randomStations)
      setStations(randomStations);
      setLoadingStations(false);
    });
  }, [stationFilter]); 



  const filters = [
    'hit',
    'classical',
    'popular',
    'dance',
    'disco',
    'house',
    'jazz',
    'pop',
    'rap',
    'retro',
    'rock',
  ];

  const setDefaultSrc = (event) => {
    event.target.src = defaultImage;
  };

  return (
    <div className={styles.radio}>
      <div className={styles.filters}>
        {filters.map((filter, index) => (
          <span
            key={index}
            className={stationFilter === filter ? "selected" : ""}
            onClick={() => setStationFilter(filter)}
          >
            {filter}
          </span>
        ))}
      </div>
      {loadingStations ? (
        <div className="mx-auto">
          <SyncLoader
            color="#E8A87C"
            loading={loadingStations}
            cssOverride={override}
            size={12}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className={styles.stations}>
          {stations &&
            stations.map((station, index) => (
              <div className={styles.station} key={index}>
                <div className={styles.stationName}>
                  <img
                    className={styles.logo}
                    src={station.favicon}
                    alt="station logo"
                    onError={setDefaultSrc}
                  />
                  <div className={styles.name}>{station.name}</div>
                </div>

                <AudioPlayer
                  className={styles.player}
                  src={station.urlResolved}
                  showJumpControls={false}
                  layout="stacked"
                  customProgressBarSection={[]}
                  customControlsSection={["MAIN_CONTROLS", "VOLUME_CONTROLS"]}
                  autoPlayAfterSrcChange={false}
                />
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
