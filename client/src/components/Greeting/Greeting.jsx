/* eslint-disable */
import React from 'react'
import styles from './Greeting.module.css';


export default function Greeting() {
    return (
        <div className={styles.greeting}>
            <p class="mb-3 font-light text-gray-500 dark:text-gray-400">
                Track work across the enterprise through an open, collaborative platform.
                Link issues across Jira and ingest data from other software development tools,
                so your IT support and operations teams have richer contextual information
                to rapidly respond to requests, incidents, and changes.</p>
        </div>
    )
}
