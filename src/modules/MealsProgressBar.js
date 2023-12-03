import React, { useEffect, useRef } from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
    


  const MealsProgressBar = () => {
    console.log('Render ProgressBar');
    return (
      <ProgressBar
      completed={250}
      height="46px"
      labelColor="#ffffff"
      padding="0px"
      baseBgColor="#0f172a"
      bgColor="#859123"
      initCompletedOnAnimation="0"
      labelSize="20px"
      transitionDuration="5s"
      animateOnRender
      className="p-0 mt-4"
      maxCompleted={1200}
      customLabel="250 &nbsp;"
      />
      
    );
  };


export default MealsProgressBar;