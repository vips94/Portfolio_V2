import React,{useEffect, useRef, useState} from 'react';
import styles from './navBar.module.scss';
import Link from 'next/link';
import gsap from 'gsap';
import Lottie from 'lottie-web';
import avatarAnimation2 from '@/public/lottieFiles/wired-lineal-268-avatar-man.json';
import handwaveAnimation from '@/public/lottieFiles/Animation-handwave.json';

const NavBar = () => {
    const container = useRef(null) as any;
    const hand = useRef(null) as any;

    let  anim = null as any;
    useEffect(() => {
        anim = Lottie.loadAnimation({
          name: 'avatarAnim',
          container: container.current,
          renderer: "svg",
          autoplay: false,
          loop: false,
          animationData: avatarAnimation2,
        });

        Lottie.loadAnimation({
            name: 'handAnim',
            container: hand.current,
            renderer: 'svg',
            autoplay: true,
            loop: true,
            animationData: handwaveAnimation,
        })

        const ctx = gsap.context(()=>{
            const timeline = gsap.timeline();
            timeline.from(`.${styles['nav-loader']}`,{
                y:'-200%',
                duration:1,
                ease: "bounce.out",
                // delay:0.7
            })
            timeline.from(container.current,{
                y:'-110%',
                duration: 1,
                ease: "bounce.out",
            },"<=0.5")
            timeline.from(`.${styles.link}`,{
                stagger:0.1,
                duration:1,
                y:'-100%',
                ease: "bounce.out",
            },"<")
        })
    
        return () => {
            Lottie.destroy();
            ctx.revert();
        };
    }, []);

    const avaterAnimatonUpdate = (direction:any=1) => {
        Lottie.setDirection(direction)
        Lottie.setSpeed(2);

        if(direction == 1){
            anim.goToAndPlay(0,true,'avatarAnim')
            anim.addEventListener('loopComplete',()=>{
                anim.stop();
            })
            gsap.to(`.${styles['salutation-area']}`,{
                scale:1,
                duration:0.5,
                ease: "bounce.out",

            })
        }else{
            gsap.to(`.${styles['salutation-area']}`,{
                scale:0,
                duration:0.3,
                ease: "power1.out",
            })
        }
    }

    return (
        <div className={styles['nav-loader']}>
            <nav className={styles['nav-section']}>
                <div className={styles.left}>
                    <div className={styles.avatar}>
                        <div ref={container} 
                            onMouseEnter={() =>  avaterAnimatonUpdate()}
                            onMouseLeave={() =>  avaterAnimatonUpdate(-1)}
                        />
                    </div>
                    <div className={styles['salutation-area']}>
                        Hi
                        <div ref={hand}/>
                    </div>
                </div>
                
                <div className={styles.right}> 
                    <Link href={'#'} className={styles.link}>About Me</Link>
                    <Link href={'#'} className={styles.link}>Skills</Link>
                    <Link href={'#'} className={styles.link}>Projects</Link>
                    <Link href={'#'} className={styles.link}>Contact Me</Link>
                    <Link href={'#'} className={styles.link}>Home</Link>
                </div>
            </nav>
        </div>
        
    );
};

export default NavBar;