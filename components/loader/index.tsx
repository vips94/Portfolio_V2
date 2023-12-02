import React, { useState, useRef, useEffect } from "react";
import styles from "./loader.module.scss";
import { useDispatch } from "react-redux";
import gsap from "gsap";
import { setIsAssetsLoaded } from "@/store/website";

const LoaderPage = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
      setTimeout(()=>{
      
        const timeLine = gsap.timeline();
        timeLine.to(`.${styles.loaderContainer}`,{
          scale: 20,
          // opacity: 0,
          duration:0.5,
          onComplete: ()=>{
            dispatch(setIsAssetsLoaded(true))
          }
        })
        .to(`.${styles["loader-section"]}`,{
          opacity: 0,
          duration:0.3,
        })
      },5000)
    
  },[])

  return (
    <div className={styles["loader-section"]}>
      <div className={styles.loaderContainer}>
      <div className={styles.container}>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
      </div>
      </div>
      <div className={styles.textHolder}>Loading . . .</div>
    </div>
  );
};

export default LoaderPage;
