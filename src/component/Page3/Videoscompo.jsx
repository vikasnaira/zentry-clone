import React from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { FaLocationArrow } from "react-icons/fa"
import Button from '../Page1/Button';

const Videoscompo = ({height , src , value , autoplay = false , data , label}) => {
    const viRef = useRef(null)

    gsap.registerPlugin(ScrollTrigger);
    
    useGSAP(()=>{
        gsap.from(viRef.current,{
            scale:'0.9',
        })
    })
    
    const handlePlay = ()=>{
        viRef.current.play()
        console.log("vikas");
    }
     const handlePause = ()=>{
        viRef.current.pause()
    }
  return (
    <div className='relative my-4 hover:scale-97 transition-transform duration-500'>
       <div className="text absolute z-10 left-3 w-full p-5 md:w-1/2">
         <h1 className=' text-white w-full text-xs md:text-5xl font-bold font-serif'>{value}</h1>
        <h6 className='text-white md:text-lg text-sm'>{data}</h6>
       </div>
      <video 
        src={src}
        loop
        muted
        tabIndex="0"
        autoplay={autoplay}
        style={{height:`${height}`, border:'1px solid gray', borderRadius:'20px', cursor:'pointer',width:'99%',objectFit:'cover'}}
        onMouseEnter={handlePlay}
        onMouseLeave={handlePause}
        ref={viRef}
        ></video>
  <div className="button absolute bottom-5 left-5">
          <Button
          label={
            <>
              <span>{label}</span>
              <FaLocationArrow style={{ fontSize: '8px' }} />
            </>
          }
          className='bg-gray-300 text-black hover:text-black'
        />
  </div>
    </div>
  )
}

export default Videoscompo
