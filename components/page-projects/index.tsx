import React from "react";
import styles from "./projects.module.scss";
import Title from "../title";
import Hexagon from "../shapes/hexagon";

const MAX_HEXGON_ROW = 5;
const list = [
  [1, 2, 3, 4],
  [5, 6, 7],
  [8, 9, 10, 11],
  [12, 13, 14],
  [15, 16, 17, 18],
  [19, 20, 21],
];
const Projects = () => {
  const Rows = () => {
    return (
      <>
        {list.map((row_list, index) => {
          return (
            <div className={styles.row} key={index} style={{marginTop:`${-63}px`}}>
              {row_list.map((_, index: number) => {
                return <Hexagon />;
              })}
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div className={styles["project-section"]}>
      <div className={styles.section}>
        <Title title="MY PROJECTS" shadowTitle="MY PROJECTS" />
        <div className={styles["project-list-container"]}>
          <div className={styles["project-list"]}>
            <Rows />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
