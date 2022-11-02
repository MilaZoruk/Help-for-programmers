/* eslint-disable */
import React from 'react'
import styles from './Magic.module.css';
import { useState } from 'react';
import { predictions } from '../../constants/predictions';
import Predict from './Predict/Predict';

function MagicSphere() {
    const [prediction, setIsVisible] = useState('');
    const [inpValue, setInpValue] = useState('');

    const onClickHandler = (e) => {
        e.preventDefault();
        const { value } = e.target[0];

        if (!value) return alert('Question must be filled out')
        let index = Math.floor(Math.random() * predictions.length)
        setIsVisible(predictions[index]);
    }

    const onChangeHandler = (e) => {
        const { value } = e.target;
        setInpValue(value);
    }

    return (
        <div >
            <img src="Magic_Sphere_007.png" alt="magic sphere" className={styles.magicSphere} />
            <Predict data={prediction} />
            <form onSubmit={onClickHandler} >
                <input value={inpValue} onChange={onChangeHandler} type="text" name='ask' placeholder='type you wish to know here' className={styles.input} />
                <button type='submit' >Get prediction</button>
            </form>
        </div>
    )
}

export default MagicSphere