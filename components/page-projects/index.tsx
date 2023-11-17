import React from "react";
import styles from "./projects.module.scss";
import Title from "../title";
import Hexagon from "../shapes/hexagon";

const MARGIN_TOP = -63;
const list = [
  [
    { image: "to-do1.png", title: "1", projectName: "To-Do" },
    { image: "world-clock.png", title: "2", projectName: "World Clock" },
    { image: "brain-on-draw.png", title: "3", projectName: "Brain On Draw" },
    { image: "two-planes.png", title: "4", projectName: "Two-Planes" },
  ],
  [
    { image: "the-stack.png", title: "5", projectName: "The Stack" },
    { image: "save-me.png", title: "6", projectName: "SAVE ME" },
    { image: "rolling-ball.png", title: "7", projectName: "Rolling Ball" },
  ],
  [
    { image: "to-do1.png", title: "8", projectName: "7 Wonders" },
    { image: "world-clock.png", title: "9", projectName: "World Clock" },
    { image: "brain-on-draw.png", title: "10", projectName: "Brain On Draw" },
    { image: "two-planes.png", title: "11", projectName: "Two-Planes" },
  ],
];
const Projects = () => {
  const Rows = () => {
    return (
      <>
        {list.map((row_list, index) => {
          return (
            <div
              className={styles.row}
              key={index}
              style={{ marginTop: `${MARGIN_TOP}px` }}
            >
              {row_list.map((item, index: number) => {
                return (
                  <Hexagon
                    key = { index }
                    image={`/images/projects/${item.image}`}
                    title={`${item.title}`}
                    containerClassName="hexagon-1"
                  />
                );
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
