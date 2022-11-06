/* eslint-disable */
import React from 'react'
import styles from './Greeting.module.css';
import { motion } from 'framer-motion';


const blockAnimation = {
    hidden: {
        y:0,
        opacity: 0,
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: {
            duration:0.3,
        },
    }),
}

export default function Greeting() {
    return (
        <motion.div initial="hidden" whileInView="visible" className={styles.greeting}>
            <motion.p custom={1} variants={blockAnimation} className="mb-3 font-light text-gray-500 dark:text-gray-400 font-style: italic"  >
                Lorem Ipsum - это текст-"рыба", часто используемый в печати
                и вэб-дизайне.Lorem Ipsum является стандартной "рыбой" для
                текстов на латинице с начала XVI века.В то время некий безымянный
                печатник создал большую коллекцию размеров и форм шрифтов,
                используя Lorem Ipsum для распечатки образцов.</motion.p>
        </motion.div>
    )
}
