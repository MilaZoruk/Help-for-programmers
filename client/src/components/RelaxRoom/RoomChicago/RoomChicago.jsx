import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player'
import { SyncLoader } from 'react-spinners';
import styles from './RoomChicago.module.css';

export default function RoomChicago() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);
  const [items, setItems] = useState([]);
  const [image, setImage] = useState('');

  useEffect(() => {
    async function getBook() {
      const resp = await fetch(
        'https://api.artic.edu/api/v1/artworks?limit=25',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const result = await resp.json();
      const filteResult = result.data.filter((el) => el.title !== 'GAF View-Master' && el.title !=='Kenmore Sewing Machine') 
      setItems(filteResult);
      setImage(result.config);
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
          key=""
          className='react-player'
          url={['https://www.youtube.com/watch?v=WtKHPUrk5q8', 'https://www.youtube.com/watch?v=t3lcMgWoKY4', 'https://www.youtube.com/watch?v=NFPs_cRRGdM', 'https://www.youtube.com/watch?v=cs75isUzAeg&feature=emb_logo']}
          width='100%'
          loop={true}
          controls={true}
          fs="1"
          // origin = 'http://localhost:3000' 
          onError={(e) => console.log('onError', e)}
        />
      </div>

      <div className={styles.allArt}>
        {items.map((el) => (
         <>
            <img
              className={styles.imgARt}
              src={`https://www.artic.edu/iiif/2/${el.image_id}/full/843,/0/default.jpg`}
              alt={el.title}
            />
            <br></br>
            <div className="space-y-2 mt-4 text-lg" key={el.image_id}>
            <p className={styles.wordDescription1}> Название:</p> <p className={styles.wordDescription}>{el.title}</p>
            <p className={styles.wordDescription1}>Место:</p> <p className={styles.wordDescription}>{el.place_of_origin}</p>
            <p className={styles.wordDescription1}>Период:</p> <p className={styles.wordDescription}>{el.date_start}-{el.date_end}</p>
          </div>
          </>
      ))}
      </div>
    </>
  );
}
