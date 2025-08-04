import React from 'react'
import TiltedCard from '../Page2/Animation'
import Button from '../Page1/Button';
import { FaLocationArrow } from "react-icons/fa"


const Story = () => {
  return (
    <div className='relative w-full my-20 flex flex-col justify-center items-center'>
        <TiltedCard
              imageSrc="/img/entrance.webp"
              containerHeight="90vh"
              containerWidth="100%"
              imageHeight="100vh"
              imageWidth="100vh"
              rotateAmplitude={20}
              scaleOnHover={1}
              showMobileWarning={true}
              displayOverlayContent={true}
              clipPath={" polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)"}
              />
      <h1 className='md:text-8xl text-5xl  font-extrabold text-center absolute  -top-18  mix-blend-difference z-10' style={{ fontFamily:'"Bebas Neue", sans-serif'}}>THE STORY OF <br /> A HIDDEN REALM</h1>
        <div className='absolute text-xs left-5 md:right-30 -bottom-20 md:w-1/5 text-left flex flex-col gap-5 items-start'>
        <h6 className='w-1/2 '>
            Where realms converge, lies Zentry and the boundless pillar. Discover its secrets and shape your fate amidst infinite opportunities.
        </h6>
          <Button
          label={<>
          <span>Discover prologue</span>
           <FaLocationArrow style={{ fontSize: '8px' }} />
          </>}
          className='bg-gray-300 py-4 text-black hover:text-black'
          />
          </div>    
    </div>
  )
}

export default Story
