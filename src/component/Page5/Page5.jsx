import React from 'react'
import Dott from './Dott'
import Button from '../Page1/Button';
import  { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Top from '../Page2/Top';

gsap.registerPlugin(ScrollTrigger);

const Page5 = ()=> {

  const pageRef = useRef(null);
 useGSAP(() => {
  const element = pageRef.current;

  // When page starts (enters)
  ScrollTrigger.create({
    trigger: element,
    start: 'top center',
    onEnter: () => {
      gsap.to(element, {
        backgroundColor: 'white',
        color: 'black',
        duration: 1,
      });
    },
    onLeaveBack: () => {
      gsap.to(element, {
        backgroundColor: 'black',
        color: 'white',
        duration: 1,
      });
    },
  });

  // When page ends (exits bottom)
  ScrollTrigger.create({
    trigger: element,
    start: 'bottom bottom',
    onEnter: () => {
      gsap.to(element, {
        backgroundColor: '#111111',
        color: '#eeeeee',
        duration: 1,
      });
    },
    onLeaveBack: () => {
      gsap.to(element, {
        backgroundColor: 'white',
        color: 'black',
        duration: 1,
      });
    },
  });
}, []);


  return (
    <div className='w-full h-[120vh]  md:h-fit flex flex-col justify-center bg-black relative items-center md:justify-start p-10' style={{ fontFamily:'"Bebas Neue", sans-serif'}} ref={pageRef}>
      <h6 className='text-sm py-3 text-center'>
       WHO WE ARE</h6>
      <h1 className='text-2xl md:text-8xl font-extrabold'>WE ARE BUILDING</h1>
      <Dott value1={"A NEW "} text={"REALITY"} src={"./img/gallery-5.webp"}/>
      <h1 className='text-2xl md:text-8xl font-extrabold'>THAT REWARDS </h1>
      <Dott value1={"PLAYERS "} text={"AND"} src={"./img/gallery-5.webp"}/>
      <h1 className='text-2xl md:text-8xl font-extrabold'>EMPOWERS</h1>
      <h1 className='text-2xl md:text-8xl font-extrabold'>HUMAN $ AI</h1>
      <Dott value1={"TO"} text={"THRIVE"} src={"./img/gallery-5.webp"}/>
      <h6 className='text-sm py-3 text-center'>
        Zentry envisions a future where players, emerging tech,  and <br /> a new economy unite at the convergence of gaming and AI.
      </h6>
      <Button  className='bg-black text-white min-w-[12vw] h-[5vh]' label={"DISCOVER WHO ARE WE"}/>
    </div>
  )
}

export default Page5
