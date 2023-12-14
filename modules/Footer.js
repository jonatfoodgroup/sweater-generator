import React from "react";
import MealsProgressBar from "./MealsProgressBar.js";
import Snow from "../components/SnowFall.js";

const Footer = ({
  count = 0,
}) => {
  return (
    <>
      <div
        className="z-10 h-full mx-auto py-20 px-5	text-center bg-white min-h-screen flex flex-col items-center justify-center snowfall-container"
        style={{
          backgroundImage: `url('/images/footer-background.jpg')`,
          backgroundRepeat: "repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <Snow />
        <div className="titleBox bg-slate-800">
          <div className="siteTitle p-8">
            <h2 className="text-2xl md:text-5xl leading-6 max-w-2xl text-amber-300 mt-5  mx-auto mb-3">
              We Hope Your Holiday Sweater Has You in Stitches
            </h2>
            <div className="max-w-xl mx-auto md:text-lg">
              <h2 className="text-white">
                But in all seriousness, it’s the season of giving! That’s why
                for every sweater you submit The Food Group will donate 10 meals
                to Feeding America.
              </h2>
              <p
                className="mb-4 mt-4 font-bold"
                style={{ color: "#869123" }}
              >
                MEALS DONATED TO DATE:
                <br />
                {/* Add a comma in count */}
                {count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} / 50,000
              </p>
            </div>

            <div className=" max-w-4xl mx-auto ">
              <MealsProgressBar className="p-5" count={count} />
            </div>
          </div>
        </div>
      </div>

      <div className=" mx-auto py-16 px-5 h-full w-full text-center bg-slate-800">
        <div className="h-full">
          <h3 className="text-amber-300 md:max-w-2xl mx-auto mb-4 text-xl md:text-3xl">
            {" "}
            If you like this (or want your own sweater) give us a ring.
          </h3>
          <p className="text-lg md:max-w-2xl mx-auto mb-4 text-white">
            We’d love to show how our culinary expertise and creativity can help
            you and your business.
          </p>
          <a
            href="https://thefoodgroup.com/contact-us/"
            target="_blank"
            className="rounded-md text-slate-800 text-lg transition-colors duration-300 bg-amber-300 hover:bg-amber-400 p-3 m-3 pb-2 font-bold display: inline-block"
          >
            Let's Talk
          </a>


        </div>
      </div>
      <div className="site-footer">

        <a href="https://www.thefoodgroup.com" target="_blank"><img src="https://thefoodgroup.com/wp-content/uploads/2020/01/thefoodgroup.svg" alt="the food group" className="footerLogo" /></a>

        <div className="socials">
          <a href="https://www.facebook.com/thefoodgroup" target="_blank"><img src="https://thefoodgroup.com/wp-content/uploads/2020/05/social-icon-fa.svg" alt="facebook" /></a>
          <a href="https://twitter.com/thefoodgroupUS" target="_blank"><img src="https://thefoodgroup.com/wp-content/uploads/2020/05/social-icon-tw.svg" alt="twitter" /></a>
          <a href="https://www.linkedin.com/company/the-food-group" target="_blank"><img src="https://thefoodgroup.com/wp-content/uploads/2020/05/social-icon-ln.svg" alt="linkedin" /></a>
          <a href="https://www.instagram.com/thefoodgroupus/" target="_blank"><img src="https://thefoodgroup.com/wp-content/uploads/2020/05/social-icon-ig.svg" alt="instagram" /></a>
        </div>
        <div class="copyright"><a href="https://thefoodgroup.com/privacy-policy">Privacy Policy</a> | <a href="https://thefoodgroup.com/contact-us">Contact Us</a> <br />
 © 2023  The Food Group, a WPP Company </div>
      </div>
     
    </>
  );
};
export default Footer;
