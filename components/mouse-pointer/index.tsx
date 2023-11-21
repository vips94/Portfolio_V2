import React,{forwardRef, useEffect, useRef} from 'react';
import styles from './mousePointer.module.scss';
import { useSelector } from "react-redux";
import {
    selectPropertiesBorderColor,
    selectPropertyTextStroke,
  } from "@/store/skills";

const MousePointer = forwardRef((ref:any) => {
    const mouseRef = useRef(null) as any;
    const propertiesBorderColor = useSelector(selectPropertiesBorderColor);
    const propertyTextStroke = useSelector(selectPropertyTextStroke);

    useEffect(()=>{

    },[])

    return (
        <div ref={ref} className={styles.pointer} style={{backgroundColor:propertiesBorderColor, width: '50px', height:'50px', border: `1px solid rgb(110, 99, 99)`}}>
            
        </div>
    );
});

export default MousePointer;