import React, {useEffect} from "react";
import ProgressBar from "@ramonak/react-progress-bar";


const MealsProgressBar = ({
  count = 0,
}) => {

  useEffect(() => {
    
  }, [count]);
  return (
    <ProgressBar
      completed={count}
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
      maxCompleted={50000}
      customLabel={
        <div className="flex flex-col">
          <span className="text-2xl font-bold">{count}</span>
        </div>
      }
    />
  );
};

export default MealsProgressBar;
