import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const Hero = ({className=""}) => {
  const videos = [
    "videos/hero-1.mp4",
    "videos/hero-2.mp4",
    "videos/hero-3.mp4",
    "videos/hero-4.mp4",
  ];

  const [srcSmall, setSrcSmall] = useState(0); // for small video
  const [srcBig, setSrcBig] = useState(1);     // for big video

  const small = useRef();
  const big = useRef();
  const play = useRef();
  const play2 = useRef();

  
  useGSAP(() => {
    gsap.fromTo(small.current, {
    scale: 0.5,
    opacity: 0
  }, {
    scale: 1,
    opacity: 1,
    duration: 1
  });
}, []);

  
  const show = ()=>{
    gsap.to(small,{
      scale:"1",
    })
  }
  
 const animate = () => {
  // Pause the small video
  play.current.play()

  // Animate containers
  gsap.to(small.current, {
    width: "100vw",
    height: "100vh",
    left: 0,
    top: 0,
    zIndex: 1,
    pointerEvents: "none",
    duration: 0.3,
    onComplete: () => {
      setSrcBig((prev) => (prev + 1) % videos.length);
    }
  });

  gsap.to(big.current, {
    width: "20%",
    height: "50%",
    left: "40vw",
    top: "20vw",
    zIndex: 3,
    pointerEvents: "auto",
    duration: 0.3,
    onComplete: () => {
      play2.current.pause();
    }
  });
};

  const animate2 = () => {
  play2.current.pause();

  gsap.to(big.current, {
    width: "100vw",
    height: "100vh",
    left: 0,
    top: 0,
    zIndex:2,
    pointerEvents: "none",
    duration: 0.3,
    onComplete: () => {
      setSrcSmall((prev) => (prev + 1) % videos.length);
      play2.current.play();
    }
  });

  gsap.to(small.current, {
    width: "20%",
    height: "50%",
    left: "40vw",
    top: "20vw",
    zIndex: 3,
    pointerEvents: "auto",
    duration: 0.3,
    onComplete: () => {
      play.current.pause();
    }
  });
};


  return (
    <div className= "  bg-black relative flex  md:h-screen w-full" >
      <div className="h-screen  w-full absolute" ref={big} onClick={animate2}>
        <video
          src={videos[srcBig]}
          key={videos[srcBig]}
          autoPlay
          loop
          muted
          className='min-h-full min-w-full object-cover'
          ref={play2}
        ></video>
      </div>
      <div
        className=" w-1/4 hidden md:block overflow-hidden top-35 absolute md:top-[15vw] z-3 left-[38%]"
        ref={small}
        onClick={animate}
      >
        <video
          src={videos[srcSmall]}
          key={videos[srcSmall]}
          loop
          muted
          ref={play}
          className='h-full w-full object-cover'
        ></video>
      </div>
    </div>
  );
};

export default Hero;
