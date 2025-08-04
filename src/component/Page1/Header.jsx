import React, { useRef } from 'react'
import Button from './Button'
import { FaLocationArrow } from "react-icons/fa"
import gsap from 'gsap'

export default function Header() {
  const indicatorRef = useRef(null)
  const buttonsRef = useRef([])

  const handleHover = (index) => {
    const btn = buttonsRef.current[index]
    if (btn) {
      const { offsetLeft, offsetWidth } = btn
      gsap.to(indicatorRef.current, {
        left: offsetLeft,
        width: offsetWidth,
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out',
      })
    }
  }

  const handleLeave = () => {
    gsap.to(indicatorRef.current, {
      opacity: 0,
      width: 0,
      duration: 0.3,
      ease: 'power2.out',
    })
  }

  return (
    <div className='flex w-[100vw]  z-10 justify-between px-3 py-1 h-12 absolute'style={{boxShadow:" inset 50px - 20px black"}}>

      <div className='flex gap-3 items-center'>
        <img
          src="https://cdn.brandfetch.io/id2OzJ-liv/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B"
          alt=""
          className='h-full'
        />
        <Button
          label={
            <>
              <span>Products</span>
              <FaLocationArrow style={{ fontSize: '8px' }} />
            </>
          }
          className='bg-gray-300 text-black hover:text-black'
        />
        <Button
          label="WHITEPAPER"
          className='bg-gray-300 text-black hover:text-black'
        />
      </div>

      <div
        className='flex gap-3 items-center relative'
        onMouseLeave={handleLeave}
      >
        <div
          ref={indicatorRef}
          className=' slider absolute h-6 bg-white rounded-full z-0 opacity-0'
          style={{
            top: '50%',
            transform: 'translateY(-50%)',
            left: 0,
            width: 0,
          }}
        ></div>

        {/* BUTTONS */}
        {['NEXUS', 'VAULT', 'PROLOGUE', 'ABOUT', 'CONTACT'].map((text, index) => (
          <Button
            key={index}
            label={
              <>
                <span>{text}</span>
                <FaLocationArrow style={{ fontSize: '8px' }} />
              </>
            }
            ref={(el) => (buttonsRef.current[index] = el)}
            onMouseEnter={() => handleHover(index)}
            className='bg-transparent text-white md:flex hidden hover:text-black'
          />
        ))}

        <button className='w-10 text-white relative z-10'>...</button>
      </div>
    </div>
  )
}
