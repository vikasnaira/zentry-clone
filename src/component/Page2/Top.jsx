import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Top = ({content , className=''}) => {
  const TopRef = useRef(null);

  useEffect(() => {
    const anim = gsap.fromTo(TopRef.current, {
      rotationY:-100,
      opacity:0,
    },
    {
      rotationY:1,
      opacity:1,
      duration:.7,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: TopRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    });

    return () => {
      anim.scrollTrigger.kill();
      anim.kill();
    };
  }, []);

  return (
    <div
      ref={TopRef}
      className={className}
      // className="h-fit w-full text-center"
      style={{
      transformStyle: 'preserve-3d',
      transformOrigin: 'center left',
      perspective: 1000,
  }}
    >
      {content}
    </div>
  );
};

export default Top;
