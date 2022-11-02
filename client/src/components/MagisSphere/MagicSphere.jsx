/* eslint-disable */
import React from 'react'
import styles from './Magic.module.css';
import { useState } from 'react';
import { predictions } from '../../constants/predictions';

function MagicSphere() {
    const [isVisible, setIsVisible] = useState(false);
    let prediction = '';

    const onClickHandler = (e) => {
        e.preventDefault();
        console.log('it works');
        let index = Math.floor(Math.random() * predictions.length)
        prediction = predictions[index];
        setIsVisible(true);
    }
    const onChangeHandler = (e) => {
        console.log(e.target.value);
    }

    return (
        <div >
            <div>{isVisible ? <p>{prediction}</p> : null}</div>
            <img src="Magic_Sphere_007.png" alt="magic sphere" className={styles.magicSphere} />
            <form onSubmit={onClickHandler}>
                <input onChange={onChangeHandler}type="text" name='ask' placeholder='type you wish to know here' className={styles.input} />
                <button type='submit' >Get prediction</button>
            </form>
        </div>
    )
}

export default MagicSphere