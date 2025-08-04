import React from 'react'
import TiltedCard from '../Page2/Animation'
import Videos from './Videos'

const Page3 = () => {
  return (
    <div className='h-fit w-full bg-black flex flex-col  justify-center p-3 md:px-30'>
     <div className="heading h-fit w-full py-20">
      <h6 className='text-white w-full text-left md:text-sm text-xs text-nowrap'>Explore the Zentry Universe <br />
          <span className='text-zinc-700'>
          Immerse yourself in an IP-rich product universe where <br /> players, agentic AI and blockchain lead the new <br />economic paradigm.
          </span>
      </h6>
     </div>
     <Videos/>
    </div>
  )
}

export default Page3
