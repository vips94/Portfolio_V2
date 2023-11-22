import React, { useEffect, useState, useRef } from "react";
import styles from "./home.module.scss";
import gsap from "gsap";
import CustomButton from "../button";
import TreeIllustration from "../illustrate-svg/tree-illustrate";
import Divider from "../divider";

const imageList = ["home-fg1", "home-fg2", "home-fg3", "home-fg4"];

const HomePage = () => {
  const [current, setCurrent] = useState(3);
  const text = useRef([]) as any;

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
        style={{ width: "1000px", height: "1000px", right: "-10%", bottom: "8%" }}
      >
        {<TreeIllustration />}
      </div>
      <Divider color="white" position="calc(90vh - 200px + 45px)" />
      <div className={styles["home-footer"]} />
      <div className={styles["body-container"]}>
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
      </div>
    </div>
  );
};

export default HomePage;
