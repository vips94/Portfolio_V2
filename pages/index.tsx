"use client";
import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import NavBar from "@/components/nav-bar";
import HomePage from "@/components/home";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import DrawSVGPlugin from "gsap-trial/dist/DrawSVGPlugin";

export default function Home() {
  const thread = useRef(null) as any;
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();

    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);
    gsap.defaults({ ease: "none" });
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline(
        {
          scrollTrigger:{
            trigger: thread.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
            markers:true,
          }
        }
      ).from(thread.current, {
        drawSVG: 0,
        duration: 4,
      });
    });
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`} id="main">
        <div className={styles.thread}>
          <svg
            width="206"
            height="2420"
            viewBox="0 0 206 2420"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              ref={thread}
              d="M99 0V411.5H83V460.5H45V379L94.5 341.5L150.5 379L154 460.5H114.5V411.5V1118.5L205 1177.5V1249H182.5V1193.5L170.5 1185.5L145.5 1201.5V1249L99 1277L45.5 1249L47 1204L99 1229.5V1938.5V1973C102.136 1960.1 108.411 1956.5 122 1952H182C181.894 2001.48 185.389 2028.77 195 2077H119C106.365 2082.84 102.05 2087.24 99 2097C94.2305 2087.31 90.1843 2082.67 78.5 2077H1.5C9.79232 2028.12 12.9057 2000.74 14 1952H78.5C88.8548 1955.73 92.6806 1959.06 95.5 1967.5L92.5 2419.5"
              stroke="red"
              strokeWidth='10px'
            />
          </svg>
        </div>
        <NavBar />
        <HomePage />
      </main>
    </>
  );
}
