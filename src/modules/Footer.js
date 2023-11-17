import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const Example = () => {
  return <ProgressBar />;
};

const Footer = () => {
  return (
    <>
      <div className="h-full mx-auto py-16 px-5	text-center bg-white">
        <h2 className="text-2xl md:text-5xl max-w-2xl  mx-auto mb-3">Hope your holiday sweater has you in stitches</h2>

        <div class="max-w-2xl mx-auto"><p>But in all seriousness, it’s the season of giving! That’s why for every sweater you submit The Food Group will donate 10 meals to feeding America.</p>
          <ProgressBar
            completed={800}
            height="50px"
            labelColor="#ffffff"
            padding="0px"
            baseBgColor="#2A3844"
            bgColor="#859123"
            initCompletedOnAnimation="0"
            labelSize="23px"
            transitionDuration="5s"
            animateOnRender="true"
            className="mt-4"
            maxCompleted={1000}
            customLabel=" 800 meals"

          />

        </div> 
      </div>

      <div className="container mx-auto py-16 px-5 bg-slate-300	text-center">
        <h3>If you liked this (or want a sweater made out of food) give us a call.</h3>
        <p> We’d love to talk how our culinary expertise and creativity can help you and your business.</p>
        <a href="#">Lets Talk</a>
      </div></>
  )
}
export default Footer;
