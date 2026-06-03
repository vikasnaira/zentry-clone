import React from 'react'
import Home from './component/Home'
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const App = () => {
   useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),    //im use this for make our page smooth scrolling 
      smooth: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className=' mix-blend-difference overflow-hidden max-w-[100vw]'>
      <Home/>
      <div className='bg-black md:hidden h-screen px-6 w-full text-red-500  flex justify-center  items-center'>
       <h1 className='text-center text-xl font-bold' style={{ fontFamily:'"Bebas Neue", sans-serif'}}>SORRY YOUR DISPLAY NOT SUPPORT OUR WEBSITE !</h1>
      </div>
    </main>
  )
}

export default App
