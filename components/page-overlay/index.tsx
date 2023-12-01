import React, { useState, useRef } from "react";
import styles from "./overlay.module.scss";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useDispatch } from "react-redux";
import {
  setPropertiesBorderColor,
  setPropertiesBtnMaskColor,
  setPropetiedTextColor,
  setPropertiesMaskOpacity,
  setPropertyTextStroke,
  setCurrenPropertiesIndex,
} from "@/store/skills";
import { getMidPoint } from "@/utility";
import DownloadButton from "../download-button";

const MOVE_Y = 75;
const MOVE_X = 94;
const skillsList = [
  {
    skillName: "HTML",
    x: -MOVE_Y,
    y: -MOVE_Y,
    color: "#f55c1b",
    maskColor: "#F99D76",
    textcolor: "#f55c1b",
    maskOpacity: 0.95,
  },
  {
    skillName: "CSS",
    x: 0,
    y: -MOVE_X,
    color: "#2e9fe3",
    maskColor: "#81C5EE",
    textcolor: "#2e9fe3",
    maskOpacity: 0.95,
  },
  {
    skillName: "SASS",
    x: 66.5,
    y: -66.5,
    color: "#ff94aa",
    maskColor: "#FFBECC",
    textcolor: "#ff94aa",
    maskOpacity: 0.95,
  },
  {
    skillName: "JAVASCRIPT",
    x: 85,
    y: 0,
    color: "#f9e3ae",
    maskColor: "#FBEECE",
    textcolor: "#f9e3ae",
    textStroke: "black",
    maskOpacity: 0.95,
  },
  {
    skillName: "REACT",
    x: 65,
    y: 65,
    color: "#93b4ff",
    maskColor: "#BED2FF",
    textcolor: "#93b4ff",
    maskOpacity: 0.95,
  },
  {
    skillName: "REDUX",
    x: 0,
    y: MOVE_X,
    color: "#abff97",
    maskColor: "#CCFFC0",
    textcolor: "#abff97",
    textStroke: "black",
    maskOpacity: 0.95,
  },
  {
    skillName: "NEXT JS",
    x: -76,
    y: 76,
    color: "#ecefff",
    maskColor: "#F3F5FF",
    textcolor: "#ecefff",
    textStroke: "black",
    maskOpacity: 0.95,
  },
  {
    skillName: "UNITY:ENGINE",
    x: -94,
    y: 0,
    color: "#00ffcb",
    maskColor: "#66FFDF",
    textcolor: "#00ffcb",
    maskOpacity: 0.95,
  },
];

const ThemeOverlay = () => {
  const themes = useRef([]) as any;
  const backdrop = useRef(null) as any;
  const arrow = useRef(null) as any;
  // const arrow1 = useRef(null) as any;
  const [activeIndex, setActiveIndex] = useState(0) as any;
  const [showThemeMenu, setShowThemeMenu] = useState(false) as any;
  const dispatch = useDispatch();

  const toggleThemeMenu = () => {
    if (!showThemeMenu) {
      playAnimation();
    } else {
      returnAnimation();
    }
    setShowThemeMenu(!showThemeMenu);
  };

  const playAnimation = () => {
    const timeline = gsap.timeline();
    timeline
      .to(backdrop.current, {
        duration: 0.5,
        height: "35vh",
        x: "-50%",
        y: "-50%",
      })
      .to(
        arrow.current,
        {
          scale: -1,
          duration: 0.5,
        },
        "0"
      )
      .to(
        themes.current,
        {
          duration: 0.1,
          opacity: 1,
          stagger: 0.05,
          x: 0,
        },
        "-=0.4"
      );
  };

  const returnAnimation = () => {
    const timeline = gsap.timeline();
    timeline
      .to(themes.current, {
        duration: 0.1,
        opacity: 0,
        stagger: 0.05,
        x: -145,
      })
      .to(
        arrow.current,
        {
          scale: 1,
          duration: 0.5,
        },
        "0"
      )
      .to(
        backdrop.current,
        {
          duration: 0.5,
          x: "-100%",
        },
        "0.3"
      );
  };

  const changeTheme = (index: number) => {
    setActiveIndex(index);
    setShowThemeMenu(false);
    dispatch(setPropertiesBorderColor(skillsList[index]?.color));
    dispatch(setPropertiesBtnMaskColor(skillsList[index]?.maskColor));
    dispatch(setPropetiedTextColor(skillsList[index]?.textcolor));
    dispatch(setPropertyTextStroke(skillsList[index]?.textStroke || "white"));
    dispatch(setPropertiesMaskOpacity(skillsList[index]?.maskOpacity));
    dispatch(setCurrenPropertiesIndex(index));
  };

  return (
    <div className={styles["overlay-section"]}>
      <div className={styles.backdrop} ref={backdrop} style={{border: `3px solid ${skillsList[activeIndex].maskColor}`, filter: `drop-shadow(1px 1px 10px ${skillsList[activeIndex].color})`}}/>
      <div className={styles.circle} onClick={toggleThemeMenu}>
        <span
          className={styles.activeCircle}
          style={{animationName: showThemeMenu? styles.reverseAnimate : styles.animate}}
          
        >
          <svg
            viewBox="0 0 251 319"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            ref={arrow}
          >
            <path
              d="M250.5 157.242C250.02 130.106 19.6616 -60.6749 1.6182 21.1104C0.0620847 28.1638 3.59271 35.3797 8.89348 40.2862C136.198 158.122 142.921 153.838 9.20565 274.635C3.72942 279.583 0.136586 286.902 1.52146 294.151C18.8583 384.897 250.982 184.449 250.5 157.242Z"
              fill={skillsList[activeIndex].color}
            />
          </svg>
        </span>
        {skillsList.map((skill: any, i: number) => {
          const mid = getMidPoint(skillsList.length);
          const direction = i - mid;
          const angleDiff = 12.9;
          let angle = 0;
          if (direction >= 0) {
            angle = angleDiff * (direction + 1) + angleDiff * direction;
          } else {
            angle = angleDiff * direction + angleDiff * (direction + 1);
          }
          return (
            <div
              className={styles.themeHolder}
              key={i}
              style={{ transform: `rotate(${angle}deg)` }}
              onClick={() => changeTheme(i)}
            >
              <div
                className={styles.themeBtn}
                ref={(el) => (themes.current[i] = el)}
                // style={{ backgroundColor: skill.color }}
              >
                <span style={{ backgroundColor: `${skill.color}` }} />
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.downloadSection}>
        <DownloadButton/>
      </div>
    </div>
  );
};

export default ThemeOverlay;
