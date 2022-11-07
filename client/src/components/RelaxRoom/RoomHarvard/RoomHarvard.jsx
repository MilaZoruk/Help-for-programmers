import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player'

// import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { SyncLoader } from 'react-spinners';

import styles from './RoomHarvard.module.css';

export default function RoomHarvard() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);
  const [items, setItems] = useState([]);
  const [onInit, setOnInit] = useState('');

  useEffect(() => {
    async function getBook() {
      const resp = await fetch(
        'https://api.harvardartmuseums.org/?place=any&apikey=7039d293-f3bf-432e-a15a-dbafdd6f6a9a&size=20',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const result = await resp.json();
      console.log(result);
      setItems(result.records);
      setIsLoaded(false);
    }
    getBook();
  }, []);

  if (error) {
    return <div>Error: мы уже работаем, чтобы устранить ошибку {error.message}</div>;
  }
  if (isLoaded) {
    return <div><SyncLoader
    color="rgb(104, 117, 245)"
    loading={isLoaded}
    cssOverride={ {display: "block",
    marginTop: "30px",
    borderColor: "red",}}
    size={10}
    aria-label="Loading Spinner"
    data-testid="loader"
  /></div>;
  }
  return (
     <><div className={styles.playerwrapper}>
          <ReactPlayer
              className='react-player'
              url={['https://www.youtube.com/watch?v=3SeHZShpkxU', 'https://www.youtube.com/watch?v=YH7-TCwOHtg', 'https://www.youtube.com/watch?v=Bl7Jp5oDe6o']}
              width='100%'
            />
      </div>

      {/* <div className={styles.carousel}>
      <Carousel showThumbs={true} infiniteLoop={true} autoPlay> */}
      <div className={styles.allArt}>
                  {items.map((el) => (
                         <>
                         <img
                           className={styles.imgARt}
                           src={el?.primaryimageurl || el?.url}
                           alt={el.title}
                         />
                          <br></br>
            <div className="space-y-2 mt-4 text-lg" key={el.id}>
            <p className={styles.wordDescription1}>Название:</p> <p className={styles.wordDescription}>{el.title}</p>
            <p className={styles.wordDescription1}>Период:</p> <p className={styles.wordDescription}>{el.dated}</p>
            <p className={styles.wordDescription1}>Описание:</p> <p className={styles.wordDescription}>{el?.description ||  'not description'}</p>
          </div>
          </>
                  ))}
        {/* </Carousel> */}
        </div>
    </>
  );
}
