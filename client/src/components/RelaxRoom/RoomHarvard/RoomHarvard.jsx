import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player'

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import styles from './RoomHarvard.module.css';

export default function RoomHarvard() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [onInit, setOnInit] = useState('');

  useEffect(() => {
    async function getBook() {
      const resp = await fetch(
        'https://api.harvardartmuseums.org/image?apikey=7039d293-f3bf-432e-a15a-dbafdd6f6a9a&size=15',
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
    }
    getBook();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (isLoaded) {
    return <div>Loading...</div>;
  }
  return (
     <ul><div className='player-wrapper'>
          <ReactPlayer
              className='react-player'
              url={['https://www.youtube.com/watch?v=3SeHZShpkxU', 'https://www.youtube.com/watch?v=YH7-TCwOHtg', 'https://www.youtube.com/watch?v=Bl7Jp5oDe6o']}
              width='100%' />
      </div> 
      <div className={styles.carousel}>
      <Carousel autoPlay>
                  {items.map((el) => (
                      <div className={styles.allArt}>
                          <img key={el.id}
                              className={styles.imgARt}
                              src={el.baseimageurl}
                              alt={el.technique} />
                      </div>
                  ))}
        </Carousel>
        </div>
    </ul>
  );
}
