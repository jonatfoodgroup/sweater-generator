import React from "react";

import MealsProgressBar from "./MealsProgressBar.js";



const Footer = () => {
  return (
    <>
      <div className="h-full mx-auto py-20 px-5	text-center bg-white min-h-screen"
        style={{
          // add backgroundImage from public folder:
          backgroundImage: `url(${process.env.PUBLIC_URL + '/images/back-stitched.jpg'
            })`,
          backgroundRepeat: "repeat",

          backgroundPosition: "top center",
        }}>

<img src={process.env.PUBLIC_URL + '/images/tfg-dot-logo.png'} alt="The Food Group Logo" className="mb-4 m-auto w-64" />

<img src={process.env.PUBLIC_URL + '/images/tfg-dot-logo.png'} alt="The Food Group Logo" className="mb-4 m-auto w-64" />

        <h2 className="text-2xl md:text-5xl max-w-2xl  mx-auto mb-3"
          style={{ color: "#859123" }}>
         We Hope Your Holiday Sweater Has You in Stitches</h2>

        <div class="max-w-xl mx-auto md:text-lg">
          <p>But in all seriousness, it’s the season of giving! That’s why for every sweater you submit The Food Group will donate 10 meals to feeding America.</p>
          <p className="mb-4 mt-4 font-bold">CHECK OUT OUR PROGRESS</p>
        </div>
        <div className =" max-w-4xl mx-auto p-6" >
        <MealsProgressBar />
        </div> 
      </div>

      <div className=" mx-auto py-16 px-5 h-full w-full bg-slate-300	text-center">
        <h3 className="text-xl md:text-2xl"> If you like this (or want your own sweater) give us a ring.</h3>
        <p className="text-lg">We’d love to show how our culinary expertise and creativity can help you and your business.</p>
        <a href="https://thefoodgroup.com/contact-us/" target="_blank" className="text-lg transition-colors duration-300 bg-amber-300 hover:bg-amber-400 p-3 m-3 display: inline-block">Lets Talk</a>
      </div></>
  )
}
export default Footer;
