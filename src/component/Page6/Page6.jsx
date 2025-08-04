import { b, div } from 'framer-motion/client'
import React, { useRef } from 'react'
import Top from '../Page2/Top'
import Glance from './Glance'
import TextPressure from '../Footer/Text'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Page6 = () => {
  const bgRef = useRef(null);
  useGSAP(() => {
  const page = bgRef.current;

  // When page starts (enters)
  ScrollTrigger.create({
    trigger: page,
    start: 'top center',
    onEnter: () => {
      gsap.to(page, {
        backgroundColor: 'black',
        color: 'black',
        duration: 1,
      });
    },
    onLeaveBack: () => {
      gsap.to(page, {
        backgroundColor: 'black',
        color: 'white',
        duration: 1,
      });
    },
  });

  // When page ends (exits bottom)
  ScrollTrigger.create({
    trigger: page,
    start: 'bottom bottom',
    onEnter: () => {
      gsap.to(page, {
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
    <div className='h-fit w-full p-14 flex bg-white flex-col justify-center overflow-x-hidden' ref={bgRef}>
      <Top content={<div className=' w-1/2 h-full flex flex-col justify-left '  style={{ fontFamily:'"Bebas Neue", sans-serif'}}>
        <h6 className='text-black text-sm '>OUR UNIVERSE IN A NUTSHELL</h6>
        <h1 className='text-8xl text-black font-extrabold'>ZENTRY AT A <br /> GLANCE</h1>
      </div>}/>

      <div className="glanceVideos w-full h-fit py-5  flex gap-5 justify-center items-center">
        <div className="left w-1/3 flex flex-col items-end gap-6">
          <Glance className={'bg-black rounded-xl shadow-xs shadow-amber-100 relative h-[40vh]'}  src1={'./videos/card-1@lg.webm'} animation={
             <div className='p-2 text-white font-extrabold'>
              <h6>Products</h6>
              <h1 className='text-7xl'>4+</h1>
            </div>
          }/>
          <Glance className={'bg-[#EDFF66] w-[80%] rounded-xl relative h-[40vh]'} animation={
            <div className='flex flex-col items-end'>
                <TextPressure
                text="30+"
                textColor="black"
                strokeColor="#ff0000"
               />
               <h6 className='font-extrabold text-sm px-3 '>PARTNERS</h6>
            </div>
          }/>
          <Glance className={'bg-blue-800 rounded-xl text-black relative w-[32vw] h-[95vh]'} src1={'./videos/card-5@lg.webm'} animation={
            <div className='p-2 font-extrabold'>
              <h6>Treausry</h6>
              <h1 className='text-7xl'>140M+</h1>
            </div>
          }/>
        </div>


          {/* right side cards */}

        <div className="right w-1/3 flex flex-col items-start gap-6">
          <Glance className={' bg-blue-800 rounded-xl relative  h-[80vh]'} animation={
            <div>
                <TextPressure
                text="5000k+"
                textColor="black"
                strokeColor="#ff0000"
  />
         </div> } src={"./img/gallery-1.webp"} />

          <Glance className={'bg-black shadow-xs shadow-amber-100  text-white rounded-xl relative h-[50vh] w-[22vw]'} animation={
             <div className='p-2 font-extrabold flex flex-col justify-between h-[50vh]'>
              <h1 className='text-3xl'>WORLD-CLASS <br />BAKERS</h1>
              <ul className='text-white px-1'>
                <li className='text-xs font-extrabold text-right '>SYNGERS</li>
                <li className='text-xs font-extrabold text-right '>ARCH FUND</li>
                <li className='text-xs font-extrabold text-right '>SPARTAN</li>
                <li className='text-xs font-extrabold text-right '>ANIMOCA BRANDS</li>
                <li className='text-xs font-extrabold text-right '>DEFINANCE CAPITAL</li>
                <li className='text-xs font-extrabold text-right '>COINBASE VENTURES</li>
              </ul>
            </div>
          }/>
          <Glance className={'bg-gray-300 px-3 rounded-xl relative  w-[30vw] h-[45vh]'} animation={
            <div className='flex flex-col items-end gap-10'>
                <TextPressure
                text="40M+"
                textColor="black"
                strokeColor="#ff0000"
               />
               <h6 className='font-extrabold text-sm text-black px-8'>PARTNERS</h6>
            </div>
          }/>
        </div>
      </div>
    </div>
  )
}

export default Page6
