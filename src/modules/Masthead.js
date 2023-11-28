import React from "react";
import ImageGenerator from "./ImageGenerator";
import DonationCard from "../modules/DonationCard";
import ImageTiles from "../modules/ImageTiles";
import Swiper from "../components/Swiper";
import SwiperCarousel from "../components/Swiper";
const Masthead = () => {
  const [generatedImages, setGeneratedImages] = React.useState([]);

  const addImage = (base64Image) => {
    setGeneratedImages((prevImages) => [...prevImages, base64Image]);
  };

  const imagesCarousel = [
    { id: 1, src: 'https://firebasestorage.googleapis.com/v0/b/sweater-generator.appspot.com/o/gallery%2Fmiso-soup-sweater.jpeg?alt=media&token=5bc96844-617f-4a6c-b3b7-ac3440f628ec', caption: 'clear holiday sweater filled with miso soup' },
    { id: 2, src: 'https://firebasestorage.googleapis.com/v0/b/sweater-generator.appspot.com/o/gallery%2Fpickle-sweater.jpeg?alt=media&token=63ec5a8a-28d5-421a-b423-3782298c019f',  caption: 'holiday sweater made out of pickles' },
    { id: 3, src: 'https://firebasestorage.googleapis.com/v0/b/sweater-generator.appspot.com/o/gallery%2Fsalad-sweater.jpeg?alt=media&token=dc6aa503-7437-4256-b04b-703f30bab981',  caption: 'salad holiday sweater' },
  ];

  return (
    <div id="generator" className="h-full flex items-center">
      <div
        className=" inner-container bg-black mx-auto  p-4 bg-black rounded-lg text-white "
      >
        <div className="sm:flex stitchedBorder p-2 sm:p-8">
          <div className="sm:w-1/2 text-white mr-4">
            <ImageGenerator addImage={addImage} />
          </div>

          <div className="sm:w-1/2  text-white">
            <div className="flex flex-wrap justify-center">
              {generatedImages.length > 0 && (
                <div className="w-full">
                  <h2 className="text-3xl text-white text-center">
Feast your eyes on your delicious design 
                  </h2>
                  <ImageTiles images={generatedImages} />
                  {/* <DonationCard /> */}
                </div>
              )}
              {generatedImages.length === 0 && (
                <div className="w-full">
                  <h2 className="text-2xl text-white text-center md:mx-12 mb-3">
                    Some delicious sweaters from our closet
                  </h2>
                  <SwiperCarousel images={imagesCarousel} />
                  
                </div>
              )}
            </div>
          
          </div>
          
        </div>
       
      </div>
 
    </div>
  );
};

const ContentBlock = () => {
  return (
    <div className="container mx-auto px-5	 text-left">
      <div className="mx-auto mt-20">
        <h2 className="text-lg md:text-2xl md:mx-5 text-white text-center mb-3">
          Get into the holiday spirit and design your own festive food-themed
          sweaters with our magical generator.
        </h2>
      </div>
    </div>
  );
};



export default Masthead;
