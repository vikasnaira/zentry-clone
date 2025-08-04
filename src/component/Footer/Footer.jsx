import React from 'react'
import TextPressure from './Text'
const Footer = () => {
  return (
    <div className='bg-blue-800'>
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
  <div className='flex h-fit py-30 items-start justify-around bg-blue-800 w-full px-10'>
    <img src="./img/play.svg" alt="" className=' h-10 w-10'/>
    <ul>
        <h6 className='text-xs p-2'>EXPLORE</h6>
        <li>HOME</li>
        <li>PROLOGUE</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
    </ul>
    <ul>
        <h6 className='text-xs p-2'>PRODUCTS</h6>
        <li>RADIENT</li>
        <li>NEXUS</li>
        <li>ZIGMA</li>
        <li>AZUL</li>
    </ul>
    <ul>
        <h6 className='text-xs p-2'>FOLLOW US</h6>
        <li>DISCORD</li>
        <li>X</li>
        <li>YOUTUBE</li>
        <li>MEDIUM</li>
    </ul>
    <ul>
        <h6 className='text-xs p-2'>RESOURCES</h6>
        <li>MEDIA KIT</li>
       
    </ul>
  </div>
    </div>
  )
}

export default Footer

