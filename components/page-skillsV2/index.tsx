"use-client";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import styles from "./skills.module.scss";
import {
  motion,
  easeInOut,
  animate,
  useInView,
  useAnimate,
} from "framer-motion";
import Title from "../title";
import { useDispatch } from "react-redux";
import {
  setPropertiesBorderColor,
  setPropertiesBtnMaskColor,
  setPropetiedTextColor,
  setPropertiesMaskOpacity,
  setPropertyTextStroke,
} from "@/store/skills";
import SkillIllustration from "../illustrate-svg/skill-illustrate/index";

const MOVE_Y = 75;
const MOVE_X = 94;
const TEXT_MOVE_X = 100;

const skillsList = [
  {
    skillName: "HTML",
    x: -MOVE_Y,
    y: -MOVE_Y,
    color: "#f55c1b",
    maskColor: "#F99D76",
    textcolor: "#f55c1b",
    maskOpacity: 0.95,
    text_x: TEXT_MOVE_X,
    text_y: 13,
    knowledge: "95",
  },
  {
    skillName: "CSS",
    x: 0,
    y: -MOVE_X,
    color: "#2e9fe3",
    maskColor: "#81C5EE",
    textcolor: "#2e9fe3",
    maskOpacity: 0.95,
    text_x: TEXT_MOVE_X,
    text_y: 10,
    knowledge: "75",
  },
  {
    skillName: "SASS",
    x: 66.5,
    y: -66.5,
    color: "#ff94aa",
    maskColor: "#FFBECC",
    textcolor: "#ff94aa",
    maskOpacity: 0.95,
    text_x: TEXT_MOVE_X,
    text_y: 8,
    knowledge: "70",
  },
  {
    skillName: "JAVASCRIPT",
    x: 85,
    y: 0,
    color: "#f9e3ae",
    maskColor: "#FBEECE",
    textcolor: "#f9e3ae",
    textStroke: "#6e6363",
    maskOpacity: 0.95,
    text_x: TEXT_MOVE_X,
    text_y: 4,
    knowledge: "80",
  },
  {
    skillName: "REACT",
    x: 65,
    y: 65,
    color: "#93b4ff",
    maskColor: "#BED2FF",
    textcolor: "#93b4ff",
    maskOpacity: 0.95,
    text_x: TEXT_MOVE_X,
    text_y: 0,
    knowledge: "80",
  },
  {
    skillName: "REDUX",
    x: 0,
    y: MOVE_X,
    color: "#abff97",
    maskColor: "#CCFFC0",
    textcolor: "#abff97",
    textStroke: "#6e6363",
    maskOpacity: 0.95,
    text_x: TEXT_MOVE_X,
    text_y: 0,
    knowledge: "90",
  },
  {
    skillName: "NEXT JS",
    x: -76,
    y: 76,
    color: "#ecefff",
    maskColor: "#F3F5FF",
    textcolor: "#ecefff",
    textStroke: "#6e6363",
    maskOpacity: 0.95,
    text_x: TEXT_MOVE_X,
    text_y: 0,
    knowledge: "75",
  },
  {
    skillName: "UNITY:ENGINE",
    x: -94,
    y: 0,
    color: "#00ffcb",
    maskColor: "#66FFDF",
    textcolor: "#00ffcb",
    maskOpacity: 0.95,
    text_x: TEXT_MOVE_X,
    text_y: 6,
    knowledge: "65",
  },
];

const variants = {
  initial: { opacity: 1, x: 0 },
  hover: { opacity: 0, x: TEXT_MOVE_X },
};

const Skills = forwardRef((props,ref:any) => {
  const tabRefs = useRef([]) as any;
  const skillRefs = useRef([]) as any;
  const circleSvg = useRef(null) as any;
  const label = useRef(null) as any;
  const [activeIndex, setActiveIndex] = useState(0) as any;
  const [showIllustration, setShowIllustration] = useState(false) as any;
  const [currentIndex, setCurrentIndex] = useState('') as any;
  const dispatch = useDispatch();

  const isInView = useInView(circleSvg,{ once: true });

  useEffect(() => {
    if (isInView) {
      console.log(isInView)
      skillsList.forEach((_: any, index: number) => {
        animate([
          [
            tabRefs.current[index],
            { x: skillsList[index].x, y: skillsList[index].y, scale: 1.3 },
            { duration: 0.5, ease: easeInOut, delay: 0.2 * index },
          ],
          [
            skillRefs.current[index],
            { x: skillsList[index].text_x, y: skillsList[index].text_y, opacity: 1 , rotateZ: 90 },
            { duration: 0.5, ease: easeInOut, delay: 0.2 * index, at: "<" },
          ],
          [
            tabRefs.current[index],
            { x: 0, y: 0, scale: 1 },
            {  duration: 0.5, ease: easeInOut },
          ],
          [
            skillRefs.current[index],
            { x: 0, y: 0, opacity: 0 },
            {  duration: 0.5, ease: easeInOut, at: "<" },
          ],
        ]);
      });
      setTimeout(() => {
        setShowIllustration(true);
      }, 1000);
    }
  }, [isInView]);

  const handleHoverStart = (index: number) => {
    animate([
      [
        tabRefs.current[index],
        { x: skillsList[index].x, y: skillsList[index].y, scale: 1.3 },
        { duration: 0.5, ease: easeInOut },
      ],
      [
        skillRefs.current[index],
        { x: skillsList[index].text_x, opacity: 1 },
        { duration: 0.5, ease: easeInOut, at: "<" },
      ],
      [
        label.current,
        { opacity:1 },
        { duration: 0.3, ease: easeInOut, at: "<" },
      ],
    ]);
    setCurrentIndex(index)
  };

  const handleHoverEnd = (index: number) => {
    animate([
      [
        tabRefs.current[index],
        { x: 0, y: 0, scale: 1 },
        { duration: 0.5, ease: easeInOut },
      ],
      [
        skillRefs.current[index],
        { x: 0, opacity: 0 },
        { duration: 0.3, ease: easeInOut, at: "<" },
      ],
      [
        label.current,
        {  opacity:0},
        { duration: 0.3, ease: easeInOut, at: "<" },
      ],
    ]);
  };

  return (
    <section className={styles["skill-section"]} ref={ref} id="skills">
      <div className={styles.section}>
        <Title title="MY SKILLS" shadowTitle="MY SKILLS" />
        {/* <div className={styles.background}>
          {showIllustration && <SkillIllustration/>}
        </div> */}
        <div className={styles.tab}>
          <motion.svg
            ref={circleSvg}
            className={styles["circle-svg"]}
            width="60vh"
            height="60vh"
            viewBox="0 0 800 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <motion.path
                id="mouseHover"
                ref={(el:any) => (tabRefs.current[0] = el)}
                d="M259.748 334.825L140.291 286.058C133.666 283.353 131.943 274.768 137.011 269.717L279.337 127.85C284.372 122.831 292.888 124.521 295.626 131.082L345.082 249.623C346.646 253.37 345.788 257.69 342.913 260.556L270.587 332.649C267.74 335.487 263.47 336.344 259.748 334.825Z"
                fill={skillsList[0].color}
                style={{
                  filter: `drop-shadow(-5px 5px 5px rgb(202, 202, 202))`,
                }}
                onMouseEnter={() => handleHoverStart(0)}
                onMouseLeave={() => handleHoverEnd(0)}
              />
              <motion.path
                id="mouseHover"

                ref={(el:any) => (tabRefs.current[1] = el)}
                d="M348.232 249.122L298.486 129.862C295.739 123.275 300.564 116.008 307.693 115.998L509.123 115.714C516.249 115.704 521.096 122.953 518.371 129.547L469.043 248.947C467.499 252.683 463.861 255.122 459.823 255.128L357.467 255.272C353.431 255.278 349.788 252.852 348.232 249.122Z"
                fill={skillsList[1].color}
                style={{
                  filter: "drop-shadow(-5px 5px 5px rgb(202, 202, 202))",
                }}
                onMouseEnter={() => handleHoverStart(1)}
                onMouseLeave={() => handleHoverEnd(1)}
              />
              <motion.path
                id="mouseHover"
                ref={(el:any) => (tabRefs.current[2] = el)}
                d="M472.868 251.209L521.61 132.532C524.32 125.934 532.87 124.214 537.921 129.251L679.725 270.656C684.774 275.691 683.081 284.243 676.494 286.974L558.013 336.108C554.28 337.656 549.983 336.805 547.121 333.952L475.057 262.09C472.197 259.238 471.333 254.945 472.868 251.209Z"
                fill={skillsList[2].color}
                style={{
                  filter: "drop-shadow(-5px 0px 5px rgb(202, 202, 202))",
                }}
                onMouseEnter={() => handleHoverStart(2)}
                onMouseLeave={() => handleHoverEnd(2)}
              />
              <motion.path
                id="mouseHover"
                ref={(el:any) => (tabRefs.current[3] = el)}
                d="M560.233 339.702L679.322 289.884C685.9 287.133 693.156 291.966 693.166 299.104L693.45 500.824C693.46 507.96 686.221 512.813 679.636 510.085L560.408 460.686C556.677 459.14 554.241 455.497 554.236 451.453L554.092 348.95C554.086 344.908 556.509 341.26 560.233 339.702Z"
                fill={skillsList[3].color}
                style={{
                  filter: "drop-shadow(-5px -5px 5px rgb(202, 202, 202))",
                }}
                onMouseEnter={() => handleHoverStart(3)}
                onMouseLeave={() => handleHoverEnd(3)}
              />
              <motion.path
                id="mouseHover"
                ref={(el:any) => (tabRefs.current[4] = el)}
                d="M560.484 463.893L679.221 512.956C685.794 515.671 687.511 524.187 682.504 529.237L541.035 671.964C536 677.045 527.414 675.349 524.688 668.736L475.529 549.476C473.996 545.757 474.841 541.482 477.672 538.625L549.563 466.095C552.419 463.214 556.734 462.344 560.484 463.893Z"
                fill={skillsList[4].color}
                style={{
                  filter: "drop-shadow(0px -5px 5px rgb(202, 202, 202))",
                }}
                onMouseEnter={() => handleHoverStart(4)}
                onMouseLeave={() => handleHoverEnd(4)}
              />
              <motion.path
                id="mouseHover"
                ref={(el:any) => (tabRefs.current[5] = el)}
                d="M470.83 549.227L521.865 669.91C524.664 676.53 519.786 683.859 512.607 683.819L309.4 682.679C302.326 682.639 297.531 675.452 300.203 668.892L349.131 548.77C350.673 544.985 354.358 542.52 358.44 542.543L461.684 543.122C465.677 543.145 469.273 545.545 470.83 549.227Z"
                fill={skillsList[5].color}
                style={{
                  filter: "drop-shadow(5px -5px 5px rgb(202, 202, 202))",
                }}
                onMouseEnter={() => handleHoverStart(5)}
                onMouseLeave={() => handleHoverEnd(5)}
              />
              <motion.path
                id="mouseHover"
                ref={(el:any) => (tabRefs.current[6] = el)}
                d="M346.493 545.743L297.38 666.041C294.676 672.666 286.091 674.389 281.04 669.321L138.185 526.01C133.166 520.975 134.856 512.458 141.417 509.721L260.798 459.916C264.544 458.353 268.864 459.21 271.73 462.085L344.317 534.904C347.155 537.751 348.012 542.021 346.493 545.743Z"
                fill={skillsList[6].color}
                style={{
                  filter: "drop-shadow(5px 5px 5px rgb(202, 202, 202))",
                }}
                onMouseEnter={() => handleHoverStart(6)}
                onMouseLeave={() => handleHoverEnd(6)}
              />
              <motion.path
                id="mouseHover"
                ref={(el:any) => (tabRefs.current[7] = el)}
                d="M248.767 459.023L129.678 508.841C123.1 511.593 115.843 506.76 115.833 499.621L115.55 297.901C115.54 290.765 122.778 285.912 129.363 288.64L248.591 338.039C252.323 339.585 254.758 343.228 254.764 347.272L254.908 449.775C254.913 453.817 252.491 457.466 248.767 459.023Z"
                fill={skillsList[7].color}
                style={{
                  filter: "drop-shadow(5px 5px 5px rgb(202, 202, 202))",
                }}
                onMouseEnter={() => handleHoverStart(7)}
                onMouseLeave={() => handleHoverEnd(7)}
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
          <div className={styles.textHolder}>
            {skillsList.map((item: any, index: number) => {
              return (
                <div
                  className={styles.item}
                  key={index}
                  style={{ transform: `rotate(${index * 45}deg)` }}
                >
                  <motion.div
                    className={styles.card}
                    ref={(el) => (skillRefs.current[index] = el)}
                  >
                    <p
                      style={{
                        color: `${skillsList[index]?.color}`,
                        transitionDelay: "1s",
                      }}
                    >
                      {skillsList[index].knowledge.slice(0, 1)}
                    </p>
                    <p
                      style={{
                        color: "white",
                        WebkitTextStroke: `2px ${skillsList[index]?.color}`,
                        transitionDelay: "1s",
                      }}
                    >
                      {skillsList[index].knowledge.slice(
                        1,
                        skillsList[index].knowledge.length
                      )}
                    </p>
                    <p
                      style={{
                        color: "white",
                        WebkitTextStroke: `2px ${skillsList[index]?.color}`,
                        transitionDelay: "1s",
                      }}
                    >
                      %
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
          <motion.div
            ref={label}
            className={styles.skillLabel}
            style={{
              color: 'white',
              WebkitTextStroke: `2px ${skillsList[currentIndex]?.color}`,
              transitionDuration: '0.5s'
            }}
          >
            {skillsList[currentIndex]?.skillName}
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default Skills;
