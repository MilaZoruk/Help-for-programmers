/* eslint-disable */
import React, { useEffect, useState } from 'react';
import Item from './Item/Item';
import styles from './PreArticles.module.css';
import getCategoryArticles from '../../api/articles';

function PreArticles() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getCategoryArticles(2).then((data) => {
            console.log(data);
            setArticles(data);
        });
      }, []);
 
    return (
        <div className={styles.preArticles}>
            {articles.map((el) => <Item data={el} key={el.id} />)};
        </div>
    )
}

export default PreArticles