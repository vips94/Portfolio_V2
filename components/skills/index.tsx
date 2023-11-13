import React, { useEffect, useRef } from "react";
import styles from "./skills.module.scss";
import { isEven } from "@/utility";

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
    skillName: "UNITY: GAME ENGINE",
  },
];

const Skills = () => {
  const refs = useRef([]) as any;

  useEffect(() => {
    console.log(refs.current)
    refs.current.forEach((_:any,i:number) => {
        const length = refs.current.length;
        const mid = isEven(length) ? length/2-1 : (length-1)/2;
        const rotation = (i-mid)*10
        refs.current[i].style.transform = `translate(0, -50%) rotate(${rotation}deg)`;
    });
  }, []);

  return (
    <div className={styles["skill-section"]}>
      <div className={styles.section}>
        <div className={styles.circle}>
          {skillsList.map((skill: any, i: number) => {
            return (
              <div className={styles.item} key={i} ref={(el) => (refs.current[i] = el)}>
                <div className={styles.first}/>
                <div className={styles.second}>
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