"use-client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./skills.module.scss";
import { getMidPoint } from "@/utility";
import { motion, easeInOut, animate, cubicBezier } from "framer-motion";

const MOVE_BY = 50;

const skillsList = [
  {
    skillName: "HTML",
    x: -MOVE_BY,
    y: 0,
    color: "#FF8577",
  },
  {
    skillName: "CSS",
    x: -MOVE_BY,
    y: MOVE_BY,
    color: "#FF00FF",
  },
  {
    skillName: "SASS",
    x: 0,
    y: MOVE_BY,
    color: "#DADADA",
  },
  {
    skillName: "JAVASCRIPT",
    x: MOVE_BY,
    y: MOVE_BY,
    color: "#A259FF",
  },
  {
    skillName: "REACT",
    x: MOVE_BY,
    y: 0,
    color: "#0FA958",
  },
  {
    skillName: "REDUX",
    x: MOVE_BY,
    y: -MOVE_BY,
    color: "#0099FF",
  },
  {
    skillName: "NEXT JS",
    x: 0,
    y: -MOVE_BY,
    color: "#5551FF",
  },
  {
    skillName: "UNITY:ENGINE",
    x: -MOVE_BY,
    y: -MOVE_BY,
    color: "#FFC700",
  },
];
const ROTATE_NAVIGATOR_BY = 10;
const ROTATE_TAB_BY = 45;

const Skills = () => {
  const refs = useRef([]) as any;
  const tabRefs = useRef([]) as any;
  const card = useRef(null) as any;
  const circle = useRef(null) as any;
  const circleSvg = useRef(null) as any;
  const [activeIndex, setActiveIndex] = useState() as any;

  useEffect(() => {
    refs.current.forEach((_: any, i: number) => {
      refs.current[
        i
      ].style.transform = `translate(0, -50%) rotate(${getDirection(
        i,
        ROTATE_NAVIGATOR_BY
      )}deg)`;
    });
    const length = refs.current.length;
    const mid = getMidPoint(length);
    setActiveIndex(mid);
  }, []);

  const playAnimation = (index: number) => {
    const rotateNavigator = -getDirection(index, ROTATE_NAVIGATOR_BY);

    animate([
      //tab return sequence
      [
        tabRefs.current[activeIndex],
        { x: 0, y: 0, scale: 1 },
        { duration: 0.5, ease: easeInOut },
      ],
      //navigator sequence
      [
        circle.current,
        { rotate: rotateNavigator },
        { duration: 0.5, ease: cubicBezier(0.35, 0.17, 0.3, 0.86), at: "<" },
      ],
      //tab rotate sequence
      [
        circleSvg.current,
        { rotate: ROTATE_TAB_BY * index },
        { duration: 0.5, ease: cubicBezier(0.35, 0.17, 0.3, 0.86), at: "<" },
      ],
      //tab forward sequence
      [
        tabRefs.current[index],
        { x: skillsList[index].x, y: skillsList[index].y, scale: 1.2 },
        { duration: 0.5, ease: cubicBezier(0.35, 0.17, 0.3, 0.86) },
      ],
    ]);
    setActiveIndex(index);
  };

  const getDirection = (index: number, rotateBy: number) => {
    const length = refs.current.length;
    const mid = getMidPoint(length);
    const rotation = (index - mid) * rotateBy;
    return rotation;
  };

  return (
    <div className={styles["skill-section"]}>
      <div className={styles.section}>
        <div className={styles.dot}>
          {skillsList.map((skill: any, i: number) => {
            return (
              <motion.div
                initial={{ x: "-200%" }}
                whileInView={{ x: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.2 * i,
                  ease: cubicBezier(0.35, 0.17, 0.3, 0.86),
                }}
                viewport={{ once: true }}
                className={`${styles.second} ${
                  activeIndex === i ? styles.active : ""
                }`}
                onClick={() => playAnimation(i)}
              />
            );
          })}
        </div>
        <div className={styles.tab}>
          <motion.svg
            ref={circleSvg}
            className={styles["circle-svg"]}
            initial={{ rotate: 180 }}
            whileInView={{ rotate: 0 }}
            transition={{
              delay: 1,
              duration: 2,
              ease: cubicBezier(0.35, 0.17, 0.3, 0.86),
            }}
            viewport={{ once: true }}
            width="810"
            height="810"
            viewBox="0 0 1400 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <motion.path
                ref={(el) => (tabRefs.current[7] = el)}
                d="M559.748 339.825L440.291 291.058C433.666 288.354 431.943 279.769 437.011 274.717L579.338 132.85C584.372 127.832 592.889 129.521 595.626 136.082L645.083 254.624C646.646 258.371 645.789 262.691 642.914 265.557L570.588 337.649C567.74 340.488 563.47 341.345 559.748 339.825Z"
                fill={skillsList[7].color}
              />
              <motion.path
                ref={(el) => (tabRefs.current[6] = el)}
                d="M648.233 254.123L598.487 134.863C595.739 128.275 600.565 121.008 607.693 120.998L809.124 120.715C816.25 120.705 821.096 127.954 818.372 134.548L769.043 253.947C767.5 257.684 763.862 260.123 759.824 260.129L657.467 260.273C653.432 260.278 649.788 257.852 648.233 254.123Z"
                fill={skillsList[6].color}
              />
              <motion.path
                ref={(el) => (tabRefs.current[5] = el)}
                d="M772.868 256.21L821.61 137.533C824.321 130.934 832.87 129.214 837.922 134.251L979.725 275.656C984.775 280.692 983.082 289.243 976.495 291.975L858.013 341.108C854.281 342.656 849.983 341.806 847.122 338.952L775.057 267.09C772.197 264.238 771.334 259.946 772.868 256.21Z"
                fill={skillsList[5].color}
              />
              <motion.path
                ref={(el) => (tabRefs.current[4] = el)}
                d="M860.233 344.702L979.322 294.885C985.9 292.133 993.157 296.966 993.167 304.105L993.45 505.825C993.46 512.961 986.222 517.814 979.637 515.086L860.409 465.686C856.677 464.14 854.242 460.497 854.236 456.454L854.092 353.95C854.087 349.909 856.509 346.26 860.233 344.702Z"
                fill={skillsList[4].color}
              />
              <motion.path
                ref={(el) => (tabRefs.current[3] = el)}
                d="M860.484 468.894L979.221 517.956C985.794 520.672 987.511 529.187 982.505 534.238L841.036 676.965C836 682.045 827.414 680.35 824.688 673.736L775.529 554.477C773.997 550.758 774.841 546.483 777.673 543.626L849.563 471.096C852.42 468.214 856.734 467.344 860.484 468.894Z"
                fill={skillsList[3].color}
              />
              <motion.path
                ref={(el) => (tabRefs.current[2] = el)}
                d="M770.83 554.227L821.865 674.91C824.665 681.531 819.787 688.86 812.607 688.82L609.401 687.679C602.326 687.64 597.532 680.453 600.204 673.893L649.132 553.771C650.674 549.986 654.359 547.521 658.441 547.543L761.685 548.123C765.677 548.145 769.273 550.546 770.83 554.227Z"
                fill={skillsList[2].color}
              />
              <motion.path
                ref={(el) => (tabRefs.current[1] = el)}
                d="M646.493 550.744L597.381 671.042C594.676 677.667 586.092 679.39 581.04 674.322L438.185 531.01C433.167 525.975 434.857 517.459 441.418 514.721L560.798 464.916C564.545 463.353 568.865 464.21 571.731 467.086L644.317 539.904C647.155 542.752 648.013 547.022 646.493 550.744Z"
                fill={skillsList[1].color}
              />
              <motion.path
                ref={(el) => (tabRefs.current[0] = el)}
                d="M548.767 464.024L429.678 513.841C423.1 516.593 415.844 511.76 415.834 504.622L415.55 302.902C415.54 295.765 422.779 290.912 429.364 293.641L548.592 343.04C552.323 344.586 554.759 348.229 554.764 352.273L554.908 454.776C554.914 458.818 552.491 462.466 548.767 464.024Z"
                fill={skillsList[0].color}
              />
            </g>
            <rect
              x="559.993"
              y="185.797"
              width="96"
              height="96"
              transform="rotate(45 559.993 185.797)"
              fill="url(#pattern0)"
            />
            <rect
              x="762"
              y="134.999"
              width="100"
              height="100"
              transform="rotate(90 762 134.999)"
              fill="url(#pattern1)"
            />
            <rect
              x="931.932"
              y="255.093"
              width="100"
              height="100"
              transform="rotate(135 931.932 255.093)"
              fill="url(#pattern2)"
            />
            <rect
              x="977.001"
              y="455"
              width="100"
              height="100"
              transform="rotate(180 977.001 455)"
              fill="url(#pattern3)"
            />
            <rect
              x="861.221"
              y="625.617"
              width="100"
              height="100"
              transform="rotate(-135 861.221 625.617)"
              fill="url(#pattern4)"
            />
            <rect
              x="658.001"
              y="671"
              width="100"
              height="100"
              transform="rotate(-90 658.001 671)"
              fill="url(#pattern5)"
            />
            <rect
              x="484.333"
              y="549.957"
              width="100"
              height="100"
              transform="rotate(-45 484.333 549.957)"
              fill="url(#pattern6)"
            />
            <rect
              x="434"
              y="352"
              width="100"
              height="100"
              fill="url(#pattern7)"
            />
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use href="#image0_556_9" transform="scale(0.0104167)" />
              </pattern>
              <pattern
                id="pattern1"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use href="#image1_556_9" transform="scale(0.01)" />
              </pattern>
              <pattern
                id="pattern2"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use href="#image2_556_9" transform="scale(0.01)" />
              </pattern>
              <pattern
                id="pattern3"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use href="#image3_556_9" transform="scale(0.01)" />
              </pattern>
              <pattern
                id="pattern4"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use href="#image4_556_9" transform="scale(0.01)" />
              </pattern>
              <pattern
                id="pattern5"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use href="#image5_556_9" transform="scale(0.01)" />
              </pattern>
              <pattern
                id="pattern6"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use href="#image6_556_9" transform="scale(0.00390625)" />
              </pattern>
              <pattern
                id="pattern7"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use href="#image7_556_9" transform="scale(0.01)" />
              </pattern>
              <image
                id="image0_556_9"
                width="96"
                height="96"
                href="data:image/png;base64,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"
              />
              <image
                id="image1_556_9"
                width="100"
                height="100"
                href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAATe0lEQVR4nO1deUwcTXafJIoUJRsl2Wy0m0ORkiiJciiRNlISRbkv7R9JpPzxJdkkyq5WkVeme/D92Z/BgAFjju7hNmCY7hnu2xzmvo8PzOUDG2xO24CNjW3AgMHGR0Wvhu6unq45ei7gy5T0xB81U93zfrx679U7ymAIjuAIjuAIjuAIjuAIjn0YKaG53+QZMYJnxXqOEduCJOrmAc8I1zlGjIk3Xv0Vr8BIYsS/5llxnWdFFCTRex4wwhbHmP/JIzBMxwt+kWeF1SAQom//GRlhy3TU/Ou6AeFYIVJahDuWj2Izv0TR5rEDS2L91IElc/kdlHyqSAaFY4VkDwARG6QFYjMHUFjniwNNlYvoQJNQM6kAwgj9ugEBRSQtEJM7su8MDzvkgFhb5khABvUDwgo5soSkdKNo8SaKzh9H4R1aZoS3PMWgRZU/oDIr4voCir46hCJq5ujz1bN4/kLjEnU+qmQSxeSNoPC2Z9pnd6ygi5ZbyNo8iyoXPmkYUTH/Hol191FBzxKVUaX33yCh+h4qHn1JnS+5uYrnS+9tUucL+p/i//7y2Xfa+QWErG3zyNI4jYTKcXLLqtYNCMcK56UFks5XyosBKPZMiUtosT3IaEERtQ8184lfVNjmTxShsLbndmA+wToK5hMiajTfjayclp99ydSlmY82j8rzlutTGqbkmAds80YRFQ9rJSkj7jqeN50oQOUzaqZWPPyAkk/b9v60yGtasG6tI95owfPZV3q0UtE2L79bZkIjodyFDP2AGMX/khE9qSgkUO72TEkIr5LnowrvauZJKwOkRcXwakKUTxRqGS7ekucTLtZp5i+ldMvzudYhDVMyE5vkeWvjjGaeVLYlo6/U0jOxqXp3++/mdz6W59JiajXzeaXKu6eGVRBblhimGxATK/yF/DKh1q8EIJamwAJiLlHePeVsqfI7jcIPdAOSEmr9VZodHQQEeQRI8slChY8h4nd0A1L+WfmPcay4aw9INMXiio+uVySkYloznyRteUYrNgDIuQvXFxBntH038Vy5VqEX3ZPXjr/crJmPzdrTEayI7X17pmSld8rz+d2Lmvm08D39aBRR6cSWag4UNR9q0xHJn5dovls0+EzREVyLZl6sVUxdE7HLJB61/IHBk8Gz4iOZGdH1WKnSLJ2Ia/PoclwTZg7VSiqeRJdjG1G05RZ1PsY8iuIvNaLI8inK/AqKTe9Hly83o4i6R1QLL45rRzm5X1ItnZLx1yg7vQvlFY1RrbCigWWUldKOLPUP6OZq0yy6ktKOCnopVtoCQuay2ygrrQMV31qlWng55kGUnalsq3jLOpLzDQ8BEXpkyRDGnPoB+02V++xnOCNsjSlHJ++QAf2Ip4Dky7ojo2/fmR52SAEp7HtKSsgjg6cDjoylheIS2/ad6WGHFBBL0yzpFA54AYjwv7IOiazdd6aHHVJAhAqVl17pDSD/IFsGZ0r3nelhhxSQXMsQ6RSmewGI9bcUZ8aCwjrUxx4HiSoPAOMdUVZmFykh5z0GJPJ74k9wrPBJ9rIb1F62OwQmcXxUHeKOKXb4YSPTsXyUEd+IikfoB5CuCL6rACJ+32NAbFIiPlOcPpqf4JjCm54g7njBvjOU9xGBt132YFs3IKmS8wngGi3/6CUgwpDsizhw7BwRHKnvNxN5HxMcxesFxHTcdpoNlBSa9/teAcKzYrm0WOyVQV2AwLmX9N1rV+rRy7mJQ0m12bYjeiDs8esAA470VaCeyP26t4AkSYvFcR36JES8Kb9IUUIV2l2bP5RUkVIj/w6x9r4uQEpurSn6gxHfeuylK4AIrLRgfPR1XYCQwaWM0wX7zthdD0mIKpN/R0HXgi5ACvqeKNLBCPMGbwfHWP5FWjDxXIU+pd5CvAwrovXFB/vO3F0PKO2EogOKx9QxE1cEQTGvkhu0EmL+Q3nBY1ZqTN0ZcUQAaP7mzX1n7q5Oer00pfqnosbOnZCZ8NJ5RqzwGpDkY+LPki8EpqweQBKiauXv3mzt33cG7+qkpYlxldmr18K6Kt4gJSTVa0BsUqKkk0ZUzegCJI4nAkSXKlCLtfmAUQuaGhh2CMiDgWH5/dOitIkOrghiMTIgrHjOJ4BwrDguLRpVoM06cUYxV5UfdFApOdSC1hbuUwEZaeqTP3cluU2/l365gXiW5X98Aghkvsu+SM6QPkurakYO0R5kWpm5RwWks6RN/gykFNGY3vvsIxp68ZHupZ9Xsk1MrPnvfQSIkCEtGpeszY1yRVGlkzjAFZvuP8otHNVFV/MUpxXi6dsrM1RASKeQFrNvW/6ENt68Q2+236HOZ3Yh4gU7L91o/l0fASKekRaF2LdeQAJBlTq3kqLB58pWdLbQoQ4pjFfOoSAdlFyjZgmh5Y1dhN6+xbSyuYvqlxRQyqffqqTw8tGin/MJIKYQy79JiyaGVX0lALG2KvlgBZcrHQKSfU4x2yHLhLbW3Pp7tLi+q/XSb66SFta2wVcjKcT8J/LCJ7XJbIcREIHwD2qu1FPB2Hkxi7cz6XNldmlCEoFUND3VZrRApoosIYww6zNAEkPEb5GiF966fOgByTEPyr+no7iNCsiL2QmFoaEWVPGYrrgdEWRKEnzr8xkgcCDGs8KOtLijLPbDBEhWsmI9DTX0UgGZG1MOR1POl+t+BhgB8s7CCmUGXw6eEaelxaOKJ/zO4PCGBWyduUuFfU90UdoFJR/5fj/dMbzTqWRFQtRPLyBXhRveVU05G7iadG9xqNXwJxiRldOII1Iv/U2Ld+9QAemvVrxsWrmBSylMU04pOFb83MeACHnS4pfSev0KSOwV5T/T32QyWtDG0ykqIM2WZvlzeYWjugGRak9sZP5vnwKyV6tus6fjW9zfero8ACRTcdrST+aj3IhSv5A5qhQN1vW4F5iq0xeYAgK9IzuFrPC3PgXExAjfkxanVTrRiB94hXrnNrwCpNHctG8nvWYiMEXLnHdK4KXvVYYBJR+1/o5PAdlrImBD+3SxW4y992QTfdh+i0wDrw4lIKlkYIqS3e6Myqd2VFtj/JGcn/EtIGz+r8kKyihqagXtKWv4Ffq0d6RwZ2nz0AHy2i4wVTGn9cSdEUQWCYX+xuDrkXMk58c5Vvgg+yKUWg2J0m68Qsuv3shnPABM3eQ6utB1eABZIgNTp4p06w+o+iUAmTH4Y/CMuCj7IqX3NYxM6H+Jhh9voo87NiDs6cXaNioZXz8UgNz/UonjpEfX6AYESqEVCRN6/AIIBOmlh0CKD8nEqO6XaGp5iwoESdubO8g8tnrgARlu6JXfASqo9Hvpt0mnsMQ/gLBikfSQ2Mx+KjOFsVXVdiURKPeBhxsopvflgTB7hYtl2BN3BIg6MDXo1VkZz4q8vwCJkx4Sl9TukKGgK24uKtLydmsHm8AHzTHMPOM4V6w2S3Hq4GRYt5ee2qFICCOc9gsgPCv8UDbjorQ14yTF9b1Eb9/sYEDapjf0J9gZ/X90knWuyL3AVKs6MOUOpV9SKpN5RvhP/wASIn5Hekji2TKXjO2YeY02NnbQxR7X25RGyhoW/XK4mJs/IjMKmO5eYOq5bkBSCS+dN1r+xi+AgLcpi2EoJM2tOGUqAFF4e003GGEekCdH4rAtuROYKp3c0umlf1J1v0g+lvfbfgEk50jOT5IiD//FgWB2mA8BkZvRsCJW3DRAVlSBKSuqfKyNBjqjsqlt1daYcCbvpw3+GjwrvpAeBHu9pwyElkyQiRLHd1DpkqnbYTsobwCB3Crp/cG0dRWYgjQevdsV9EwhnMJNv4GBAWGEUelhF/NvewQGfM9dpR3nZjm228o2SjnBBefPVWAK2irpBaSge5F0Cqf8DIhYJT0sJltfAQ+mjueIO12syxqKcEMS3WWWiWgCs3SPHpjqq1YCS9lZvboBgb5dBCBd/gbEJD3sEt+pG5ALTeoSha7SdtRd3qEh4aJy9O0O8O4wCjeTIZ4NB4g0QJrEJo8rprDhUEp66WKRvwE5LvsiMfoKeIDC2yBBzdZhBwhKxmhM6S5rR+44oXoAIU9gU49b0e4q3eQtT1a2NUdNadw1HKACzc+AWP5V9kW+qPRIhyR+rjTzmh4apTLldofyoxLdCIi5tbd3LchrQvDJkQ8CkUTpc456NToj6C4kSwgjnPQrICZG+Lb8sGP5HgECkiWtMXSdbuksjBNif7wARRWOY+nyCJDHH3EDGDgklNaE8CwVkFV1YApqBPUCkkF46Rxr/q5fAUlnrD+v8kWa9RXwAMWl9Mjfh0QCGmM2l8njawWYywmtuKlZeLsaHJq+yG+dR9mZPao2fq6eu75oVzGlMzAFlPKFov94o/mvDP4ePCNuyL5I9axuQKD3lvwfmFTtcOuoySLOg+zBOVGIdQvkiAE4Uo9EsWYSZXLNKk/ZntJO5qPH47epzwTLS/pc8uli3WCAl052j0sIFX4zEIBMyL4IpemlK4KOEO5knr9bnUNTN0bQ9dxGlH4q3wk4Rbi6yZnpDEq8Kr0O3Wr7EkuBO4EpWh9FVwSdHsjnZoRkfC0AgAiNskl6dVi/pWVn+joyP3ftzpemb4yghrxGHCNxxnwSbPj8ZN8Q2npOr/9wFpgC5awXEOiHQij014ZADI4VsmRfJKXbI8UuN8ZkRfTo9i23mLW7R9srCjiw/ZAgQPCpvbAVzY2Oobev5nStC9RZrByt5Io3dANCWnI8I9wPECDiOdkXiWv2zNKKVGx92Eb0Mm53j948n0GTvUNorKUfvZib9HgdamCq6q5uQOA2BAUQsSNAgJi/K/sI4dUeAQKdRKU1YG9/9dB7ZnpFqzaFnhep+CDQKlwvIGSvXo4RCwIDiFH4M/mhp4o8AoTsg2IzD239UKA0YPURvSLW14S3vuFRXBqdfd7ufA36+N7dwEyuWkSoddm9I3iydpFjhMSAAML/0PLL5MvTevm6VOztz7F0URWyUUTFiVW4JNlRubKnBAbEeOcANqnt9Q9JZMXtyMoHtLb1DgPjChDS+UxizScCAkhkZOSPQv9Z6cERNdobEdwCpe0Zis0aRInnlVoNnpKdXspVo9Hmfo97pazMTKAb9T3Y5zHtdaqmUqgFH7dbG6flpsvXlhDa3n6HcwMclT6TlB5Tp0gIK/y7IVCDY8U56cHQudoTQEiKqJ3H6T+JRF03DRyQnOHGXrTmBBzwXyDzsL+qCxXEOV4Pr3miAP9XgzK27xYH9eevt2xgAEEC4Pz6e1WlrcZLJ5ruw4UGgQOEETqlB8MdHt4CogKnZg+cc07ACVXAAUdve89PgXYZZIICjVLOlqCc7F5solY8+kBlbM+zj+jdNj3Z7+H6e/r29Rhi6YoEJhotvxE4QFjRIj0YerP7EpAwguBoBhoDJBH/efaUfMyCPXFnIKTH1mELCDeyXHDPYqp9gtD02nsZiPWtd6hr2fG2Bbf1kM9MOpX/UwEERLgoPTguodVvgIRRJCfpLHF451CCrCgjvgEJ1yY0tx7opeebuzhhvN2FpVU8otyVwjHCWsDAwIAYhR/IzmGkewU8PgcnvQ8lnSlRJOV0McrK6MI3Gujta+WMoH0GbFOuPpev8tLFicACEiL+nSyaZ0oCDkiYTCvYICgeW9WdriOl7EB1FPx19jmwtlytZal7EHgv3dENPHAxy2GpUy8df41yrcO4zEBKiAPrCO778EaSsrOVg0mOEbMNgR5kvUhshv8Ue0TtQ3x1nrMOEm4z7vEndQCJIG90DSh0MqPF51W3eq+zgDwrX/gjYRRdIeVwQfoqJHlDFgpcJkYm0amYM7mFnTuoLYeriEDZkoDYRxDhBjVPGiRLBPoqI0HJVOFY4aVfsxUdDWg3xDHCUxIUuBYJmOgrQKKIO6jsiTtdgqOGFwvGsU8B/Q3TIrXHMRBBJBkIXX2umgdxD96SO689B2LmLXYo5XuspPcKMR817NfgQsx/Djcg2zMBMksgbwsiil41q+l4juJSulXdTfUSXBfhjW5QpOsjvrMKcrVwuQHlGAb8M6+bJXs7eNbyx9Ak2CFTjFaUcLEexebc8KJxzQpuFwgXJUOdPFyf4QyE1AtVWApw42PKZWB67o+COD0cr6h1hB0x4nueFWLhdjvDQRhwtcVeF+xh8ooL6lZzphS3LcepPR5KT3jLE7xVQWI2mN3ALNAX2BF0cG+tW9vQ1A4u0MnO6UepXxA1Hg5JWOYYMdPnjQF8OVKN5l/gWfEz2wXHwrJTcIwWfAwPHnhE9azuRs0YnI4XHvkgQNADCy4mhmMVfFLrQvKgMxxuxMMIZ7lQyx/t+/bkyVE9vDj+AfiHgGg7+cGnivCdhXA1Rniz+hJKZ6TLRL27gZUxePWqGzgdvRMrzkETZOgqCjuB4as09hLt9qRHfOKW9KT37V066bhiyxkAZQ92UH7bQxzNc3cbgms6OMZyJIHJ+yXD/5dhLz0c5apXqvSYxzR3r6u2oYcfbPWEhaN725BLCXhzqLchfw3+RO7XeUb8DzAdyauWHEkPWFuge8A4KOh8jOsHryQ1q7rw0AHALUJugGObFGL5S2gbst+//VAMU4jl9xTdo4SMPSFbhBNvk595fctNcBgMEOwxGYV/3mPqghsAbJLbUJCHfh483GvCCGdxX3pGnOBY4RaU23GseIE3in96YBy04AiO4AgOw1d2/B+lO65Q9hOOuwAAAABJRU5ErkJggg=="
              />
              <image
                id="image2_556_9"
                width="100"
                height="100"
                href="data:image/png;base64,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"
              />
              <image
                id="image3_556_9"
                width="100"
                height="100"
                href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAASAElEQVR4nO1deUxcSXrvTTZSlOwqt5JNokhJlGsTJVEiZbWJsptb+0cSKX9MNpusstEq8sq81/iY8djxzBjvzviku8EGG/qq6m5ooIHmMAbb2AZz2BgMPsDcN9jjGR8Ye+wGvFEq+l5T79V7r14D3f2axu6SPglR/b6vqn51fV999ZXFkkmZlEmZlEmZlEmZlEmbkPKz3b9oF/ABu4gbbAK+mCG84TawC+isTcAfHrW6fjUhMHIF/Fd2ES/aRUwyhBNvAwG9sAnef4wLDMfOki/ZRbSQAQIntzMK6IVju/c3NgyITUQ5lMnJnZi0+dyktzJDvXG0QWfARQp2IxkUm4jy4gAEN1IG7T43iQwUZWgg/jboLncpgAioc8OAwEJEGXSXZwCJJNgh79SqAOnaOCAiclIGF51u0lftIgN1LhLp1wtb7IMe4CbjF1zcwnzaVUy6gi5yr72Ymz/b6pTyH3fz80eaXORGhYs8u6XPe9lfRG6FXeR2jUv6W5sP38C3o41OLu9H16NlgzLw8u+1RfM/vcYv29h5p9T7oQ10+f1FpL/OKbXd1RI3O2XVbBgQm4j2Uwa+A8r8J4GiEVyf75HyHFZM7nfoC47ej35f+DYmzzWN+rS3iJzYGeUd/NCr+3b6slOWfb7Io8vvrVR6Xl+lvmznTkfLZrdiMnNZ3+ilP/DK6+TTXnXZoayFb0fLjj9Aum/vtzulOkP+mXx92QAMWrbyQ1E5UUKFGwfEiv+DMjj1jgIILO5awb6DirDBBn2jsLsMGC1s3nyrUuiC3fpK3wwrDV5xWA/YRZfS8+BvbT58Q/NvVevLxi62UBbtyGbLrv0W6ip32oP6skFb0Xz3/zCLuoDf2zAgDhH9JWWQv0Nh1o7TF5BLXh9ZHvOrqOKoIvt2vT4fRi3Nv3dVnfeoz68qu/bbofM+BhB92aGtaH7RHgYQK/ruhgHJz/b/Gm8fndaA+INkZb5GRRXHSxRAzlXo8gvfVhr1fm+VKu/xYLWq7Npvh1tCcp7/wwBZmggaAlKwSwHEnoW/sWFAKt+q/FGbiF9pAenh7LhCRxRApi7q5+nC1Skvz4p1i99DmBZW52HPe3pAhs8qgNU59IB0+JVKX60s1zVaXUGpnD96pVKX73l/dRRYMXkyWK3Kez4RJo7s6Len3/Xrvp3uqpR5h2wl0v+WhpT26alQOlPeKh+g49t9f2iJJ9lFPCMLPOKVFlXtokx3IjV2j9Q42jwg2OFU53qlnRAvvzfkImGbh0w068GEnVOr10PqHB7yoFO/YVjsKyZNhR5y3h2UGlDbaJ/2V5P6glLSFiwjy3PqPKCpa5WkJr+E9DXoRw/QnXMhEs4vJePtejBX5mpIZ6ic1J4sIR/fio6upVGs2uFBm9FNjzxlbXP+fJyAoLZYO5h0ohVOY24GRYb5uzEZEAGtEAv5XLyABCijKyi9lcOVNABDO2WxugozQmYs8SYwGVNGDSf0++x0opV0AeSufloFxVWerkR0LQFA0H9TRmUf6RfUdKKVdJmyOGXTaOnViQDy95SRc59+bkwnWkkDMFZmq7hlu+hUFnWbgAsSAMT/25QRmAhecGxF6UIrmw3GfA1Znglxy1aXxwAiov1xA5LzHfzjNhH9H2UGOsNmN3wknQGZLOOWrewQexaC/ytuQKKjBH9CmU1ylL50oZV0AGSilFs2934FEIfV9w8JAoK6ZdODgWKXDrSSBoAsjQW4ZTvB2AJzsz1/kBAgdhFXUmZGmngy6XrQTbzvIalXGRE+gMiI5nyDbZjR1hDxHQwQ9/t+08h7IEC6a9SmmqVRn64+YNJXmZ92uX82UUByKbOmU+bqIs9vFUn2Lp5RU0sAihEgAMZ6eCRKsNF5OaWYayLDetXgfpuiFNoEvBy3lq4AgkTKsPKouYAs9ml6Uwxy7TMGxLVfbTY3jayYRGYVuZEh/ZQ+ek5lNpmyJJpsgu+fKUOYSlIJyMi1HjLZ2ydT99n2DQMC37A8EqXe850ybzDds3IjA/pNDxyKJeTcoB8h3j+iDGFx4p2pmwXIZw/GyKunUzJN3by5YUDgG5ZHojTW3SvzhnVEljsX5tapk9HS7QKuShiQvB34p9lGetJT/EYDcqflmsy7/Gj0DCSWlt5czJhNBHQiYUCio0RxJ+U5CrxJgHSdaZN5w+GXrINMV3DrBIdqMiAi3pcUQGwi7qdMB+pfD0BePhwnzz8e09Hy48mYgLRWXJJ5X/AqR8bLU3wtHTxplDr5/jMpgIDnO2XaFXRveUDO+84nZZfVXl62ppYO5aS/d4jev0sSIKiQMm0u9mxpQF4+HJfP8BOl3jOKYrg05tfXqV/xOQPKtXq/nCRA8B7KFM6+tzIgnz0YSwoYRXt9ZGFIUQqXRvR+W09vqOtzZHvwZ5ICiCPL96+UqS8HvVaAPB6sJs/Gwzp6MhgmjwaqDenltMaOxdHSwfmD2WFFLMlKuVner1DG4Fr5OgHynOOpEg9FBjlaepNKS59IGiDHs/AvsZWAhssAUqMGhHOWzjr52UXckTRAwCBmF9ESZW7kxf6mjpBlAy29I6A6Sw9ZkpnsAh6jzIcbzTkXWdyigKzMVHLrc6HIk9itqVhJuk26yhzuW2QAqVEAmeJr6bV2lZb+bpIBQR7KvMVjjnK4uEVHiNFZOr17EiXvt5MKyOpddYl5fZ45PlqLWxWQ8RJufcB1SlYKRfQ3SQXEIaDvUOaAfAaQmjW19PwdCvB52/2/l1RAVoMIRLXUd83RRRa36AhhPd4pLWi09KPbnD+VXEDEwK/LAqz6u4JvAiCfTYbJw/4qEplRf7M0rDcnzV9htHQRv7QkOzm3OX/MJqL/pUJ4dzW2OiDPJ8LSLaqRlhDpqS2XbmTB3Y/ARwFy6h3lphU+6FeZTrhaeiPj3CDicYsZyS7geSoEXOxfB0CqHCXE/wO4a6g0+Hrofl9VTC0drkIrv0dtpgACh/RUCAh8HQCxx0lglIyppTNX7WwiKjcHEBEHqZA2zuXPrQDI8pNJUrDb2G/rxE4/wd+vJOET9eSC/wLpqr9CBtuvk9GuG6rfvVj1x1o20NLhKhvze7tZgBymQs4WeLbsieHEjT7S4Gwkl0qbJTehoc5uMj9whyzOjxoe3T4YGZB5ntzFuP9Ml3PrUmNjryCgd0wBxC6i71EhFYe3LiCv4iDwyaI8wZVU0dLVV6EplbBauoD+3RxAsvA35ELtR28UIHfbrss8g4cDG9LS7VbfX5sCCGib7L1rXrCX1xWQnkbFaxKuUcfS0qFd2HvpeTs8v2MKIM5tzp9gGwwi6bwpgLRXXpZ5wp14GZAR/UzxpEcdveLYHs8XLWYlu4gfyZW95HwtAHnx6bi00HfUtJB651lys7kzpuvQldKy2Fo6Ey7EJuLPTANDAkRAvVTYndqtCcjCzLC0lYVdVuBQFXFka5RCKyaPJgZV39QUnpHz2XshkUF9G8DdFYUfGjUZEBymwsCRON0Bmey9ST4ZvUtuNl8ljZ4mSccw0kFY+ni4XyU7eDQs5w1cCCmAcOoBUS8YQFrNBsRBhUFwsHQHJG/H+kwiWtPJk+khlWz3gQo5b6JjNe7JbDW3HhCjkpmygmYDspMKqzqW/oDYYzi61ReWSkbE+d4qsjiqDsUE6wor++QuRbu/31cd8xq0HMUuSrkmA+L7FyqMF/aOUqvHLekqEEUI4qSAYwR48qUCkIpjatMIbEGDh0vIZX8ZGbocIk9H+FGDlN/7yKsFRW4E3E8ZfvT7ZYOzdPDulEeIgHabCohDQH9ChUGcQl6BtC6ULMEtLDC7QEim+StOlS6zmCRAwLPwIg5K8bMg/BJ7D9CI5nqqZN6n95aq5ML0xS74S7PhdWvpNtH7LVMBKRD8P6fqLZxeD3Gi1jNvAxXswvIo6mdCqSYCSDw03qYs9t6cCpXcuf7bClhMIDMjLb14L6ule79uMTvZBfycCpxr5U9DBbuVhg0eC5PifcF1g2RPESAw9QxeDJHG4lJyao+yqJcerVbJHbuuWHpxDmM2GTXQ0hnv+mPZ6LdSAcggFTh4hn8ugj5Qhi1UCCr2eGpIsgnB/r/kSPWaO6AXn4wnFRA4EYQ4ic3eIPF+YLzw151uUMm9c1m5xlZxrCSmlg6xh1lehVmFX0gBIKiJCoSL/jxA2DiMPM1XWiwfTZCZ27fI9YY2UnuqQTWKADDt7zcKCMz1M11VpKO8nJQdKZEW61gdADpIVX4deahRCuFMhP4GdmYy/yH9LhNmDGZBf2ZJRbKJqChWrFygsyeVnUZHuGXdNqMn00OSMgc7m3gBgePV2hOlpGD32joIOhiSRiyM4pearS6llvKL8u+bUTCmls4G7bQLaDhFgOB9VCi4Sxpte+lvwA6UDAPf1DoBKT1kfCIIOyg4nIJpaGF2eF1yz7qb5O87K8pjnqXDawgKIPhyigDxfosKDXAiOgNBLHj6m/DJ+pQC4mI19WwfKTselqade4P9ZGUh9qVOHsE0Rvn1nVmNXjpnoKUzsXptAi5JDSBW9OdU6Kk9fF3kbr1LNS0YTQdmAzLZl7j53X9I0VFAsYyppZ9S3Us/nhJA7N/z/Qo7DfBeLZi+pIrEqeuprCZsJiBTcZ6HwEi6d/cO6axtVZlNIHhyVEvnn6VDfGL621zRuyslgOTk5PwIxJ+lgiEurbZgoHWf3GW8mDrfKyMX/OeleCZau9GrTQIE7qmDWb7Re44UGehNYAWQdliasOKUYAqXR4iIvmlJVbKJeJIKNnqbA6I+QFRnNuA9j/J3+EjIXittf8G7I2WALEyR+0P95Gr9FWn06s5FNAQRshWlUB8bCwj8nunv4UGD1AEioBYqGN7w4BWO1V7hwRQIlxr8yCu/uWFERfuC0tnFUEe3SltPlqMc8G1C59a0HsA0C/FMrlWV6wL187a8UE+2bsetvt9MHSAi9lHBEJs9FiBaggA2EFz4TL5XDtRv2Cg7oqMH1p6+C51xAfJ4cpD0NLWTyrw6aTTGknf63ahZHmK+w/VonsK5PM4P5Qc+Biyv3LcDP5lCQND3qWDe6zLrJXb0hI541x1Rbr2AxPJSlKaVbEzKjgYky/C9G1VSgP1Y5hejEBpAsy0qLf1pysCQALGi71LhMA3FCwjvXsXtGhg9HmlLnSgg/FHgX3MUqGi2KgrEYOwj6yHmxR2w96UWkCz8t1Q4mJuTBUhEM3qmLxVLyhacMbDzc9VxdSdgGzDwoV83CsC5DZ6WmL9RxX22QkVzEG4pRJbGA1x7lRHBGU/KtXSjF3hSEWR5oSf6/Bw4V2gDqbENCodSsBifLQpKDgnPxtYeBcuz1dLlTbgNxQuovx5i7Xc2ARdbUp3sIp6jBWjb5OcsVuI4DwFtGw6ZNjIKjAgWdPaBsaTfut3ocxb52Vh6bzCdAVmeC0ujAB70itxNnk8ZPOPEPotnE9FjU70V14jHeF/eolqjbw1CrNq0AWR2dUEeSf7NYXiDEay7HiaUuARIlne7ZbOSQ8R/AS8g83ZB4A4z1OAkz26mEJC5sBRZQXKC5ihvidCLO0XSO1lw/q/dZCijA/sSDpacaLKLvj+zCWjaaJsJ0xnoGNdK3aYFrlkCAKRRkFz+YKeDowQwGsayzdkF/EOYwuF1O0s6JHjaYjUKdg/7xAWPnHujYcvvnnGaFuopEifB7g18lhsLPFI511ZS0QObgE/ZRPy7lnRNJ6zeX7CL+K3oA8foQUxN2Ro95AJdYxaePk3xozHwSM1kc7EUvwXKsZadDSLDSYF4BLTXlu37002fnuIx1UPBpQpIFcE/jKlF70HSm4Vg69I+Fpws+uRqsbQYgxzwC1trFIBlG4IgQ1RRmAksr1OCRxWV0aPs0GKNnhaPW+rF8d7YgmlooN4lneatZxpafcSm0ib4th0TPL9seVOSdvTYOE+9sgS2LejV0LuN3l4HgrAfENiATkNrhYWF0Bdbehoy1U1VwP9mE5CffWrJaPRAVCJ4IhvO78FhDy7rw+1gNgoPHwApRMh12BXlZvm+BmFDNrvuWyI5sny/v97Rs/Y0hD5efbn0rYRfuckkiwVcMh1W9E+ra49sQzPWC9ALdhrKtKGJiVjI5/Ky8B+Dwx5E+4R7jzYB37aJqAYi3+UJ/q/m5OR8PgNCJmVSJmWSxcz0/y+ZaDgqAY83AAAAAElFTkSuQmCC"
              />
              <image
                id="image4_556_9"
                width="100"
                height="100"
                href="data:image/png;base64,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"
              />
              <image
                id="image5_556_9"
                width="100"
                height="100"
                href="data:image/png;base64,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"
              />
              <image
                id="image6_556_9"
                width="256"
                height="256"
                href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH5QQXCCsJs6z9AgAAAwBQTFRFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAszD0iAAAAP90Uk5TAAECAwQFBgcICQoLDA0ODxAREhMUFRYXGBkaGxwdHh8gISIjJCUmJygpKissLS4vMDEyMzQ1Njc4OTo7PD0+P0BBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWltcXV5fYGFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6e3x9fn+AgYKDhIWGh4iJiouMjY6PkJGSk5SVlpeYmZqbnJ2en6ChoqOkpaanqKmqq6ytrq+wsbKztLW2t7i5uru8vb6/wMHCw8TFxsfIycrLzM3Oz9DR0tPU1dbX2Nna29zd3t/g4eLj5OXm5+jp6uvs7e7v8PHy8/T19vf4+fr7/P3+6wjZNQAAAAFiS0dE/6UH8sUAABGHSURBVHja5Z17YMxXFsfPTDKZjMiDkBdCiKQNrSbrWRSLltS7rWc9U6W1WKrxaEvZlbar1LseXUKp6moWi9XYlFYbFUsTJYgViUjzniTymsnM/M7+QSt+95dkZn6Pe2d8/+aXez5zH+ece++5AApKrWvuHxwaMXrq25s3J6akpORziIhYlZaSkpJ8aPPiaWMiwkNa+bqrwQnl0+6Z5ycs3nX0Up4ZG1BFxundsVMGdwvz0zqR8c27vxL76T/PFTRoel3l/fxN/OppvQKcwXhdVMyW45dyjGirzIWpidtn9fVy7H4/MO5sdkkt2iuTPudq/PjmDmm7psUTs07qOZRApUnzO/q7qxzJenVw/5lfFKBk4oqOxQ4JcRjzm3RdcCjLjBIr//C8Xh4OYL0qcNLui5UohypT901pxrr9bT9ILTKhXDIXX1nxBLvGu/oPPXiPQ3nFVXzZ149JV9Gt09R/VaASqkkYFaJhbtXr/PaZalRKxUfmhLswZX/w8uR7qKRKzr7P0HzoM/daBSqtyuRJTdno/G1eu8EhDRmTRvjTtz9g0rdGpKWahH6+dM33GLJLjxTFZW/sp6Po9XX4IMOMdGW8sqwlNQATL1cifZUnd6VivXvPBBOyoXubwxR3jFSBb9xEZmT6cYKPwgCe212CLCl/bSclzfecnWpCtmRMHKbcMAj+tAiZkzl7RQtlzG86Jo1DFmVJ7OKqhOu3NB9ZVeYYT9ntj9xRhewqd2kbec13GZRkQJZVuu8pOfPnmpeumpFtGb97Sj77vf9SgcyLKxogV3jUbr0ZHUGFc2SJkdVd9lWhYyhvpQyJElXUv2vQUVSyRvpN5ae/r0XH0b2EJhLvefQt4tCRZDnaWsrlUBudgQ4m48Ew6faPtCNSLY4GAKv3h0nVB1yjHdB+xOqDrSUC0DfDEe1HNB5tItH8hw4qyxEJZkJ1/+vosDJ+0Va0/T0Sax0XAJat9Rfr/yUa0ZFVEituHvA9UIuOreIZorb+vrCgo8vwgv2JQt0Sx7cf8Xp/e11C7ZQCJ7Afa493tjP/F32FcwYAWLXRzy4AT31nRudQ2Rx3e/L/Bzh0Ft0bbYcHvAydSFkdbAYQrXcmANx+W/OkT/+ITiX9fNv2jn331DoXAO7KYJt2gObq0cnEfd3e+tBY3S8NnU7Gv1p/sDRwHzqh8odbDeDtCmcEgOesdYciCpzSfjTNsTIG/JpzTgB4q5tVM2BMsZPaj6b91tzB7HTG4qwAMC+mcXfIc1UVOq9OhTe+C5LpxPZj9fzGVgLfzzhnBoBXG+sCI2vQubW2kct/SU5uP+pDGwQwzuDsALgdDdXmaJbMbMMLT+/atGLLzhTRtzPvNBAXq+eVsml96ZFoH3c3jaubmy5o9plKUfO0ebdbvQDanxbfVktJ3p0iiYOpzJhHFqrF4k5rXx1QbxpkjuhbILkn//bG5JdnLtp6plA6fzJv2qO/mdsScYmBes/QhZ4Q2dLKf7zU8f42lHvnsQcku1PyJf+oS8ssUd9L71XPDDBaZB6sem3Qwyvd6sBFUt0mX8Lf3XQ/LOp75npyQ/4JIhv6rfejzZwh0dmaPxPeymfiPng7TBDAC2KdwOf5cdW7FTIB2Cnyi8KZkb1iG0p0rLBjZjYBXBZaCUP0kgNwGZHNJgDuOQEAb3GSAwD31bVMAsB9pP3Nr6D0AMDnPJsAMiOJpr6ulwMAPJfPJICq1fxjMx77zLIA0K2sYREAJgbxvvlsKsoCQBV+gkkAWfwjE/Mq5QEArmNusQjAFPdocrD1QZQJAOjiKhkEgImPJAdVg+7IBgBaf8sxCKBkdN1p0D0W5QMAo8sYBIAb6kYuAcflBKDZwCKAS8F1vtixSE4A0OEygwAMfequAZysANTDS9gDgMvrfPEYygoAfOKq2QNwqU4cUCozAHj6tIU5ANzDWgujOLkBuIzPZQ4APsw1b0K5AYDHdhNzAL763Vu9LD8A8E1nDkD6b+nx7ncUAABDSlkDcPe3HZLZeiUANFlvYgxA+cIH39tuUgKAqtNpxgCY4++fGApMRCUAgGbKr2wBwFP3syL9ryoDADzWG9gC8GCb9NU8hQBAB/tO4MkGQP86AAAsrFYKAIwuZQqAebkaADw3omIANNuZAoBbvQEg5KhyACDsJlMAToYBQPdUBQG4TihjCcC1ZwFgaIlsALTkgayWWwwMASgZCqCegrIB6Nqf3IXtlmxhBwDO0oD7YvkAvHyoM3FRye31AoYArPAA7/UyAriznhwEPvtM7ACI9wW/QzIC+NU4gryr1vYGOwAS/CD4opwAMF3gaO6kCmYAXA+B0DxZARg2eZMxwWcmVgCUhEEEygoA82KIEh6qrhdYAYBRMFRmANz57mRtjllFrAAYC1NlBoDmbWQBi2bbjIwAmAZvyg0ADa+RdWwiz3NsAJgLa2UHgP+LIFeCKaVsANgCW+QHgJ+Tx7Ob7GEFQJICAMr/THaBJ28yASAJUhQAwKX/kXAIXSeWswAgRREAaD5IFn0P+Hvt4wMASxeRr2X2TmUCwGVFAGD6AKKimfvCEvoAMqBKGQCWU2QX8P3aTB2AAVAZAGh+j3whsdOv1AGgYgCwVOC22szqxwiA+XgwAaDpV48RACxfQUwD6j5XHiMAmDmSmAbc55U9RgC4U2ECVQvNjw8AxDXkWtjzEkcTgBFKlQRQHk2uBG9W0QSQAalKAsAfWhEAvBNoAlAqFvi9x20id0qeyn2MAGBeDLESaN4w0gPwE3ynLAD88Q8qWwNjOQEchL8rDMC0uYWtgbHj5wQfUdF40h1aXEoPwBqlAeCVQPJe1TcWSgAWQ4ziALiviGMTqh75lABMhbGKA8CqP5E7JQuNdAD0gyjlAXA/9yQAtDhBBYDpSQgrURwAGnYFEYHxwBs0AOR0gJDrygPAwhnENND03SoKAC4GQ6szFABwGd0Jd6htgkV5AIf8wPdzCgAQT5B75gOucooDWO8NHquoAMCF5EHipdWKA3hLCy4xdABkkgdHWhxXGoBprApgqJ4KAHOCQEwg3JQ1nnIB+HUQADx7jQoALHuHeARL+7ZgWJjZRyUTgPORABCeSAcA3hxJOIStvhRMkZ4MkgnA0RAA8NtDCQAeC+WvheoXhK9XLpUJwEZPANCuNlMCULOcyI95LBMMjHN6ygKgeqFUJZTsA4AFZGXDNoKBseVfLeUAkDP2gQNCCwD+SDx+o+pVKPQP9QtcZACQev8HCDpFDUDtVnKnJE5wRP4yUC05AO7k/dSMZp+FFgDMGUvkx1qeFXRZ9gZJDsDwyYPvvVdJDYAliXgKz2X4XaF/WTpXKzWA4skPvvdiHjUAWP0X4ji9V5ygO3QzQmoAtzv9donlKj0AWPIicXoq7IRQWMgd0UgMIPn34beHIgDMICv+jxJ85MEwUy0tgLjf/2AMTQC4S0dEe6uFihByqc9IW0VmyMNCUhxNAPpJRBcIEnzrrmZbCykBlD18csb1Ek0A3LlnCAIDBetQ5k9xkRDAsTp/7yOaANCw2YfYLFsl5A5xFyJVkgHg5tX5e30MNAFg4SwiKgr5RnBYbvORDEBRx7p7c8lUAeDl3mqi/ppgJc7yMZIBOB5QNwpdSRcAHiD+r9cHgtcrL7SWCkBs3aKiqpF6ugCqyCfS258VGgSmdVppANwZ9Eg2RpK8mAgAmEO4Q6rBgpcL77yilgTAwda8WddIF4D5kK+VgfHZLioJAFTO41f6yqALAPVLiNRAC8HC5DVrmkkA4Ep/vu91nKMLAK8O5q8ELi8LZoeyXtSJBmA+yH95UL3sHmUApgOtiYr3nwgGxkmBogE8KKFUV11uUQaAhvl8d0gVJbwSfCj6aNs18sQqbKMNAIv7EI2aIFjq0PyzWDf4fYESP5FG2gAwyZ/YJ9ggy+tvlU8KFTlKog7AsJJ4ErTjRTkA/FuwytNE6gDwFvk49CgZXoA0jBQEEHyWOgDL0fbEIPhU+kdwv2stCMB9gYE2AKz9K/8sAISelfoV1KrJrsKVzrokUweAOa/wG6cZlyMxgP88UU+pN907FdQB4Pl2hEe8sVpS+yve0dVX7C4qhT4A8waiWZ3PSToIUqLqr/a3qpI6ANSPIo5NTNRLaH/lKtf66x2GpNIHwP1E7pRsknAlSA1pqOJjLEcdAFZvbkncJ7gkmf1cbIMlLwMu0weA+a/xoyKXCYVSAcgKaLjo53QGAOD5CCsDYzv0RiNVT9t8zwAA8za+O6TqeV6aleCbVo0AUA+3v7MRO/0T7X68ZjLZNQuksL9wuLqxwrf+2+wOi//AP/i53O6GXu9I1F/bJcEgMO30b7z0b3+7X17cys/s2//QnGk3sRJ0Ev8iJKYPbNx+0K201yHOHfpoB1ggIs1YMo9IDUwWHwV9pLMCAPj9ZOf3LWnRD50slWammCfGuAu9+Q6h5z6x8+CFdmCV+tn9y+XHRflqAUClC+z7mch3K/YTQXu4SHfo3lCwUlvsb3vWjkUThg2b9s4/RL9eVjmXf7FKGyPOHdpprf0QLioxYMjLk2TNvkHcLvTfISZlk9bFagCaifnIgBKJKaubCE9dP93NagDQbK2BAQA1S4nNsll2T6zGrS3BBrU9bGaAQOZg4nZhvL0rVFInsEnPpzMAwHKEiN1D7dzFznnJNvtB87qFAQJl7/LLsbpMt2sQWN7X2AgAmn6JTAwC/jTQ0q6N0cQWYLPCJM/H2+MQfs+fulTPXrD9M7e72G4/qPv9wgABXKsRHxjnRqvtAABuU3MYAFA8mFij99oYGJcs9gS75LWinD4AyyniiYbu/7MtyfppINgpv3gGBkHVWn6myWWOTdPImXCwW83PM0Dg7st8d8j7iA3Nymqvsh8AhP7AgDuQHMkzQdXV+roft54DMVL1SWWAwEb+EULdHGtLv2RPdBMFALQj0uiPgtLRRPZ+v3Urwd15XiBS2tG59LvAZf7BEXV/q2KVijgfEC23afRDY3M8v9iCZqEVeTvTWi+QQtMLqRMoepPvEOoarcSJ99aBNNLNzqZO4EIvvjfbOasxB3CNt0QAwOtN6gSM2/l7Oq7zGy5HW/JRAEgmr9nUR0HxTP561vpAg/1/jYT2A+imU58Jc/hlqdUDGkiRmtZ5g7SafJO2P/Af/va7Zn697lDxxyC1XKMvGOkCMMzhF1vwq88dyp7fRHIAoO2XWEuXQHpffpt6CAbGlvQZXiCD1FEH6MYFxr38wN5VKDDm0obpQBapfI/SJVC2gG+ZN3nGn7sS7gpyyWNJPlUEd4bw3CFVd37arjy+Dcgo3bgLJpoETvLPOHnEPhITcDkr/EBWuT53hGYfML7Lb1CHw3Xaw/0y1QvkVugmmj5RLv9ilXponWfrEnu4gfxqPiePnk9kOcEfBG5xv52mr97QDpRR5NEKagSq1/F9HN39UmC1/x3nDkopaGUWNQK3x/FTA10LELH0826goNzGJVFbDRL5hyhd36vFa/N9QVG5dP64iBKAmlX8QdD24D8Hu4HCUnkNOkfpFEl5P/6vEdjKBSioyaJsOgHi7bbAhlx7x1NZEU2bvRghAH7TjlRTIJA32ZUVAi7t/5RGwR063QWYkfbJDwoUHweGv/kAQwr58FaN0gRiNCwRgKj1aYoisOR+7MkUAND1iUtTLE7msrePD1ABY/LsvuCSMm5B9rb+vsCitCETzsieK+DufhjpA+yq657Me/INhZrcxAksWw8AoI5YnHBdlqHAFf+w4QU3cAD5Dl6VWCC1+dWXd8Q8oQUHkXt49IpvJcwacZk7X+3RHBxJKo+gp5f/V5KhwOUfHt++mQs4ogIm7b2WU2b3pMgZim8nLu3dFBxZHn3nx5+5UWR7Aq0iM+XYJ5M7uYATKOT5GUu3nUy3/j5m/s+H180dEdkcnEg+Yb2GTV+26/iNhjHkXTy0/q0Jg7u1awJOKBdd84CQ8IhXp8Vu2X0uJSXl9v3ZwZiRkpKStGXL3KlDI0KD/by1Srr5/wf8zI8g78FpNgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wNC0yM1QwODo0MzowOSswMDowMJtdddoAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDQtMjNUMDg6NDM6MDkrMDA6MDDqAM1mAAAAAElFTkSuQmCC"
              />
              <image
                id="image7_556_9"
                width="100"
                height="100"
                href="data:image/png;base64,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"
              />
            </defs>
            {/* <defs>
              <clipPath id="clip0_556_9">
                <rect width="800" height="800" fill="white" />
              </clipPath>
            </defs> */}
          </motion.svg>
        </div>
        {/* <div className={styles.card} style={{background:`${skillsList[activeIndex]?.color}`}} ref={card}>
        
        </div> */}
      </div>
    </div>
  );
};

export default Skills;
