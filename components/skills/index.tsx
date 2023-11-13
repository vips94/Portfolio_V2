
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
const ROTATE_BY=10;

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

  const playAnimation = (index: number)=>{
    const rotate = -getRotation(index)
    setActiveIndex(index);
    animate(circle.current, { rotate: rotate }, { duration: 1, ease: easeInOut })
  }

  const getRotation = (index:number) => {
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
          initial={{ rotateZ:'60deg' }}
          whileInView={{ rotateZ:'0deg' }}
          animate={{}}
          transition={{ delay:1,duration: 2, ease: easeInOut}}
          viewport={{once:true}}
        >
          {skillsList.map((skill: any, i: number) => {
            return (
              <div
                className={styles.item}
                key={i}
                ref={(el) => (refs.current[i] = el)}
              >
                <div className={styles.first} />
                <div className={`${styles.second} ${activeIndex===i?styles.active:''}`} onClick={()=>playAnimation(i)}>
                  <h4>{skill.skillName}</h4>
                </div>
              </div>
            );
          })}
        </motion.div>
        <div className={styles.card}>

        </div>
        <div className={styles.navigation}>
          {skillsList.map((skill: any, i: number) => {
            return (
              <div
                className={styles.item}
                key={i}
                ref={(el) => (refs.current[i] = el)}
              >
                <div className={styles.first} />
                <div className={`${styles.second} ${activeIndex===i?styles.active:''}`} onClick={()=>playAnimation(i)}>
                  <h4>{skill.skillName}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
