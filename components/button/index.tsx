import React, { FC } from "react";
import styles from "./button.module.scss";
import { useSelector } from "react-redux";
import { selectPropertiesBorderColor, selectPropertiesBtnMaskColor, selectPropertyTextStroke } from "@/store/skills";
import {motion} from 'framer-motion';

type CustomButtonProps = {
  children: any;
  containerClassName: string;
  extraClassName: string;
  maskClassName: string;
  btnName: string;
};

const CustomButton: FC<CustomButtonProps> = (props) => {
  const {
    children,
    containerClassName,
    extraClassName,
    btnName,
    maskClassName,
  } = props;
  const propertiesBorderColor = useSelector(selectPropertiesBorderColor);
  const propertiesBtnMaskColor = useSelector(selectPropertiesBtnMaskColor);
  const propertyTextStroke = useSelector(selectPropertyTextStroke);
  return (
    <motion.div
      className={`${styles["button-container"]} ${styles[containerClassName]}`}
      initial={{x:-100, opacity: 0}}
      whileInView={{x:0, opacity: 1}}
      transition={{duration:0.5}}
      viewport={{once:true}}
      style={{ border: `2px solid ${propertiesBorderColor}` }}
    >
      <span className={`${styles.mask} ${styles[maskClassName]}`} style={{color: '#6e6363' }}>
        {btnName}
      </span>
      <button
        className={`${styles.btn} ${styles[extraClassName]}`}
        type="button"
        name="Hover"
        style={{ background: propertiesBtnMaskColor,color: propertyTextStroke }}
      >
        {children}
      </button>
    </motion.div>
  );
};

export default CustomButton;
