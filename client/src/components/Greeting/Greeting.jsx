/* eslint-disable */
import React from 'react'
import styles from './Greeting.module.css';


export default function Greeting() {
    return (
        <div className={styles.greeting}>
            <p className="mb-3 font-light text-gray-500 dark:text-gray-400 font-style: italic"  >
                Lorem Ipsum - это текст-"рыба", часто используемый в печати
                и вэб-дизайне.Lorem Ipsum является стандартной "рыбой" для
                текстов на латинице с начала XVI века.В то время некий безымянный
                печатник создал большую коллекцию размеров и форм шрифтов,
                используя Lorem Ipsum для распечатки образцов.</p>
        </div>
    )
}
