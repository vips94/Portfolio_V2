"use-client";
import React,{FC, useEffect, useRef} from 'react';
import styles from './timeline.module.scss';
import gsap from 'gsap';
import { useSelector } from "react-redux";
import {
  selectPropertiesBorderColor,
  selectPropertiesBtnMaskColor,
  selectPropertyTextStroke,
} from "@/store/skills";
import { motion, animate, useInView } from "framer-motion";

type TimeLineProps = {
    children: any,
    yearStart: string,
    yearEnd: string,
}

const Timeline:FC<TimeLineProps> = (props) => {
    const {children, yearStart, yearEnd} = props;
    const timelineRef = useRef(null) as any;
    const isInView = useInView(timelineRef);

    const left = useRef(null) as any;
    const right = useRef(null) as any;

    const propertiesBorderColor = useSelector(selectPropertiesBorderColor);
    const propertiesBtnMaskColor = useSelector(selectPropertiesBtnMaskColor);
    const propertyTextStroke = useSelector(selectPropertyTextStroke);

    useEffect(()=>{
       if(isInView){
        console.log('hi')
        animate([
            [left.current, {x:0},{duration: 1, type: 'spring'}],
            [right.current, {x:0}, {duration: 1, type: 'spring', at: "<"}]
        ])
       }
    },[isInView])

    const playAnimation = () => {
        const timeLine = gsap.timeline({duration: 0.3});
        timeLine.to(
            left.current,{
                x: '-80%',
                // ease: "back.out(2.5)"
                ease: "bounce.out",
                // ease: "elastic.out(1,0.5)",
            }
        )
        .to(
            right.current,{
                x: '80%',
                // ease: "back.out(2.5)"
                ease: "bounce.out",
                // ease: "elastic.out(1,0.5)",
            },'<'
        )
    }

    const returnAnimation = () => {
        const timeLine = gsap.timeline({duration: 0.3});
        timeLine.to(
            left.current,{
                x: '0',
            }
        )
        .to(
            right.current,{
                x: '0',
            },'<'
        )
    }

    return (
        <div className={styles.itemContainer} onMouseEnter={playAnimation} onMouseLeave={returnAnimation}>
            <motion.div className={styles.base} ref={timelineRef}>
                <motion.div initial={{x:'-80%'}} className={styles.left} ref={left} style={{color: propertiesBorderColor, borderColor: propertiesBtnMaskColor}}>{yearStart}<span style={{backgroundColor: propertiesBorderColor}}/></motion.div>
                <div className={styles.content} style={{backgroundColor: propertiesBorderColor, color: propertyTextStroke}}>
                    {children}
                </div>
                <motion.div initial={{x:'80%'}} className={styles.right}  ref={right} style={{color: propertiesBorderColor, borderColor: propertiesBtnMaskColor}}>{yearEnd}<span style={{backgroundColor: propertiesBorderColor}}/></motion.div>
            </motion.div>
        </div>
    );
};

export default Timeline;