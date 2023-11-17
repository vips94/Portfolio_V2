'use client';
import React, { FC } from "react";
import styles from "./hexagon.module.scss";
import { useSelector } from "react-redux";
import { selectPropertiesBorderColor, selectPropertiesBtnMaskColor, selectPropertiesTextColor, selectPropertiesMaskOpacity, selectPropertyTextStroke } from "@/store/skills";

type HexagonProps = {
  image: string;
  title: string;
  containerClassName: string;
};

const Hexagon: FC<HexagonProps> = (props) => {
  const { image, title, containerClassName } = props;
  const propertiesBorderColor = useSelector(selectPropertiesBorderColor);
  const propertiesBtnMaskColor = useSelector(selectPropertiesBtnMaskColor);
  const propertiesTextColor = useSelector(selectPropertiesTextColor);
  const propertiesMaskOpacity = useSelector(selectPropertiesMaskOpacity);
  const propertyTextStroke = useSelector(selectPropertyTextStroke)

  console.log(propertyTextStroke)

  return (
    <div className={`${styles.hexagon} ${styles[containerClassName]}`}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 260 298"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        // style={{ transitionDelay: '1s'}}
      >
        <path
          d="M125 1.88675C128.094 0.100422 131.906 0.100423 135 1.88675L254.904 71.1133C257.998 72.8996 259.904 76.2008 259.904 79.7735V218.227C259.904 221.799 257.998 225.1 254.904 226.887L135 296.113C131.906 297.9 128.094 297.9 125 296.113L5.09619 226.887C2.00218 225.1 0.0961914 221.799 0.0961914 218.226V79.7735C0.0961914 76.2008 2.00218 72.8996 5.09619 71.1132L125 1.88675Z"
          fill={propertiesBorderColor || '#DBFF00'}
        />
      </svg>
      <span
        className={`${styles.mask}`}
        style={{ backgroundImage: `url(${image})`}}
      />
      <button className={`${styles.btn}`} style={{ backgroundColor: propertiesBtnMaskColor, color: propertiesTextColor, opacity: `${propertiesMaskOpacity}`, WebkitTextStroke:`1px ${propertyTextStroke}`}} onClick={() => console.log("hi")}>
        {title}
      </button>
    </div>
  );
};

export default Hexagon;
