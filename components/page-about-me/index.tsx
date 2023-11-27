import React, { forwardRef } from "react";
import styles from "./aboutMe.module.scss";
import Title from "../title";
import Blob from "../blob";
import {
  selectPropertiesBorderColor,
  selectPropertyTextStroke,
} from "@/store/skills";
import { useSelector } from "react-redux";
import {motion} from 'framer-motion';

const AboutMe = forwardRef((props,ref:any) => {
  const propertiesBorderColor = useSelector(selectPropertiesBorderColor);
  const propertyTextStroke = useSelector(selectPropertyTextStroke);

  return (
    <section className={styles["aboutMe-section"]} ref={ref} id="aboutMe">
      <div className={styles.section}>
        <Title title="WHO AM I?" shadowTitle="BIOGRAPHY" style={{top: '20%'}}/>
        <div className={styles.container}>
          <div className={styles.profileContainer}>
            <Blob
              style={{
                zIndex: "5",
                left: "-5%",
                width: "500px",
                height: "500px",
              }}
              image="/images/profile1.jpg"
              imagePreserveAspectRatio="xMidYMid slice"
              imageX = '100'
              imageY = '-50'
              imageWidth="70%"
              imageHeight="150%"
              backgroundColor="#272727"
            />
            <div
              className={styles.textHolder}
              style={
                {
                  // color: propertiesBorderColor,
                  // boxShadow: `inset -5px -5px 9px ${propertiesBorderColor}, inset 5px 5px 9px ${propertiesBorderColor}`,
                }
              }
            >
              <div>
                <motion.h2
                  initial={{x: '100%', opacity: 0}}
                  whileInView={{x: 0, opacity: 1}}
                  transition={{duration: 0.5}}
                  viewport={{once: true}}
                  style={{
                    color: propertiesBorderColor,
                    // WebkitTextStroke: `1px rgb(110, 99, 99)`
                  }}
                >
                  simple dude who wants to create awesome stuff -
                </motion.h2>
                <br />
                <motion.p 
                initial={{x: '100%', opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{duration: 0.5, delay: 0.3}}
                viewport={{once: true}}
                >
                  Whether tackling coding challenges or diving into game
                  development, my focus is always on crafting simple and
                  intuitive solutions. I earned my B.Tech degree in Computer
                  Science from Bundelkhand University, Jhansi, in 2018—a journey
                  that laid the foundation for my passion. And here's the
                  exciting part—I thrive on self-learning, delving into the
                  realms of HTML, CSS, JS, and React. As a testament to my
                  journey, I proudly developed my own website, putting my coding
                  skills into action. It's not just about what I studied; it's
                  about the awesome journey of creating and mastering with every
                  line of code!
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default AboutMe;
