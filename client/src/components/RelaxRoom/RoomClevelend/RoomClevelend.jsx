import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player'
import { SyncLoader } from 'react-spinners';
import styles from './RoomClevelend.module.css';

export default function RoomClevelend() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);
  const [items, setItems] = useState([]);
  //   const [image, setImage] = useState('');

  useEffect(() => {
    async function getBook() {
      const resp = await fetch(
        'https://openaccess-api.clevelandart.org/api/artworks/?limit=25',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const result = await resp.json();

      const filteResult = result.data.filter((el) => el.title !== 'Gray and Gold' && el.title !=='A Woman\'s Work' && el.title !== 'La Vie') 
      console.log(result);
      setItems(filteResult);
      setIsLoaded(false);
      // setImage(result.config);
    }
    getBook();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
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
          url={['https://www.youtube.com/watch?v=2pbH57GfmtA&t=1s', 'https://www.youtube.com/watch?v=o_wJueqWFc4', 'https://www.youtube.com/watch?v=AuPubReb76k']}
          width='100%'
        />
      </div>

      <div className={styles.allArt}>
      {items.map((el) => (
          <>
          <img key={el.id}
          className={styles.imgARt}
          src={el?.images?.web?.url} alt={el.title} />
          <br></br>
            <div className="space-y-2 mt-4 text-lg" key={el.id}>
              <p className={styles.wordDescription1}>Название:</p>  <p className={styles.wordDescription}>{el.title}.</p>
              <br></br>
              <p className={styles.wordDescription1}>Автор:</p> <p className={styles.wordDescription}> {el.creators[0].description}</p>
              <br></br>
              <p className={styles.wordDescription1}>Факты:</p> <p className={styles.wordDescription}>{el.fun_fact}</p>
              <br></br>
          </div></>
      ))}
    </div>
    </>
  );
}
