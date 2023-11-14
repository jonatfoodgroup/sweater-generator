import React from "react";

const Header = () => {
  return (
    <header className="bg-black text-white p-4 flex flex-col items-center justify-center">
   {/*   <h1 className="text-3xl font-bold text-center">The Food Group Sweater Generator</h1>
      <nav className="mt-4">
        <ul className="flex space-x-4">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/gallery">Gallery</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
  </nav> */}
{/*
  <img src={process.env.PUBLIC_URL + '/images/tfg-dot-logo.png'} alt="The Food Group Logo" className="w-64" />

<h1 className="text-4xl font-bold text-center">HOLIDAY SWEATER</h1>
<h2 className="text-8xl font-bold text-center">GENERATOR</h2>
<button className="bg-amber-300 text-black py-3 px-6 rounded-md hover:bg-amber-400 mt-4 flex-1	">  
<img src={process.env.PUBLIC_URL + '/images/knittingicon.png'} alt="The Food Group Logo" className="w-10" />
Start Knitting</button> */}


<div class="siteIntro">
  <div class="titleBox" data-aos="fade-up">
    <div class="siteTitle">
    <img src={process.env.PUBLIC_URL + '/images/tfg-dot-logo.png'} alt="The Food Group Logo" className="w-64" />
      <h1>Holiday Sweater</h1>
      <svg viewBox="0 0 880 140">
        <symbol id="s-text">
          <text text-anchor="middle" x="50%" y="90%">Generator
          </text>
        </symbol>

        <g class="g-ants">
          <use href="#s-text" class="letter"></use>
          <use href="#s-text" class="letter"></use>
          <use href="#s-text" class="letter"></use>
          <use href="#s-text" class="letter"></use>
          <use href="#s-text" class="letter"></use>
        </g>
      </svg>
      <button className="bg-amber-300 text-black py-3 px-6 rounded-md hover:bg-amber-400 mt-4 flex-1	">  
<img src={process.env.PUBLIC_URL + '/images/knittingicon.png'} alt="The Food Group Logo" className="w-10" />
Start Knitting</button> 
    </div>
  </div>
</div>

    </header>
  );
};


export default Header;
