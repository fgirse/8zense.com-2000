import React from 'react'
//import ReactPlayer from "react-player";
import Video from 'next-video';
import AnimationLogoEZ from'../../videos/LogoEZ.mp4';
import ReactPlayerAsVideo  from './player';

const AnimationLogo = () => {
  return (
    <div>
    <div className="">

      
    <Video as={ReactPlayerAsVideo} src={ AnimationLogoEZ} />;                                                
        
    </div>

  </div>
  )   
}

export default AnimationLogo



























