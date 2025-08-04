import React from 'react'
import Button from './Button'
import { FaLocationArrow } from "react-icons/fa"


const Content1 = () => {
  return (
    <div className='flex flex-col w-full my-10 h-fit  md:h-screen px-10 z-2 text-zinc-300 absolute righ-0 overflow-x-visible'>
        <div className='h-1/2  w-full '>
            <h1 className='md:text-[10rem] text-5xl  font-extrabold h-40 md:h-50' style={{ fontFamily:'"Bebas Neue", sans-serif'}}>REDEFINE</h1>
            <h1 className='w-50'>Enter the metagames Unleash the play Economy</h1>
            <Button  
            label={<><span>WATCH TRAILER</span> <FaLocationArrow style={{ fontSize: '8px' }} /></>}
             className='bg-amber-200 h-5 md:h-10 w-fit text-black my-3'/>
        </div>
        <div>
            <h1 className='md:text-[10rem] text-5xl font-extrabold bottom-3 absolute w-full items-baseline text-end px-15 'style={{ fontFamily:'"Bebas Neue", sans-serif'}}>GAMING</h1>
        </div>
        <div>
        </div>
    </div>
  )
}

export default Content1
