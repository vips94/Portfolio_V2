"use client";
import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import NavBar from "@/components/page-nav-bar";
import HomePage from "@/components/page-homeV2";
import React, { useEffect, useRef } from "react";
import Blob from "@/components/blob";
import Skills from "@/components/page-skillsV2";
import Thread from "@/components/thread";
import Projects from "@/components/page-projects";
import Popup from "@/components/popup";
import { useSelector } from "react-redux";
import { selectIsProjectSelected } from "@/store/project";
import ContactUs from "@/components/page-contact-us/index";
import Footer from "@/components/footer";
import ThemeOverlay from "@/components/page-overlay";
// import ThemeOverlay from "@/components/page-overlayV2";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import {
  selectPropertiesBorderColor,
  selectPropertyTextStroke,
  selectCurrentPropertiesIndex,
} from "@/store/skills";
import Experience from "@/components/page-experience";
import AboutMe from "@/components/page-about-me";
import Lenis from "@studio-freight/lenis";

export default function Home() {
  const pageRefs = useRef([]) as any;
  const mainRef = useRef(null) as any;
  const isProjectSelected = useSelector(selectIsProjectSelected);
  const propertiesBorderColor = useSelector(selectPropertiesBorderColor);
  const propertyTextStroke = useSelector(selectPropertyTextStroke);
  const currentProertiesIndex = useSelector(selectCurrentPropertiesIndex);
  const mouseRef = useRef(null) as any;

  useEffect(() => {
    if (propertiesBorderColor) {
      const selector = document.querySelector("#main");
      const oldClassName = selector?.classList.item(1);
      if (oldClassName) selector?.classList.remove(oldClassName);
      selector?.classList.add(styles[`frame_${currentProertiesIndex}`]);
    }
  }, [propertiesBorderColor]);


  //page scroll themes 

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger)
  //   const _ref = pageRefs.current;
  //   let ctx = gsap.context(() => {
  //     console.log(_ref)
  //     _ref.forEach((panel:any) => {
  //       ScrollTrigger.create({
  //         scroller: "#main",
  //         trigger: panel,
  //         start: "top top",
  //         pin: true,
  //         // markers:true,
  //         pinSpacing: false,
  //         scrub: 1,
  //       });
  //     });
  //   })
  //   return () => ctx.revert();
  // }, []);

  // useEffect(() => {
  //   const lenis = new Lenis({
  //     content: mainRef.current,
  //     eventsTarget: mainRef.current,
  //     smoothWheel: true,
  //     smoothTouch: true,
  //     syncTouch: true,
  //   });

    
  //   function raf(time: any) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);
  // }, []);

  const mouseMoveHandle = (event: any) => {
    const  rect = mainRef.current.getBoundingClientRect()
    gsap.to(mouseRef.current, {
      x: event.pageX - mouseRef.current.offsetWidth / 2 - rect.left ,
      y: event.pageY - mouseRef.current.offsetHeight / 2 - rect.top +  mainRef.current.scrollTop,
      duration: 0.1,
      ease: "none",
    });
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <div
          className={styles.frame}
          id="main"
          onMouseMove={(e) => mouseMoveHandle(e)}
          ref={mainRef}
          data-scroll-container
        >
          <div
            ref={mouseRef}
            className={styles.pointer}
            style={{
              backgroundColor: propertiesBorderColor,
              filter: `drop-shadow(0px 0px 5px ${propertiesBorderColor})`,
              width: "10px",
              height: "10px",
            }}
          />
          {/* <Thread
            style={{ zIndex: 110, right: "2%" }}
            color="#e8ccc7"
            threadWidth={1}
          /> */}
          {/* <Blob
            style={{
              transform: "translate(-35%,750px)",
              top: "0",
              left: "0",
              zIndex: "1",
            }}
            image="/images/home/home-fg4.jpg"
          /> */}
          <ThemeOverlay />
          {/* <NavBar /> */}
          <HomePage ref={(el) => (pageRefs.current[0] = el)} />
          <AboutMe ref={(el) => (pageRefs.current[1] = el)} />
          <Experience ref={(el) => (pageRefs.current[2] = el)} />
          <Skills ref={(el) => (pageRefs.current[3] = el)} />
          <Projects ref={(el) => (pageRefs.current[4] = el)} />
          <ContactUs ref={(el) => (pageRefs.current[5] = el)} />
          <Footer ref={(el) => (pageRefs.current[6] = el)} />
          {isProjectSelected && <Popup />}
        </div>
      </main>
    </>
  );
}
