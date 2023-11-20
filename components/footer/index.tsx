import React from 'react';
import styles from './footer.module.scss';
import {
    selectPropertiesBorderColor,
    selectPropertiesBtnMaskColor,
    selectPropertiesTextColor,
    selectPropertiesMaskOpacity,
    selectPropertyTextStroke,
  } from "@/store/skills";
import { useSelector } from 'react-redux';

const Footer = () => {

    const propertiesBorderColor = useSelector(selectPropertiesBorderColor);
    const propertiesBtnMaskColor = useSelector(selectPropertiesBtnMaskColor);
    const propertiesTextColor = useSelector(selectPropertiesTextColor);
    const propertiesMaskOpacity = useSelector(selectPropertiesMaskOpacity);
    const propertyTextStroke = useSelector(selectPropertyTextStroke);

    return (
        <div className={styles.footerSection} style={{backgroundColor:propertiesBorderColor}}>

        </div>
    );
};

export default Footer;