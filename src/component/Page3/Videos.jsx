import React from 'react'
import Videoscompo from './Videoscompo'

const Videos = () => {
  return (
    <div className='h-fit flex flex-col'>
      <div className="mainvideo my-4">
        <Videoscompo src={'./videos/feature-1.mp4'} value={"RADIANT"} data={"the NET collectio mergin `Zentry's Ip ,AI and gaming-pushing the boundries of NFT"} label={'Coming soon'}/>
      </div>
     <div className='flex md:flex-row flex-col w-full'>
         <div className="leftVideos flex flex-col w-full  md:w-1/2">
        <Videoscompo src={'./videos/feature-2.mp4'} height={'103vh'} value={"ZIGMA"} data={"the NET collectio mergin `Zentry's Ip ,AI and gaming-pushing the boundries of NFT"} label={'Coming soon'}/>
        <Videoscompo src={'./videos/feature-3.mp4'} height={'50vh'} value={"MORE COMING SOON"} label={'Coming soon'}/>
      </div>
       <div className="rightVideos md:w-1/2 flex flex-col ">
        <Videoscompo src={'./videos/feature-3.mp4'} height={'50vh'} value={"NEXUS"} data={"the NET collectio mergin `Zentry's Ip ,AI and gaming-pushing the boundries of NFT"} label={'Coming soon'}/>
        <Videoscompo src={'./videos/feature-4.mp4'} height={'50vh'} value={"AZUL"} data={"the NET collectio mergin `Zentry's Ip ,AI and gaming-pushing the boundries of NFT"} label={'Coming soon'}/>
        <Videoscompo src={'./videos/feature-5.mp4'} height={'50vh'} value={"ZIGMA"} data={"the NET collectio mergin `Zentry's Ip ,AI and gaming-pushing the boundries of NFT"} label={'Coming soon'} autoplay={true} />
      </div>
     </div>
    </div>
  )
}

export default Videos
