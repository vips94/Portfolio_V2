import React, { useEffect, useState, useRef, forwardRef } from "react";
import styles from "./home.module.scss";
import gsap from "gsap";
import CustomButton from "../button";
import TreeIllustration from "../illustrate-svg/tree-illustrate";
import Divider from "../divider";
import { useSelector } from "react-redux";
import {
  selectPropertiesBorderColor,
  selectPropertiesBtnMaskColor,
} from "@/store/skills";

const imageList = ["home-fg1", "home-fg2", "home-fg3", "home-fg4"];

const HomePage = forwardRef((props, ref: any) => {

  const propertiesBorderColor = useSelector(selectPropertiesBorderColor);
  const propertiesBtnMaskColor = useSelector(selectPropertiesBtnMaskColor);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const textTimeLine = gsap.timeline();
      // repeated text animation
      textTimeLine
        .from(`.${styles.title}`, {
          y: "100%",
          opacity : 0,
          duration: 0.5,
          stagger: 0.5
        })
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section className={styles["home-section"]} ref={ref} id="home">
      <div
        className={styles.background}
        style={{
          width: "500px",
          height: "500px",
          left: "50%",
          bottom: "-3.5%",
          transform: "translate(-50%,0)",
          zIndex: 5,
        }}
      >
        {<TreeIllustration />}
      </div>
      <Divider style={{ top: "20px", transform: "scaleY(-1)" }} />
      <div className={styles["home-footer"]} />
      <div
        className={styles["home-header"]}
        style={{ backgroundColor: propertiesBorderColor }}
      />
      <div className={styles.textSection}>
        <div className={styles.row}>
          <p className={styles.title}>Hello !</p>
          <p className={styles.title}>
            I'm{" "}
            <span className={styles.name} style={{ color: propertiesBorderColor }}>Vipin Kumar</span>
          </p>
        </div>
        <div className={styles.circularText}>
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path
              id="circlePath"
              fill={propertiesBtnMaskColor}
              fillOpacity={0.5}
              strokeWidth="4"
              stroke={propertiesBorderColor}
              d="
                  M 10, 50
                  a 40,40 0 1,1 80,0
                  a 40,40 0 1,1 -80,0
                "
            />
            <text id="text" fill="#444" textLength={240}>
              <textPath id="textPath" href="#circlePath">
                FRONTEND ENGINEER - GAME DEVELOPER -
              </textPath>
            </text>
          </svg>
        </div>
      </div>
      <div id={styles["section10"]} className={styles["scrollButton"]}>
        <span></span>
        <h1>Scroll</h1>
      </div>
    </section>
  );
});

export default HomePage;
