import React from 'react'

const Dott = ({value1 , text , src }) => {
  return (
    <div className='w-fit  flex text-8xl font-extrabold justify-center items-center gap-1 md:gap-5'>
     <h1 className='text-2xl md:8xl'>{value1}</h1>
     <span className='bg-black group relative  rounded md:w-10 md:h-10 w-2'>
        <img src={src} alt="" className='w-full h-full scale-0 rounded-sm group-hover:scale-[5] transition-transform  ease-linear duration-300'/>
     </span>
     <h1 className='text-2xl md:8xl'>{text}</h1>
    </div>
  )
}

export default Dott
