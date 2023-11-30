import React, { useEffect, useRef, useState } from "react";
import styles from "./navBar.module.scss";
import Link from "next/link";
import gsap from "gsap";
import Lottie from "lottie-web";
import avatarAnimation2 from "@/public/lottieFiles/wired-lineal-268-avatar-man.json";
import menuAnimation from "@/public/lottieFiles/menu.json";
import { useSelector } from "react-redux";
import {
  selectPropertiesBorderColor,
  selectPropertiesBtnMaskColor,
  selectPropertyTextStroke,
  selectCurrentPropertiesIndex,
} from "@/store/skills";
import Divider from "../divider";

let currentActiveSection = 0;
let mobile = null as any;
const NavBar = () => {
  const container = useRef(null) as any;
  const hand = useRef(null) as any;
  const waveref = useRef(null) as any;
  const menuRef = useRef(null) as any;
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const propertiesBorderColor = useSelector(selectPropertiesBorderColor);
  const propertiesBtnMaskColor = useSelector(selectPropertiesBtnMaskColor);
  const propertyTextStroke = useSelector(selectPropertyTextStroke);
  const currentProertiesIndex = useSelector(selectCurrentPropertiesIndex);

  let anim = null as any;
  let menuAni = null as any;
  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();
      timeline.from(`.${styles["nav-loader"]}`, {
        y: "-200%",
        duration: 1,
        ease: "bounce.out",
        // delay:0.7
      });
      timeline.from(
        container.current,
        {
          y: "-110%",
          duration: 1,
          ease: "bounce.out",
        },
        "<=0.5"
      );
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
    anim = Lottie.loadAnimation({
      name: "avatarAnim",
      container: container.current,
      renderer: "svg",
      autoplay: false,
      loop: false,
      animationData: avatarAnimation2,
    });

    menuAni = Lottie.loadAnimation({
      name: "menuAnim",
      container: hand.current,
      renderer: "svg",
      autoplay: false,
      loop: false,
      animationData: menuAnimation,
    });

    return() => {
      Lottie.destroy();
    }
  }, [isMobile]);

  const resizeProjectList = (e: any) => {
    if (mobile.matches) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    const timeline = gsap.timeline();
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
        .to(`.${styles.Mlink}`, {
          opacity: 0,
          duration: 0.2,
          y: "-200px",
          ease: "power1.out",
        })
        .to(
          waveref.current,
          {
            height: "3vh",
            duration: 0.5,
            ease: "power1.out",
          },
          "<"
        );
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

  const avaterAnimatonUpdate = (direction: any = 1) => {
    Lottie.setDirection(direction);
    Lottie.setSpeed(2);

    if (direction == 1) {
      anim?.goToAndPlay(0, true, "avatarAnim");
      anim?.addEventListener("loopComplete", () => {
        anim?.stop();
      });
    }
  };

  const toggleMenu = (isTrue: boolean) => {
    setShowMenu(isTrue);
    console.log(menuAni)
    if (isTrue) {
      menuAni?.playSegments([0, 15], true);
    } else {
      menuAni?.playSegments([16, 30], true);
    }
  };

  const scrollToPage = (e: any) => {
    e.preventDefault();

    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const DesktopNavBar = () => {
    return (
      <div
        className={styles["nav-loader"]}
        // style={{ backgroundColor: propertiesBorderColor }}
      >
        <nav
          className={styles["nav-section"]}
          // style={{ backgroundColor: 'white' }}
        >
          <div className={styles.left}>
            <div className={styles.avatar}>
              <div
                ref={container}
                onMouseEnter={() => avaterAnimatonUpdate()}
                onMouseLeave={() => avaterAnimatonUpdate(-1)}
              />
            </div>
            {/* <div className={styles['salutation-area']}>
                        Hi
                        <div ref={hand}/>
                    </div> */}
          </div>

          <div className={styles.right} style={{ color: "#444" }}>
            <Link href={"#home"} className={styles.link} onClick={scrollToPage}>
              Home
            </Link>
            <Link
              href={"#aboutMe"}
              className={styles.link}
              onClick={scrollToPage}
            >
              About Me
            </Link>
            <Link
              href={"#experience"}
              className={styles.link}
              onClick={scrollToPage}
            >
              Experience
            </Link>
            <Link
              href={"#skills"}
              className={styles.link}
              onClick={scrollToPage}
            >
              Skills
            </Link>
            <Link
              href={"#projects"}
              className={styles.link}
              onClick={scrollToPage}
            >
              Projects
            </Link>
            <Link
              href={"#contact"}
              className={styles.link}
              onClick={scrollToPage}
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
        <div
          className={styles.breadcrumb}
          ref={hand}
          onClick={() => toggleMenu(!showMenu)}
        />
      )}
      {isMobile && <MobileNavBar />}
      {!isMobile && <DesktopNavBar />}
    </div>
  );
};

export default NavBar;
