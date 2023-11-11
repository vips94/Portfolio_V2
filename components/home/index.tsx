import React,{useEffect, useState, useRef} from 'react';
import styles from './home.module.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Lottie from 'lottie-web';
import gearAnim from '@/public/lottieFiles/gear.json';
import CustomButton from '../button';
import { url } from 'inspector';
import Blob from '../blob';
// import Experience from './Experience';
// import { Canvas } from '@react-three/fiber';

const imageList = ['home-fg1','home-fg2','home-fg3','home-fg4']
const WINDOW_CLOSE_DURATION = 1;
let anim = null as any;
let timeInterval = null as any;
const HomePage = () => {
    const [current, setCurrent] = useState(0);
    const [isAnimating, setIsAnimating] = useState(true);
    const gear = useRef() as any;
    
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        //gear lottie animation
        anim = Lottie.loadAnimation({
            name: 'gearAnim',
            container: gear.current,
            renderer: 'svg',
            autoplay: true,
            loop: false,
            animationData: gearAnim,
        })
        console.log('running')
        const ctx = gsap.context(()=>{
            const timeline = gsap.timeline();

            timeline.to(gear.current,{
                duration: 0.5,
                delay: 1,
            })
            .to(`.${styles['window']}`,{
                x: '50%',
                y: '50%',
                duration:2,
                ease: "bounce.out",
                onComplete : ()=>{
                    setIsAnimating(false);
                }
            })
        })
    
        return () => {
            ctx.revert();
            clearInterval(timeInterval)
        };
    }, []);

    const changeBackground = () => {
        if(isAnimating) return;
        setIsAnimating(true);
        anim.goToAndPlay(0,true,'gearAnim')
        const timeline = gsap.timeline();
        timeline
        .to(`.${styles['window']}`,{
            x: '0',
            y: '0',
            duration:WINDOW_CLOSE_DURATION,
            ease: "ppwer1.out",
        })
        .to(`.${styles['window']}`,{
            x: '50%',
            y: '50%',
            duration:2,
            ease: "bounce.out",
            onComplete : ()=>{
                setIsAnimating(false);
            }
        })
        setTimeout(()=>{
            if(current != imageList.length-1) setCurrent(current+1)
            else setCurrent(0)
        },WINDOW_CLOSE_DURATION*1000)
        
    }

    return (
        <div className={styles['home-section']}>
            {/* <svg viewBox="0 0 1440 832" fill="none" preserveAspectRatio='xMidYMin slice'>
                <defs>
                    <filter id="displacementFilter">
                        <feTurbulence type='fractalNoise' baseFrequency='0.03' numOctaves='1' result='noise'/>
                        <feDisplacementMap in='SourceGraphic' in2='nosise' scale='50' xChannelSelector='R' yChannelSelector='G'/>    
                    </filter>
                    <mask id='circleMask'>
                        <circle cx='50%' cy='50%' r='100%' fill='white' className={styles['displacement']} />
                    </mask>
                </defs>
                <rect width="100%" height="100%" fill="white" mask="url(#circleMask)" />
            </svg> */}
            <div className={styles['bg-container']}>
                <div className={styles['btn-container']}>
                    <div ref={gear} className={styles.btn} onClick={changeBackground}/>
                </div>
                <div className={`${styles['fg']}`} style={{backgroundImage: `url('/images/home/${imageList[current]}.jpg')`}}/>
                {/* <img className={styles['bg']} src='/images/home/home-bg.png'/>  */}
                <img className={styles['bg']} src='/images/home/top-window.png'/> 
                {/* <img className={styles['window']} src='/images/home/home-bg-split.png'/> */}
                <img className={styles['window']} src='/images/home/bottom-window.png'/>
                <Blob style={{transform: 'translate(-33%,33%)', bottom:'0', left:'0'}} image='/images/home/home-fg1.jpg'/>
            </div>
            <div className={styles['body-container']}>
                <h1>VIPIN KUMAR</h1>
                <span className={styles.subtitle}>{'('}<h2 style={{backgroundImage: `url('/images/home/${imageList[current]}.jpg')`}}>FRONTEND ENGINEER</h2>{')'}</span>
                <CustomButton containerClassName='btn-container-1' extraClassName='btn-1' maskClassName='mask-1' btnName='HIRE ME' currentImage={`${imageList[current]}`}>HIRE ME</CustomButton>
            </div>
        </div>
    );
};

export default HomePage;