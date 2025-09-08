import React from 'react'
import TextPressure from './Text'
const Footer = () => {
  return (
    <div className='bg-blue-800 p-2'>
     <TextPressure
    text="ZENTRY"
    flex={true}
    alpha={false}
    stroke={false}
    width={true}
    weight={true}
    italic={true}
    textColor="black"
    strokeColor="#ff0000"
    minFontSize={36}
  />
  <div className='flex h-fit lg:py-30  flex-row flex-wrap  items-start justify-around lg:bg-blue-800 w-full lg:px-10'>
    <div className="img w-full fit flex items-start ">
    <img src="./img/play.svg" alt="" className=' h-10 w-10 '/>
    </div>
    <ul>
        <h6 className='text-xs p-2'>EXPLORE</h6>
        <li className="md:text-lg text-sm">HOME</li>
        <li className="md:text-lg text-sm">PROLOGUE</li>
        <li className="md:text-lg text-sm">ABOUT</li>
        <li className="md:text-lg text-sm">CONTACT</li>
    </ul>
    <ul>
        <h6 className='text-xs p-2'>PRODUCTS</h6>
        <li className="md:text-lg text-sm">RADIENT</li>
        <li >NEXUS</li>
        <li className="md:text-lg text-sm">ZIGMA</li>
        <li className="md:text-lg text-sm">AZUL</li>
    </ul>
    <ul>
        <h6 className='text-xs p-2'>FOLLOW US</h6>
        <li >DISCORD</li>
        <li className="md:text-lg text-sm">X</li>
        <li className="md:text-lg text-sm">YOUTUBE</li>
        <li className="md:text-lg text-sm">MEDIUM</li>
    </ul>
    <ul>
        <h6 className='text-xs p-2'>RESOURCES</h6>
        <li className="md:text-lg text-sm">MEDIA KIT</li>
       
    </ul>
  </div>
    </div>
  )
}

export default Footer

