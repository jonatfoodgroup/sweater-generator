import React, { useEffect, useRef } from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
    


  const MealsProgressBar = () => {
    console.log('Render ProgressBar');
    return (
      <ProgressBar
      completed={800}
      height="54px"
      labelColor="#ffffff"
      padding="0px"
      baseBgColor="#2A3844"
      bgColor="#859123"
      initCompletedOnAnimation="0"
      labelSize="23px"
      transitionDuration="5s"
      animateOnRender
      className="mt-4"
      maxCompleted={1000}
      customLabel=" 800 meals"
      />
      
    );
  };


export default MealsProgressBar;