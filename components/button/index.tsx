import React, { FC } from "react";
import styles from "./button.module.scss";
import { useSelector } from "react-redux";
import { selectPropertiesBorderColor } from "@/store/skills";
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
  return (
    <motion.div
      className={`${styles["button-container"]} ${styles[containerClassName]}`}
      initial={{x:-100}}
      whileInView={{x:0}}
      transition={{duration:0.5}}
      viewport={{once:true}}
    >
      <span className={`${styles.mask} ${styles[maskClassName]}`}>
        {btnName}
      </span>
      <button
        className={`${styles.btn} ${styles[extraClassName]}`}
        type="button"
        name="Hover"
        style={{ background: propertiesBorderColor }}
      >
        {children}
      </button>
    </motion.div>
  );
};

export default CustomButton;
