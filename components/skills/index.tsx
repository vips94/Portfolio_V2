"use-client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./skills.module.scss";
import { motion, easeInOut, animate, cubicBezier } from "framer-motion";

const MOVE_Y = 75;
const MOVE_X = 90;

const skillsList = [
  {
    skillName: "HTML",
    x: -MOVE_Y,
    y: -MOVE_Y,
    color: "#f55c1b",
  },
  {
    skillName: "CSS",
    x: 0,
    y: -MOVE_X,
    color: "#2e9fe3",
  },
  {
    skillName: "SASS",
    x: MOVE_Y,
    y: -MOVE_Y,
    color: "#f3356f",
  },
  {
    skillName: "JAVASCRIPT",
    x: MOVE_X,
    y: 0,
    color: "#ffedb2",
  },
  {
    skillName: "REACT",
    x: MOVE_Y,
    y: MOVE_Y,
    color: "#93b4ff",
  },
  {
    skillName: "REDUX",
    x: 0,
    y: MOVE_X,
    color: "#abff97",
  },
  {
    skillName: "NEXT JS",
    x: -MOVE_Y,
    y: MOVE_Y,
    color: "#ecefff",
  },
  {
    skillName: "UNITY:ENGINE",
    x: -MOVE_X,
    y: 0,
    color: "#00ffcb",
  },
];
const ROTATE_TAB_BY = -45;

const Skills = () => {
  const tabRefs = useRef([]) as any;
  const card = useRef(null) as any;
  const circleSvg = useRef(null) as any;
  const [activeIndex, setActiveIndex] = useState(0) as any;

  useEffect(()=>{

  })

  const playAnimation = (index: number) => {
    animate([
      //tab return sequence
      [
        tabRefs.current[activeIndex],
        { x: 0, y: 0, scale: 1 },
        { duration: 0.5, ease: easeInOut },
      ],
      //tab rotate sequence
      [
        circleSvg.current,
        { rotate: ROTATE_TAB_BY * (index+1) },
        { duration: 0.5, ease: cubicBezier(0.35, 0.17, 0.3, 0.86), at: "<" },
      ],
      //tab forward sequence
      [
        tabRefs.current[index],
        { x: skillsList[index].x, y: skillsList[index].y, scale: 1.2 },
        { duration: 0.5, ease: cubicBezier(0.35, 0.17, 0.3, 0.86) },
      ],
    ]);
    setActiveIndex(index);
  };

  return (
    <div className={styles["skill-section"]}>
      <div className={styles.section}>
        <div className={styles.dot}>
          {skillsList.map((skill: any, i: number) => {
            return (
              <motion.div
                className={styles.dotNav}
                initial={{ x: "-200%" , opacity:0 }}
                whileInView={{ x: 0 , opacity:1}}
                transition={{
                  duration: 1,
                  delay: 0.2 * i,
                  ease: cubicBezier(0.35, 0.17, 0.3, 0.86),
                }}
                viewport={{ once: true }}
                key={i}
              >
                <span
                  className={`${styles.second} ${
                    activeIndex === i ? styles.active : ""
                  }`}
                  onClick={() => playAnimation(i)}
                >
                  <p className={styles.name}>{skill.skillName}</p>
                </span>
              </motion.div>
            );
          })}
        </div>
        <div className={styles.tab}>
          <motion.svg
            ref={circleSvg}
            className={styles["circle-svg"]}
            initial={{ rotate: 180 }}
            whileInView={{ rotate: -45 }}
            transition={{
              delay: 1,
              duration: 2,
              ease: cubicBezier(0.35, 0.17, 0.3, 0.86),
            }}
            viewport={{ once: true }}
            width="90vh"
            height="90vh"
            viewBox="0 0 800 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <motion.path
                ref={(el) => (tabRefs.current[0] = el)}
                d="M259.748 334.825L140.291 286.058C133.666 283.353 131.943 274.768 137.011 269.717L279.337 127.85C284.372 122.831 292.888 124.521 295.626 131.082L345.082 249.623C346.646 253.37 345.788 257.69 342.913 260.556L270.587 332.649C267.74 335.487 263.47 336.344 259.748 334.825Z"
                fill={skillsList[0].color}
              />
              <motion.path
                ref={(el) => (tabRefs.current[1] = el)}
                d="M348.232 249.122L298.486 129.862C295.739 123.275 300.564 116.008 307.693 115.998L509.123 115.714C516.249 115.704 521.096 122.953 518.371 129.547L469.043 248.947C467.499 252.683 463.861 255.122 459.823 255.128L357.467 255.272C353.431 255.278 349.788 252.852 348.232 249.122Z"
                fill={skillsList[1].color}
              />
              <motion.path
                ref={(el) => (tabRefs.current[2] = el)}
                d="M472.868 251.209L521.61 132.532C524.32 125.934 532.87 124.214 537.921 129.251L679.725 270.656C684.774 275.691 683.081 284.243 676.494 286.974L558.013 336.108C554.28 337.656 549.983 336.805 547.121 333.952L475.057 262.09C472.197 259.238 471.333 254.945 472.868 251.209Z"
                fill={skillsList[2].color}
              />
              <motion.path
                ref={(el) => (tabRefs.current[3] = el)}
                d="M560.233 339.702L679.322 289.884C685.9 287.133 693.156 291.966 693.166 299.104L693.45 500.824C693.46 507.96 686.221 512.813 679.636 510.085L560.408 460.686C556.677 459.14 554.241 455.497 554.236 451.453L554.092 348.95C554.086 344.908 556.509 341.26 560.233 339.702Z"
                fill={skillsList[3].color}
              />
              <motion.path
                ref={(el) => (tabRefs.current[4] = el)}
                d="M560.484 463.893L679.221 512.956C685.794 515.671 687.511 524.187 682.504 529.237L541.035 671.964C536 677.045 527.414 675.349 524.688 668.736L475.529 549.476C473.996 545.757 474.841 541.482 477.672 538.625L549.563 466.095C552.419 463.214 556.734 462.344 560.484 463.893Z"
                fill={skillsList[4].color}
              />
              <motion.path
                ref={(el) => (tabRefs.current[5] = el)}
                d="M470.83 549.227L521.865 669.91C524.664 676.53 519.786 683.859 512.607 683.819L309.4 682.679C302.326 682.639 297.531 675.452 300.203 668.892L349.131 548.77C350.673 544.985 354.358 542.52 358.44 542.543L461.684 543.122C465.677 543.145 469.273 545.545 470.83 549.227Z"
                fill={skillsList[5].color}
              />
              <motion.path
                ref={(el) => (tabRefs.current[6] = el)}
                d="M346.493 545.743L297.38 666.041C294.676 672.666 286.091 674.389 281.04 669.321L138.185 526.01C133.166 520.975 134.856 512.458 141.417 509.721L260.798 459.916C264.544 458.353 268.864 459.21 271.73 462.085L344.317 534.904C347.155 537.751 348.012 542.021 346.493 545.743Z"
                fill={skillsList[6].color}
              />
              <motion.path
                ref={(el) => (tabRefs.current[7] = el)}
                d="M248.767 459.023L129.678 508.841C123.1 511.593 115.843 506.76 115.833 499.621L115.55 297.901C115.54 290.765 122.778 285.912 129.363 288.64L248.591 338.039C252.323 339.585 254.758 343.228 254.764 347.272L254.908 449.775C254.913 453.817 252.491 457.466 248.767 459.023Z"
                fill={skillsList[7].color}
              />

              <rect
                x="245.993"
                y="170.796"
                width="120"
                height="120"
                transform="rotate(45 259.993 180.796)"
                fill="url(#pattern0)"
              />
              <rect
                x="472"
                y="129.999"
                width="100"
                height="100"
                transform="rotate(90 462 129.999)"
                fill="url(#pattern1)"
              />
              <rect
                x="631.932"
                y="250.092"
                width="100"
                height="100"
                transform="rotate(135 631.932 250.092)"
                fill="url(#pattern2)"
              />
              <rect
                x="677"
                y="449.999"
                width="100"
                height="100"
                transform="rotate(180 677 449.999)"
                fill="url(#pattern3)"
              />
              <rect
                x="561.221"
                y="620.617"
                width="100"
                height="100"
                transform="rotate(-135 561.221 620.617)"
                fill="url(#pattern4)"
              />
              <rect
                x="358"
                y="666"
                width="100"
                height="100"
                transform="rotate(-90 358 666)"
                fill="url(#pattern5)"
              />
              <rect
                x="184.332"
                y="544.957"
                width="100"
                height="100"
                transform="rotate(-45 184.332 544.957)"
                fill="url(#pattern6)"
              />
              <rect
                x="120"
                y="330.999"
                width="130"
                height="130"
                fill="url(#pattern7)"
              />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use href="#image0_551_48" transform="scale(0.0104167)" />
                </pattern>
                <pattern
                  id="pattern1"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use href="#image1_551_48" transform="scale(0.01)" />
                </pattern>
                <pattern
                  id="pattern2"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use href="#image2_551_48" transform="scale(0.01)" />
                </pattern>
                <pattern
                  id="pattern3"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use href="#image3_551_48" transform="scale(0.01)" />
                </pattern>
                <pattern
                  id="pattern4"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use href="#image4_551_48" transform="scale(0.01)" />
                </pattern>
                <pattern
                  id="pattern5"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use href="#image5_551_48" transform="scale(0.01)" />
                </pattern>
                <pattern
                  id="pattern6"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use href="#image6_551_48" transform="scale(0.00390625)" />
                </pattern>
                <pattern
                  id="pattern7"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use href="#image7_551_48" transform="scale(0.01)" />
                </pattern>
                <image
                  id="image0_551_48"
                  width="96"
                  height="96"
                  href="/images/skills/html1.svg"
                />
                <image
                  id="image1_551_48"
                  width="100"
                  height="100"
                  href="/images/skills/css.svg"
                />
                <image
                  id="image2_551_48"
                  width="100"
                  height="100"
                  href="/images/skills/sass.svg"
                />
                <image
                  id="image3_551_48"
                  width="100"
                  height="100"
                  href="/images/skills/js.svg"
                />
                <image
                  id="image4_551_48"
                  width="100"
                  height="100"
                  href="/images/skills/react.svg"
                />
                <image
                  id="image5_551_48"
                  width="100"
                  height="100"
                  href="/images/skills/redux.svg"
                />
                <image
                  id="image6_551_48"
                  width="256"
                  height="256"
                  href="/images/skills/nextjs.svg"
                />
                <image
                  id="image7_551_48"
                  width="100"
                  height="100"
                  href="/images/skills/unity1.svg"
                />
              </defs>
            </g>
          </motion.svg>
        </div>
        {/* <div className={styles.card} style={{background:`${skillsList[activeIndex]?.color}`}} ref={card}>
        
        </div> */}
      </div>
    </div>
  );
};

export default Skills;
