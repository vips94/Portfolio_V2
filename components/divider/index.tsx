import React, { FC } from "react";
import styles from "./divider.module.scss";
import {
  selectPropertiesBorderColor,
  selectPropertiesBtnMaskColor,
} from "@/store/skills";
import { useSelector } from "react-redux";
import * as ReactDOMServer from "react-dom/server";

type DivideProps = {
  style?: any,
  color?: string;
  waveImage?: string;
  className?: string;
};

const Divider: FC<DivideProps> = (props) => {
  const { color='', style={}, className=''} = props;
  const propertiesBorderColor = useSelector(selectPropertiesBorderColor);

  // svg component
  function Wave() {
    return (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 162"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M209.99 90.0493C110.086 43.8065 66.8258 50.8014 0 90.0493V162H1441V90.0493C1327.81 143.469 1341.74 175.99 1105.32 90.0493C868.89 4.10814 868.107 -59.9422 700.798 90.0493C662.936 117.344 632.601 118.26 559.641 90.0493C497.848 59.4993 460.926 56.2724 388.556 90.0493C331.75 126.66 291.467 123.292 209.99 90.0493Z"
          fill={color !== '' ? color : propertiesBorderColor}
        />
      </svg>
    );
  }

  // magic parsing svg element as an string
  const svgString = encodeURIComponent(
    ReactDOMServer.renderToStaticMarkup(<Wave />)
  );

  return (
    <div className={`${styles.divider} ${className}`} style={style}>
      <div
        className={`${styles.wave} ${styles.wave1}`}
        //send parsed svg as an background image
        style={{ backgroundImage: `url("data:image/svg+xml,${svgString}")` }}
      />
      <div
        className={`${styles.wave} ${styles.wave2}`}
        style={{ backgroundImage: `url("data:image/svg+xml,${svgString}")` }}
      />
      <div
        className={`${styles.wave} ${styles.wave3}`}
        style={{ backgroundImage: `url("data:image/svg+xml,${svgString}")` }}
      />
      <div
        className={`${styles.wave} ${styles.wave4}`}
        style={{ backgroundImage: `url("data:image/svg+xml,${svgString}")` }}
      />
    </div>
  );
};

export default Divider;
