import React from 'react'
import Top from './Top'
import Content from './Content'
import { div } from 'framer-motion/client'

const Page2 = () => {
  return (
    <div className=' px-2 md:h-fit gap-20 overflow-hidden w-full py-10 text-black  flex flex-col items-center' style={{ fontFamily:'"Bebas Neue", sans-serif'}}>
      <Top content={ 
      <div>
        <p className="font-extralight text-xs p-3">Welcome to Zentry</p>
        <h1 className=" text-3xl md:text-8xl font-extrabold">
          Discover the world's <br /> largest shared adventure
        </h1>
      </div> }/>
      <Content/>
    </div>
  )
}

export default Page2
