import React from 'react';
import styles from './experience.module.scss';
import Title from '../title';

const Experience = () => {
    return (
        <div className={styles["experience-section"]}>
        <div className={styles.section}>
            <Title title='EXPERIENCE' shadowTitle='EXPERIENCE'/>
        </div>
        </div>
    );
};

export default Experience;