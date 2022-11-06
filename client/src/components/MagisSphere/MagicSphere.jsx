import React from 'react'
import styles from './Magic.module.css';
import { useState } from 'react';
import { predictions } from '../../constants/predictions';
import { CYRILLIC } from '../../constants/cyrillic';
import { motion } from 'framer-motion';

const appearPrediction = {
    appear: { opacity: [0, 1], transition: { duration: 3, delay: 0.5 } },
    stop: { opacity: 0 }
};
const variants = {
    stop: { y: [0, -10, 0], transition: { duration: 1 } },
    rotate: {
        rotate: [0, 15, 10, 160, 0, -15, -10, -260, 0],
        transition: { repeat: Infinity, repeatDelay: 1, duration: 30 }
    }
};

function MagicSphere() {
    const [isVisible, setIsVisible] = useState(false);
    const [prediction, setPrediction] = useState('')
    const [inpValue, setInpValue] = useState('');

    const onClickHandler = (e) => {
        e.preventDefault();
        const { value } = e.target[0];
        if (!value) return alert('Поле не может быть пустым!')
        let index = Math.floor(Math.random() * predictions.length)
        setPrediction(predictions[index]);
        setIsVisible(true);
        setTimeout(() => {
            setIsVisible(false);
        }, 5000);
        setInpValue('');
    }

    const onChangeHandler = (e) => {
        let { value } = e.target;
        if (CYRILLIC.includes(value?.[value.length - 1])) {
            setInpValue(value)
        } else {
            value = '';
            setInpValue(value)
        };
    }

    return (
        <div className={styles.sphere}>
            <div ><motion.img variants={variants}
                animate={isVisible ? 'stop' : 'rotate'}
                src="Magic_Sphere_007_350x350.png"
                alt="magic sphere" />
            </div>
            <motion.div
                animate={isVisible ? 'appear' : 'stop'} variants={appearPrediction} className={styles.predict}>
                {prediction}
            </motion.div>
            <div className={styles.input}>
                <form onSubmit={onClickHandler} className={styles.form}>
                    <label htmlFor="text" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Your Email</label>
                    <div className="relative">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="text" id="search"
                            className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-150 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="задай магическому шару свой вопрос" required value={inpValue} onChange={onChangeHandler} />
                        <button type="submit"
                            className="text-white absolute right-2.5 bottom-2.5 bg-gray-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Получить предсказание</button>
                    </div>
                </form>
            </div>
        </div>


    )
}

export default MagicSphere