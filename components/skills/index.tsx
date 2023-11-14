import React, { useEffect, useRef, useState } from "react";
import styles from "./skills.module.scss";
import { getMidPoint, isEven } from "@/utility";
import { motion, easeInOut, animate } from "framer-motion";

const skillsList = [
  {
    skillName: "HTML",
  },
  {
    skillName: "CSS",
  },
  {
    skillName: "SASS",
  },
  {
    skillName: "JAVASCRIPT",
  },
  {
    skillName: "REACT",
  },
  {
    skillName: "REDUX",
  },
  {
    skillName: "C#",
  },
  {
    skillName: "UNITY:ENGINE",
  },
];
const ROTATE_BY = 10;

const Skills = () => {
  const refs = useRef([]) as any;
  const circle = useRef(null) as any;
  const [activeIndex, setActiveIndex] = useState() as any;

  useEffect(() => {
    refs.current.forEach((_: any, i: number) => {
      refs.current[
        i
      ].style.transform = `translate(0, -50%) rotate(${getRotation(i)}deg)`;
    });
    const length = refs.current.length;
    const mid = getMidPoint(length);
    setActiveIndex(mid);
  }, []);

  const playAnimation = (index: number) => {
    const rotate = -getRotation(index);
    setActiveIndex(index);
    animate(
      circle.current,
      { rotate: rotate },
      { duration: 1, ease: easeInOut }
    );
  };

  const getRotation = (index: number) => {
    const length = refs.current.length;
    const mid = getMidPoint(length);
    const rotation = (index - mid) * ROTATE_BY;
    return rotation;
  };

  return (
    <div className={styles["skill-section"]}>
      <div className={styles.section}>
        <motion.div
          className={styles.circle}
          ref={circle}
          initial={{ rotateZ: "60deg" }}
          whileInView={{ rotateZ: "0deg" }}
          animate={{}}
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
          <svg
            width="1439"
            height="810"
            viewBox="0 0 1439 810"
            fill="none"
            
          >
            <g clip-path="url(#clip0_551_58)">
              <path
                d="M557.631 333L400 268.259L584.739 83L650 240.371L557.631 333Z"
                stroke="black"
                fill="red"
                style={{
                  transform: 'translate(-50px,0)',
                  filter:'drop-shadow(1px 1px 3px black)',
                }}
              />
              <path
                d="M654.462 239.238L588.779 81.9979L850.407 81.6302L785.276 239.054L654.462 239.238Z"
                stroke="black"
                fill="lightgreen"
                style={{
                  transform: 'translate(-50px,0)',
                  filter:'drop-shadow(1px 1px 3px black)',
                }}
              />
              <path
                d="M790 241.631L854.741 84L1040 268.739L882.629 334L790 241.631Z"
                stroke="black"
                fill="cyan"
                style={{
                  transform: 'translate(-50px,0)',
                  filter:'drop-shadow(1px 1px 3px black)',
                }}
              />
              <path
                d="M884.315 337.462L1041.56 271.779L1041.92 533.407L884.499 468.276L884.315 337.462Z"
                stroke="black"
                fill="orange"
                style={{
                  transform: 'translate(-50px,0)',
                  filter:'drop-shadow(1px 1px 3px black)',
                }}
              />
              <path
                d="M884.369 472L1042 536.741L857.261 722L792 564.629L884.369 472Z"
                stroke="black"
                fill="aqua"
                style={{
                  transform: 'translate(-50px,0)',
                  filter:'drop-shadow(1px 1px 3px black)',
                }}
              />
              <path
                d="M787.279 564.279L854.578 723.193L590.939 721.716L655.46 563.54L787.279 564.279Z"
                stroke="black"
                fill="azure"
                style={{
                  transform: 'translate(-50px,0)',
                  filter:'drop-shadow(1px 1px 3px black)',
                }}
              />
              <path
                d="M651.982 561.384L587.241 719.015L401.982 534.276L559.353 469.015L651.982 561.384Z"
                stroke="black"
                fill="bisque"
                style={{
                  transform: 'translate(-50px,0)',
                  filter:'drop-shadow(1px 1px 3px black)',
                }}
              />
              <path
                d="M556.22 466.377L398.98 532.06L398.612 270.432L556.036 335.563L556.22 466.377Z"
                stroke="black"
                fill="firebrick"
                style={{
                  transform: 'translate(-70px,0)',
                  filter:'drop-shadow(2px 4px 6px black)',
                }}
              />
            </g>
            <defs>
              <clipPath id="clip0_551_58">
                <rect width="1440" height="810" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Skills;
