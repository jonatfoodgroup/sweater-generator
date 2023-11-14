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
<div class="siteIntro">
  <div class="titleBox" data-aos="fade-up">
    <div class="siteTitle">
    <img src={process.env.PUBLIC_URL + '/images/tfg-dot-logo.png'} alt="The Food Group Logo" className="w-64" />
      <h1>HOLIDAY SWEATER</h1>
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
            <button className="bg-amber-300 text-black py-3 px-6 text-xl rounded-md hover:bg-amber-400 mt-4 font-bold   flex items-center m-auto	"
              onClick={() => scrollToElement("generator")}
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
