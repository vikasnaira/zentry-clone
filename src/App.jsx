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
    </main>
  )
}

export default App
