import React from "react";
import styles from "./divider.module.scss";

const Divider = () => {
  return (
    <div className={styles.divider}>
      <div className={`${styles.wave} ${styles.wave1}`}/>
      <div className={`${styles.wave} ${styles.wave2}`}/>
      <div className={`${styles.wave} ${styles.wave3}`}/>
      <div className={`${styles.wave} ${styles.wave4}`}/>
    </div>
  );
};

export default Divider;
