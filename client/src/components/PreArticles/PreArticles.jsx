/* eslint-disable */
import React, { useEffect, useState } from 'react';
import Item from './Item/Item';
import styles from './PreArticles.module.css';
import { getPosts } from '../../api/articles';

function PreArticles() {
    const [articles, setArticles] = useState([]);
    // created_at
    useEffect(() => {
        getPosts().then((data) => {
            setArticles(data.sort((a, b) =>
                Date.parse(b.created_at) - Date.parse(a.created_at))
                .slice(0, 5));
        });
    }, []);

    return (
        <div className={styles.preArticles}>
            {articles.map((el) => <Item data={el} key={el.id} />)}
        </div>
    )
}

export default PreArticles