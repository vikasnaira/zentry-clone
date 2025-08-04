import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import TiltedCard from './Animation';

gsap.registerPlugin(ScrollTrigger);

const Content = () => {
  const gsapref = useRef(null);

  useGSAP(() => {
    gsap.to(gsapref.current, {
      width: '100vw',
      height:'100vh',
      scrollTrigger: {
        trigger: gsapref.current,
        start: 'top -10%',
        clipPath:"none",
        end: '110% 80%',
        scrub: 1,
        // pin: true,
        markers: true,
      },
    });
  }, []);

  return (
    <div
      className="h-[160vh]  flex w-full items-start justify-center relative "
    >
     <img src="/img/stones.png" alt="overlay" className=' scale-80 top-[20%] left-[3%]  md:scale-60 absolute md:left-20 md:-top-6 z-9' />

      <div className=' h-[70vh]' ref={gsapref}
       style={{
        width:"30vw"
        }}>

      <TiltedCard
        imageSrc="/img/about.webp"
        containerHeight="110%"
        containerWidth="100%"
        imageHeight="100vh"
        imageWidth="100%"
        rotateAmplitude={5}
        scaleOnHover={1}
        showMobileWarning={true}
        displayOverlayContent={true}
        />
        </div>
      <h1 className="text-lg bottom-10 absolute z-10 text-center">
        The MetaGame begins — your life, now an epic MMORPG <br />
        <span className="text-sm text-zinc-400">
          Zentry is the unified play layer driving attention and contribution <br />
          through cross-World AI gamification
        </span>
      </h1>
    </div>
  );
};

export default Content;