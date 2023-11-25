import React, { useEffect, useState, useRef } from "react";
import styles from "./home.module.scss";
import gsap from "gsap";
import CustomButton from "../button";
import TreeIllustration from "../illustrate-svg/tree-illustrate";
import Divider from "../divider";
import Title from "../title";
import { useSelector} from "react-redux";
import { selectPropertiesBorderColor } from "@/store/skills";

const imageList = ["home-fg1", "home-fg2", "home-fg3", "home-fg4"];

const HomePage = () => {
  const [current, setCurrent] = useState(3);
  const text = useRef([]) as any;

  const propertiesBorderColor = useSelector(selectPropertiesBorderColor);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const textTimeLine = gsap.timeline();
      // repeated text  animation
      textTimeLine
        .to(text.current[0], {
          y: "-100%",
          duration: 1,
          repeat: -1,
          repeatDelay: 3,
          yoyo: true,
        })
        .to(
          text.current[1],
          {
            y: "-100%",
            duration: 1,
            repeat: -1,
            repeatDelay: 3,
            yoyo: true,
          },
          0
        );
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className={styles["home-section"]}>
      <div
        className={styles.background}
        style={{ width: "500px", height: "500px", left: "50%", bottom: "-3.5%",  transform: 'translate(-50%,0)', zIndex: 5}}
      >
        {<TreeIllustration />}
      </div>
      <Divider style={{top: '20px', transform: 'scaleY(-1)'}} />
      <div className={styles["home-footer"]} />
      <div className={styles["home-header"]} style={{backgroundColor: propertiesBorderColor}}/>
      <div className={styles.textSection}>
        <div className={styles.row}>
          <p className={styles.title} >Hello !</p>
          <p className={styles.title}>I'm <span style={{color: propertiesBorderColor}}>Vipin Kumar</span></p>
        </div>
        <div className={styles.circularText}>
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path id="circlePath" fill="#bae6fd" strokeWidth="4" stroke={propertiesBorderColor} d="
                  M 10, 50
                  a 40,40 0 1,1 80,0
                  a 40,40 0 1,1 -80,0
                " />
            <text id="text" fill="#444444" textLength={240}>
              <textPath id="textPath" href="#circlePath">FRONTEND ENGINEER - GAME DEVELOPER -</textPath>
            </text>
          </svg>
        </div>
      </div>
      {/* <div className={styles["body-container"]}>
        <h1>VIPIN KUMAR</h1>
        <span className={styles.subtitle}>
          {"</>"}
          <div className={styles.textholder}>
            <h2
              ref={(el) => (text.current[0] = el)}
              style={{
                backgroundImage: `url('/images/home/${imageList[current]}.jpg')`,
              }}
            >
              FRONTEND DEVELOPER
            </h2>
            <h2
              ref={(el) => (text.current[1] = el)}
              style={{
                backgroundImage: `url('/images/home/${imageList[current]}.jpg')`,
              }}
            >
              GAME DEVELOPER
            </h2>
          </div>
        </span>
        <CustomButton
          containerClassName="btn-container-1"
          extraClassName="btn-1"
          maskClassName="mask-1"
          btnName="HIRE ME"
        >
          HIRE ME
        </CustomButton>
      </div> */}
    </div>
  );
};

export default HomePage;
