import React from 'react';
import resume from "../../assets/resume/resume.pdf";
import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

 function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}


function Resume() {
    const {height, width} = useWindowDimensions();
    const useWidth = 0.8*width
    console.log(useWidth)
    return(
     //   
        <div>
         <a href={resume} target="_blank">Download PDF Resume</a>
        <embed src={resume} width = {useWidth} height={height}></embed>
        </div>
        



    )
}

export default Resume;


