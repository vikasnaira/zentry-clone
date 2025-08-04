import React from 'react'

const Glance = ({src, src1 , className, animation }) => {
  return (
    <div className={className} >
      <img src={src} alt="" className=' absolute z-2 -top-10'/>
      <video src={src1} className=' object-cover h-full w-full' autoPlay loop ></video>
      <div className='absolute top-0 w-full h-[50%] z-1 '>
        {animation}
      </div>
    </div>
  )
}

export default Glance
