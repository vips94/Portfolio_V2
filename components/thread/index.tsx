import React,{useEffect,useRef, FC} from 'react';
import styles from './thread.module.scss';
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
// import DrawSVGPlugin from "gsap-trial/dist/DrawSVGPlugin";
import { useSelector } from 'react-redux';
import { selectPropertiesBorderColor } from '@/store/skills';

type ThreadProps = {
  style?: any;
  color?: string;
  threadWidth?: number;
};

const Thread: FC<ThreadProps> = (props) => {
    const {style={zIndex:'80'},color='red',threadWidth='2px'} = props
    const propertiesBorderColor = useSelector(selectPropertiesBorderColor);
    const thread = useRef(null) as any;

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.defaults({ ease: "none" });
        const ctx = gsap.context(() => {
          const timeline = gsap.timeline(
            {
              scrollTrigger:{
                trigger: thread.current,
                start: 'top top',
                end: 'bottom bottom',
                scrub: true,
                // markers:true,
              }
            }
          ).from(thread.current, {
            // drawSVG: 0,
            duration: 2,
          });
        });
        return () => {
          ctx.revert();
        };
      }, []);

    return (
        <div className={styles.thread} style={style}>
          <svg
            height="300vh"
            viewBox="0 0 206 2420"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"

            //for responsiveness add this line
            preserveAspectRatio="xMidYMin slice"
          >
            <path
              ref={thread}
              d="M99 0V411.5H83V460.5H45V379L94.5 341.5L150.5 379L154 460.5H114.5V411.5V1118.5L205 1177.5V1249H182.5V1193.5L170.5 1185.5L145.5 1201.5V1249L99 1277L45.5 1249L47 1204L99 1229.5V1938.5V1973C102.136 1960.1 108.411 1956.5 122 1952H182C181.894 2001.48 185.389 2028.77 195 2077H119C106.365 2082.84 102.05 2087.24 99 2097C94.2305 2087.31 90.1843 2082.67 78.5 2077H1.5C9.79232 2028.12 12.9057 2000.74 14 1952H78.5C88.8548 1955.73 92.6806 1959.06 95.5 1967.5L92.5 2419.5"
              stroke={propertiesBorderColor}
              strokeWidth={`${threadWidth}px`}
              filter={`drop-shadow(0 0 10px ${propertiesBorderColor})`}
            />
          </svg>
        </div>
    );
};

export default Thread;