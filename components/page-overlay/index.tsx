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
} from "@/store/skills";
import { getMidPoint } from "@/utility";

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
  const [activeIndex, setActiveIndex] = useState(0) as any;
  const [showThemeMenu, setShowThemeMenu] = useState(false) as any;
  const dispatch = useDispatch();

  const toggleThemeMenu = () => {
    if(!showThemeMenu){
        playAnimation();
    }else{
        returnAnimation();
    }
    setShowThemeMenu(!showThemeMenu);
    
  }

  const playAnimation = () => {
    const timeline = gsap.timeline();
    timeline.to(themes.current,{
        duration: 0.1,
        opacity: 1,
        stagger: 0.05,
        x: 0,
    }).to(backdrop.current,{
        duration:0.5,
        x: 0
    },0)
  }

  const returnAnimation = () => {
    const timeline = gsap.timeline();
    timeline.to(themes.current,{
        duration: 0.1,
        opacity: 0,
        stagger: 0.05,
        x: -145,
    }).to(backdrop.current,{
        duration:0.5,
        x: '-100%'
    },0)
  }

  const changeTheme = (index: number) => {
    setActiveIndex(index);
    setShowThemeMenu(false);
    dispatch(setPropertiesBorderColor(skillsList[index]?.color));
    dispatch(setPropertiesBtnMaskColor(skillsList[index]?.maskColor));
    dispatch(setPropetiedTextColor(skillsList[index]?.textcolor));
    dispatch(setPropertyTextStroke(skillsList[index]?.textStroke || "white"));
    dispatch(setPropertiesMaskOpacity(skillsList[index]?.maskOpacity));
  };

  return (
    <div className={styles["overlay-section"]}>
      <div className={styles.backdrop} ref={backdrop}/>
      <div className={styles.circle} onClick={toggleThemeMenu}>
        <span className={styles.activeCircle} style={{ backgroundColor: `${skillsList[activeIndex].color}` }}/>
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
              style={{ transform: `rotate(${angle}deg)`, width: "170px" }}
              onClick={()=>changeTheme(i)}
            >
              <div
                className={styles.themeBtn}
                ref = {(el)=> themes.current[i] = el}
                // style={{ backgroundColor: skill.color }}
              >
                <span style={{ backgroundColor: `${skill.color}` }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ThemeOverlay;
