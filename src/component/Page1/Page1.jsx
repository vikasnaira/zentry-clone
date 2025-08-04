import React, { useEffect, useRef } from "react";
import Header from "./Header";
import Content1 from "./Content1";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "./Hero";

gsap.registerPlugin(ScrollTrigger);

const Page1 = () => {
  const containerRef = useRef(null);


useEffect(() => {
  if(window.innerWidth<='600px'){
    gsap.to(containerRef,{
      display:'none',
    })
  }
  const anim = gsap.fromTo(
    containerRef.current,
    {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", 
    },
    {
      clipPath: "polygon(26% 0%, 76% 0%, 100% 100%, 0% 100%)",
      ease: "power2.inOut",
      rotateZ:20,
      scale:.8,
      rotateX:0,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "50% 50%",
        end: "bottom top",
        scrub: true,
      },
      transformOrigin: "center center",
    }
  );

  return () => {
    anim.scrollTrigger.kill();
    anim.kill();
  };
}, [])

  return (
    <div className=" md:h-screen h-[70vh] bg-green-500 w-full flex flex-col overflow-visible" ref={containerRef}>
      <Header/>
      <Hero className="absolute top-0"/>
      <Content1 />
    </div>
  );
};

export default Page1;
