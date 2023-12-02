import React, { useEffect, useRef, useState } from "react";
import styles from "./navBar.module.scss";
import Link from "next/link";
import gsap from "gsap";
import menuAnimation from "@/public/lottieFiles/menu.json";
import { useSelector } from "react-redux";
import {
  selectPropertiesBorderColor,
  selectCurrentPropertiesIndex,
} from "@/store/skills";
import Divider from "../divider";
import Lottie from "lottie-react";
import DownloadButton from "../download-button";
import { selectIsAssetLoaded } from "@/store/website";

let currentActiveSection = 0;
let mobile = null as any;
const NavBar = () => {
  const hamburgerRef = useRef(null) as any;
  const waveref = useRef(null) as any;
  const menuRef = useRef(null) as any;
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const propertiesBorderColor = useSelector(selectPropertiesBorderColor);
  const currentProertiesIndex = useSelector(selectCurrentPropertiesIndex);
  const isAssetLoaded = useSelector(selectIsAssetLoaded)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();
      if (timeline) {
        timeline.from(`.${styles["nav-loader"]}`, {
          y: "-200%",
          duration: 1,
          ease: "bounce.out",
          // delay:0.7
        });
        timeline.from(
          `.${styles.link}`,
          {
            stagger: 0.1,
            duration: 1,
            y: "-100%",
            ease: "bounce.out",
          },
          "<"
        );
      }
    });

    mobile = window?.matchMedia("(max-width: 1024px)");
    resizeProjectList(mobile);

    mobile.addEventListener("change", resizeProjectList);

    return () => {
      ctx.revert();
      mobile.removeEventListener("change", resizeProjectList);
    };
  }, []);

  useEffect(() => {
    const timeline = gsap.timeline();
    if (timeline) {
      if (showMenu) {
        timeline
          .to(waveref.current, {
            height: "50vh",
            duration: 1,
            ease: "power1.out",
          })
          .to(
            menuRef.current,
            {
              y: "0%",
              duration: 0.8,
              ease: "power1.out",
            },
            "<"
          )
          .from(
            `.${styles.Mlink}`,
            {
              opacity: 0,
              stagger: 0.1,
              duration: 0.3,
              y: "-200px",
              ease: "power1.out",
            },
            "<"
          );
      } else {
        timeline
          .to(
            waveref.current,
            {
              height: "3vh",
              duration: 0.3,
              ease: "power1.out",
            },
            "<"
          );
      }
    }
  }, [showMenu, isMobile]);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(`.${styles.link}`);
    const frame = document.getElementById("main");

    let currentSection = "home";
    if (!frame) return;
    sections.forEach((section, i) => {
      if (frame.scrollTop >= section.offsetTop) {
        currentSection = section.id;
      }
    });
    navLinks.forEach((link, i) => {
      if (link.getAttribute("href")?.includes(currentSection)) {
        const oldClassName = link?.classList.item(1);
        if (oldClassName) link?.classList.remove(oldClassName);
        link.classList.add(`${styles[`active_${currentProertiesIndex}`]}`);
      }
    });

    frame?.addEventListener("scroll", () => {
      sections.forEach((section, i) => {
        if (frame.scrollTop >= section.offsetTop) {
          currentSection = section.id;
          currentActiveSection = i;
        }
      });

      navLinks.forEach((link, i) => {
        if (link.getAttribute("href")?.includes(currentSection)) {
          const oldClassName = link?.classList.item(1);
          if (oldClassName) link?.classList.remove(oldClassName);
          link.classList.add(`${styles[`active_${currentProertiesIndex}`]}`);
        } else {
          link.classList.remove(`${styles[`active_${currentProertiesIndex}`]}`);
        }
      });
    });
  }, [currentProertiesIndex]);

  useEffect(() => {
    if(isAssetLoaded){
      gsap.fromTo(`.${styles.background}`,{
        y: "-100px",
        duration: 0.5,
      },{y: "0px",
      duration: 0.5,})
    }
  },[isAssetLoaded])

  const resizeProjectList = (e: any) => {
    if (mobile.matches) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  const toggleMenu = (isTrue: boolean) => {
    setShowMenu(isTrue);
    if (isTrue) {
      hamburgerRef.current.playSegments([0, 15], true, "menuAnim");
    } else {
      hamburgerRef.current.playSegments([16, 0], true, "menuAnim");
    }
  };

  const scrollToPage = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    
    const cor = elem?.getBoundingClientRect() as any;
    if(elem?.id !== 'contact')
    elem?.scrollIntoView({
      block: "center",
      behavior: 'smooth',
    });
    else{
      elem?.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  const DesktopNavBar = () => {
    return (
      <div className={styles["nav-loader"]}>
        <nav className={styles["nav-section"]}>
          <div className={styles.right} style={{ color: "#444" }}>
            <Link href={"#home"} className={styles.link} onClick={scrollToPage} id="mouseHover">
              Home
            </Link>
            <Link
              href={"#aboutMe"}
              className={styles.link}
              onClick={scrollToPage}
              id="mouseHover"
            >
              About Me
            </Link>
            <Link
              href={"#experience"}
              className={styles.link}
              onClick={scrollToPage}
              id="mouseHover"
            >
              Experience
            </Link>
            <Link
              href={"#skills"}
              className={styles.link}
              onClick={scrollToPage}
              id="mouseHover"
            >
              Skills
            </Link>
            <Link
              href={"#projects"}
              className={styles.link}
              onClick={scrollToPage}
              id="mouseHover"
            >
              Projects
            </Link>
            <Link
              href={"#contact"}
              className={styles.link}
              onClick={scrollToPage}
              id="mouseHover"
            >
              Contact Me
            </Link>
          </div>
        </nav>
      </div>
    );
  };

  const MobileNavBar = () => {
    return (
      <div className={styles["mobile-nav-loader"]} ref={menuRef}>
        <nav className={styles["mobile-nav-section"]}>
          <div className={styles.right} style={{ color: "white" }}>
            <Link
              href={"#home"}
              className={styles.Mlink}
              onClick={scrollToPage}
            >
              Home
            </Link>
            <Link
              href={"#aboutMe"}
              className={styles.Mlink}
              onClick={scrollToPage}
            >
              About Me
            </Link>
            <Link
              href={"#experience"}
              className={styles.Mlink}
              onClick={scrollToPage}
            >
              Experience
            </Link>
            <Link
              href={"#skills"}
              className={styles.Mlink}
              onClick={scrollToPage}
            >
              Skills
            </Link>
            <Link
              href={"#projects"}
              className={styles.Mlink}
              onClick={scrollToPage}
            >
              Projects
            </Link>
            <Link
              href={"#contact"}
              className={styles.Mlink}
              onClick={scrollToPage}
            >
              Contact Me
            </Link>
          </div>
          {showMenu && <DownloadButton className={styles.download}/>}
        </nav>
      </div>
    );
  };

  return (
    <div className={styles.headerSection}>
      <div className={styles.background}>
        <div
          className={styles["home-header"]}
          style={{ backgroundColor: propertiesBorderColor }}
          ref={waveref}
        >
          <Divider className={styles.wave} />
        </div>
      </div>
      {isMobile && (
        <Lottie
          lottieRef={hamburgerRef}
          animationData={menuAnimation}
          className={styles.breadcrumb}
          loop={false}
          autoplay={false}
          onClick={() => toggleMenu(!showMenu)}
        />
      )}
      {isMobile && showMenu && <MobileNavBar />}
      {!isMobile && <DesktopNavBar />}
    </div>
  );
};

export default NavBar;
