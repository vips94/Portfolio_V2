"use client";
import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import NavBar from "@/components/nav-bar";
import HomePage from "@/components/home";
import React, { useEffect, useRef } from "react";
import Blob from "@/components/blob";
import Skills from "@/components/skills";
import Divider from "@/components/divider";
import Thread from "@/components/thread";

export default function Home() {
 
  useEffect(() => {
    (async () => {
      //to smooth the scrolling 
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
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
        {/* <Thread/> */}
        {/* <Blob style={{transform: 'translate(-33%,33%)', bottom:'0', left:'0'}} image='/images/home/home-fg1.jpg'/> */}
        {/* <NavBar /> */}
        <HomePage />
        <Skills/>
        <Divider/>
      </main>
    </>
  );
}
