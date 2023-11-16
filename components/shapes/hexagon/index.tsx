import React, { FC } from "react";
import styles from "./hexagon.module.scss";

type HexagonProps = {
    // style:any
};

const Hexagon: FC<HexagonProps> = (props) => {
    // const {style} = props
  return (
    <div className={styles.hexagon}></div>  
  );
};

export default Hexagon;
