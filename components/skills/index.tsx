import React, { useEffect, useRef, useState } from "react";
import styles from "./skills.module.scss";
import { getMidPoint } from "@/utility";
import { motion, easeInOut, animate, spring } from "framer-motion";

const skillsList = [
  {
    skillName: "HTML",
    x: -50,
    y: 0,
  },
  {
    skillName: "CSS",
    x: -50,
    y: 50,
  },
  {
    skillName: "SASS",
    x: 0,
    y: 50,
  },
  {
    skillName: "JAVASCRIPT",
    x: 50,
    y: 50,
  },
  {
    skillName: "REACT",
    x: 50,
    y: 0,
  },
  {
    skillName: "REDUX",
    x: 50,
    y: -50,
  },
  {
    skillName: "C#",
    x: 0,
    y: -50,
  },
  {
    skillName: "UNITY:ENGINE",
    x: -50,
    y: -50,
  },
];
const ROTATE_NAVIGATOR_BY = 10;
const ROTATE_TAB_BY = 45;

const Skills = () => {
  const refs = useRef([]) as any;
  const tabRefs = useRef([]) as any;
  const circle = useRef(null) as any;
  const circleSvg = useRef(null) as any;
  const [activeIndex, setActiveIndex] = useState() as any;

  useEffect(() => {
    refs.current.forEach((_: any, i: number) => {
      refs.current[
        i
      ].style.transform = `translate(0, -50%) rotate(${getDirection(
        i,
        ROTATE_NAVIGATOR_BY
      )}deg)`;
    });
    const length = refs.current.length;
    const mid = getMidPoint(length);
    setActiveIndex(mid);
  }, []);

  const playAnimation = (index: number) => {
    const rotateNavigator = -getDirection(index, ROTATE_NAVIGATOR_BY);

    animate([
      //tab return sequence
      [tabRefs.current[activeIndex], { x: 0, y: 0, scale: 1 }, { duration: 0.5,ease: easeInOut }],
      //navigator sequence
      [
        circle.current,
        { rotate: rotateNavigator },
        { duration: 1, ease: easeInOut, at: "<" },
      ],
      //tab rotate sequence
      [
        circleSvg.current,
        { rotate: ROTATE_TAB_BY * index },
        { duration: 1, ease: easeInOut, at: "<" },
      ],
      //tab forward sequence
      [
        tabRefs.current[index],
        { x: skillsList[index].x, y: skillsList[index].y, scale: 1.2 },
        { duration: 0.5 ,ease: easeInOut,},
      ],
    ]);
    setActiveIndex(index);
  };

  const getDirection = (index: number, rotateBy: number) => {
    const length = refs.current.length;
    const mid = getMidPoint(length);
    const rotation = (index - mid) * rotateBy;
    return rotation;
  };

  return (
    <div className={styles["skill-section"]}>
      <div className={styles.section}>
        <motion.div
          className={styles.circle}
          ref={circle}
          initial={{ rotateZ: 60 }}
          whileInView={{ rotateZ: 0 }}
          transition={{ delay: 1, duration: 2, ease: easeInOut }}
          viewport={{ once: true }}
        >
          {skillsList.map((skill: any, i: number) => {
            return (
              <div
                className={styles.item}
                key={i}
                ref={(el) => (refs.current[i] = el)}
              >
                <div className={styles.first} />
                <div
                  className={`${styles.second} ${
                    activeIndex === i ? styles.active : ""
                  }`}
                  onClick={() => playAnimation(i)}
                >
                  <h4>{skill.skillName}</h4>
                </div>
              </div>
            );
          })}
        </motion.div>
        <div className={styles.card}>
          <motion.svg
            ref={circleSvg}
            className={styles["circle-svg"]}
            initial={{ rotate: 0 }}
            whileInView={{ rotate: 180 }}
            transition={{ delay: 1, duration: 2, ease: easeInOut }}
            viewport={{ once: true }}
            width="800"
            height="800"
            viewBox="0 0 800 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_556_9)">
              <motion.path
                ref={(el) => (tabRefs.current[7] = el)}
                d="M250.747 334.826L131.29 286.059C124.665 283.355 122.942 274.77 128.01 269.718L270.336 127.851C275.371 122.833 283.887 124.522 286.625 131.083L336.081 249.625C337.645 253.372 336.787 257.692 333.912 260.558L261.586 332.65C258.739 335.489 254.469 336.346 250.747 334.826Z"
                fill="#FFC700"
                style={{
                  filter: "drop-shadow(1px 1px 2px black)",
                }}
              />
              <motion.path
                ref={(el) => (tabRefs.current[6] = el)}
                d="M339.231 249.124L289.485 129.864C286.738 123.277 291.563 116.009 298.692 115.999L500.123 115.716C507.248 115.706 512.095 122.955 509.37 129.549L460.042 248.948C458.498 252.685 454.86 255.124 450.822 255.13L348.466 255.274C344.43 255.279 340.787 252.853 339.231 249.124Z"
                fill="#5551FF"
                style={{
                  filter: "drop-shadow(1px 1px 2px black)",
                }}
              />
              <motion.path
                ref={(el) => (tabRefs.current[5] = el)}
                d="M463.867 251.211L512.609 132.534C515.319 125.935 523.869 124.215 528.92 129.252L670.724 270.658C675.773 275.693 674.08 284.244 667.493 286.976L549.012 336.11C545.279 337.658 540.982 336.807 538.12 333.954L466.056 262.091C463.196 259.239 462.332 254.947 463.867 251.211Z"
                fill="#0099FF"
                style={{
                  filter: "drop-shadow(1px 1px 2px black)",
                }}
              />
              <motion.path
                ref={(el) => (tabRefs.current[4] = el)}
                d="M551.232 339.703L670.321 289.886C676.899 287.134 684.156 291.967 684.166 299.106L684.449 500.826C684.459 507.962 677.221 512.815 670.636 510.087L551.408 460.688C547.676 459.142 545.241 455.499 545.235 451.455L545.091 348.951C545.086 344.91 547.508 341.261 551.232 339.703Z"
                fill="#0FA958"
                style={{
                  filter: "drop-shadow(1px 1px 2px black)",
                }}
              />
              <motion.path
                ref={(el) => (tabRefs.current[3] = el)}
                d="M551.483 463.895L670.22 512.957C676.793 515.673 678.51 524.188 673.504 529.239L532.035 671.966C526.999 677.047 518.413 675.351 515.687 668.737L466.528 549.478C464.996 545.759 465.84 541.484 468.672 538.627L540.562 466.097C543.419 463.215 547.733 462.345 551.483 463.895Z"
                fill="#A259FF"
                style={{
                  filter: "drop-shadow(1px 1px 2px black)",
                }}
              />
              <motion.path
                ref={(el) => (tabRefs.current[2] = el)}
                d="M461.829 549.229L512.864 669.912C515.663 676.532 510.786 683.861 503.606 683.821L300.399 682.681C293.325 682.641 288.53 675.454 291.202 668.894L340.13 548.772C341.672 544.987 345.357 542.522 349.439 542.545L452.683 543.124C456.676 543.147 460.272 545.547 461.829 549.229Z"
                fill="#DADADA"
                style={{
                  filter: "drop-shadow(1px 1px 2px black)",
                }}
              />
              <motion.path
                ref={(el) => (tabRefs.current[1] = el)}
                d="M337.492 545.745L288.379 666.043C285.675 672.668 277.09 674.391 272.039 669.323L129.184 526.011C124.165 520.976 125.855 512.46 132.416 509.722L251.797 459.917C255.543 458.354 259.863 459.212 262.729 462.087L335.316 534.906C338.154 537.753 339.011 542.023 337.492 545.745Z"
                fill="#FF00FF"
                style={{
                  filter: "drop-shadow(1px 1px 2px black)",
                }}
              />
              <motion.path
                ref={(el) => (tabRefs.current[0] = el)}
                d="M248.766 459.025L129.677 508.843C123.099 511.594 115.842 506.762 115.832 499.623L115.549 297.903C115.539 290.767 122.777 285.914 129.362 288.642L248.59 338.041C252.322 339.587 254.757 343.23 254.763 347.274L254.907 449.777C254.912 453.819 252.49 457.467 248.766 459.025Z"
                fill="#FF8577"
                style={{
                  filter: "drop-shadow(1px 1px 2px black)",
                }}
              />
            </g>
            <defs>
              <clipPath id="clip0_556_9">
                <rect width="800" height="800" fill="white" />
              </clipPath>
            </defs>
          </motion.svg>
        </div>
      </div>
    </div>
  );
};

export default Skills;
