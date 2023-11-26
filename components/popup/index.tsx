import React, { FC, useEffect, useRef } from "react";
import styles from "./popup.module.scss";
import { selectCurrentProjectData } from "@/store/project";
import { useSelector, useDispatch } from "react-redux";
import { setIsProjectSelected } from "@/store/project";
import {
    selectPropertiesBorderColor,
    selectPropertyTextStroke,
  } from "@/store/skills";
import { motion, useInView, animate } from "framer-motion";

const Popup = () => {
  const popupRef = useRef(null) as any;
  const backdropRef = useRef(null) as any;
  const bodyRef = useRef(null) as any;
  const isInView = useInView(popupRef)
  const dispatch = useDispatch();
  const projectData = useSelector(selectCurrentProjectData);
  const propertiesBorderColor = useSelector(selectPropertiesBorderColor);
  const propertyTextStroke = useSelector(selectPropertyTextStroke);

  const closePopup = () => {
    animate([
      [bodyRef.current, {x: '-300%'},{ duration: 1}],
      [backdropRef.current, {x: '-100%'},{delay:0.1, duration: 1, at:"<"}],
    ])
    setTimeout(() => {
      dispatch(setIsProjectSelected(false));
    },1300)
  };

  useEffect(()=>{
    if(isInView){
      animate([
        [backdropRef.current, {x: '0%'},{ duration: 1}],
        [bodyRef.current, {x: '0%'},{delay:0.1, duration: 1, at: '<'}]
      ])
    }
  },[isInView])

  return (
    <div className={styles["popup-container"]} ref={popupRef} style={{color: propertyTextStroke}}>
      <motion.div className={styles.backdrop} ref={backdropRef} initial={{x: '100%'}}/>
      <motion.div className={styles.body} ref={bodyRef} initial={{x: '300%'}}>
        <svg
          width="608"
          height="698"
          viewBox="0 0 608 698"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M299 1.88675C302.094 0.10042 305.906 0.100423 309 1.88675L602.109 171.113C605.203 172.9 607.109 176.201 607.109 179.774V518.227C607.109 521.799 605.203 525.1 602.109 526.887L309 696.113C305.906 697.9 302.094 697.9 299 696.113L5.89111 526.887C2.7971 525.1 0.891113 521.799 0.891113 518.226V179.773C0.891113 176.201 2.7971 172.9 5.89111 171.113L299 1.88675Z"
            fill={propertiesBorderColor}
          />
        </svg>
        <div
          className={styles.close}
          onClick={closePopup}
          style={{ backgroundColor: "white" }}
        >
          X
        </div>
        <h1>{projectData?.projectName}</h1>
        <a href={projectData?.link} target='_blank' style={{color: 'blue'}}>{projectData?.link}</a>
        <img src={`/images/projects/${projectData?.image}`} />
        <div className={styles.flex}>
          <div className={styles.grid}>
            <span>Project</span>
            <span>:</span>
            <span>{projectData?.projectType}</span>
          </div>
          <div className={styles.grid}>
            <span>Tools</span>
            <span>:</span>
            <span>
              {projectData?.tools.map((tool: any, index: number) => {
                return <img src={`/images/skills/${tool}`} key={index} />;
              })}
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Popup;
