import React, { forwardRef } from "react";
import styles from "./experience.module.scss";
import Title from "../title";
import Timeline from "./timeline";

const Experience = forwardRef((props,ref:any) => {
  return (
    <section className={styles["experience-section"]} ref={ref} id="experience">
      <div className={styles.section}>
        <Title title="EXPERIENCE" shadowTitle="EXPERIENCE"/>
        <div className={styles.container}>
          <Timeline yearStart="2018" yearEnd="2019">
            <p className={styles.title}>ATECHNOS DIGITAL</p>
            <p className={styles.subtitle}>GAME DEVELOPER</p>
          </Timeline>
          <Timeline yearStart="2019" yearEnd="2021">
            <p className={styles.title}>YSECIT SOFTWARE</p>
            <p className={styles.subtitle}>GAME DEVELOPER</p>
          </Timeline>
          <Timeline yearStart="2021" yearEnd="PRESENT">
            <p className={styles.title}>CODECRAFT</p>
            <p className={styles.subtitle}>FRONTEND ENGINEER</p>
          </Timeline>
        </div>
      </div>
    </section>
  );
});

export default Experience;
