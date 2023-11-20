import React from "react";

const Header = () => {

  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <header className="flex flex-col items-center justify-center">
<div class="siteIntro ">
  <div class="titleBox">
    <div class="siteTitle p-8">
    <img src={process.env.PUBLIC_URL + '/images/tfg-dot-logo.png'} alt="The Food Group Logo" className="mb-4 m-auto w-64" />
      <h1 className="text-amber-300">HOLIDAY SWEATER</h1>
      <svg viewBox="0 0 880 140">
        <symbol id="s-text">
          <text text-anchor="middle" x="50%" y="90%">GENERATOR</text>
        </symbol>

              <g class="g-ants">
                <use href="#s-text" class="letter"></use>
                <use href="#s-text" class="letter"></use>
                <use href="#s-text" class="letter"></use>
                <use href="#s-text" class="letter"></use>
                <use href="#s-text" class="letter"></use>
              </g>
            </svg>

            <h2 className="text-lg md:text-xl md:mx-5 mt-3 text-white text-center mb-3">
          Get into the holiday spirit and design your own festive food-themed sweaters with our magical generator.
        </h2>
            <button className="text-black py-3 px-6 text-xl rounded-md transition-colors duration-300 bg-amber-300 hover:bg-amber-400 mt-4 font-bold   flex items-center m-auto	"
              onClick={() => scrollToElement("imgGenerator")}
            >
              <img
                src={process.env.PUBLIC_URL + "/images/knittingicon.png"}
                alt="The Food Group Logo"
                className="w-10"
              />
              Start Knitting
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
