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
        backgroundColor: '#111111',
        border:"none",
        color: 'black',
        duration: 1,
      });
    },
    onLeaveBack: () => {
      gsap.to(page, {
        backgroundColor: '#111111',
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
    <div className='h-fit w-full md:p-14 flex  flex-col justify-center items-center bg-white' ref={bgRef}>


      {/* heading portion of glance  */}
      <Top content={<div className=' w-1/2 h-full flex flex-col justify-left '  style={{ fontFamily:'"Bebas Neue", sans-serif'}}>
        <h6 className='text-white   text-sm '>OUR UNIVERSE IN A NUTSHELL</h6>
        <h1 className='text-8xl text-white font-extrabold'>ZENTRY AT A <br /> GLANCE</h1>
      </div>}/>



                  {/* glance portion of multiple divs */}

      <div className="glanceVideos lg:w-full h-fit lg:py-5 px-2 gap-10 py-5 w-screen flex lg:flex-row flex-col  lg:gap-5 justify-center items-center">
        <div className="left lg:w-1/3  flex flex-col items-end gap-6">

          {/* products card */}

          <Glance className={'bg-black rounded-xl shadow-xs w-full shadow-amber-100 relative h-[40vh]'}  src1={'./videos/card-1@lg.webm'} animation={
             <div className='p-2 text-white font-extrabold'>
              <h6>Products</h6>
              <h1 className='text-7xl'>4+</h1>
            </div>
          }/>

          <Glance className={'bg-[#EDFF66] w-full lg:w-[80%] rounded-xl relative lg:h-[50vh] md:h-[70vh] h-[50vh]'} animation={
            <div className='flex flex-col items-end '>
                <TextPressure 
                text="30+"
                textColor="black"
                strokeColor="#ff0000"
               />
               <h6 className='font-extrabold text-sm px-3 text-black absolute -bottom-[100%]'>PARTNERS</h6>
            </div>
          }/>
          <Glance className={'bg-blue-800 rounded-xl text-black relative w-full lg:w-[32vw] h-1/2 lg:h-[95vh]'} src1={'./videos/card-5@lg.webm'} animation={
            <div className='p-2 font-extrabold'>
              <h6>Treausry</h6>
              <h1 className='text-7xl'>140M+</h1>
            </div>
          }/>
        </div>


          {/* right side cards */}

        <div className="right lg:w-1/3 flex flex-col h-1/2 p-5 lg:h-fit w-full items-center  lg:items-start gap-6">
          <Glance className={' bg-blue-800 rounded-xl full relative h-[80vh]'} animation={
            <div className=''>
                <TextPressure
                text="5000k+"
                textColor="bwhite"
                className='flex items-center width-full justify-center h-full'
                strokeColor="#ff0000"/></div> } 
                style={{width:"50vw"}}
                src={"./img/gallery-1.webp"} />

          <Glance className={'bg-black shadow-xs w-full shadow-amber-100  text-white rounded-xl relative h-[50vh] lg:w-[22vw]'} animation={
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
          <Glance className={'bg-gray-300 px-3 rounded-xl relative w-full  md:h-[90vh] h-[45vh]'} animation={
            <div className='flex flex-col items-end gap-10'>
                <TextPressure
                text="40M+"
                textColor="black"
                strokeColor="#ff0000"
               />
               <h6 className='font-extrabold text-sm absolute top-[180%] text-black px-8'>PARTNERS</h6>
            </div>
          }/>
        </div>
      </div>
    </div>
  )
}

export default Page6
