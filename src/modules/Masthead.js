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
    { id: 1, src: 'https://firebasestorage.googleapis.com/v0/b/sweater-generator.appspot.com/o/gallery%2Fimage_1700601090621.png?alt=media&token=07feb848-970f-4497-9cd1-e5cfa392abae',  caption: '"holiday sweater made of cinnamon rolls, candy and cookies"' },
    { id: 2, src: 'https://firebasestorage.googleapis.com/v0/b/sweater-generator.appspot.com/o/gallery%2Fimage_1701118362827.png?alt=media&token=f4666cf6-6c47-4679-b3df-5e05394bb639',  caption: '"jalapeno martini sweater"' },
    { id: 3, src: 'https://firebasestorage.googleapis.com/v0/b/sweater-generator.appspot.com/o/gallery%2Fimage_1700592782737.png?alt=media&token=2f39f795-2cf6-4d4c-aab8-8773e22fb8ea',  caption: '"chocolate chips and whipped cream sweater"' },
     { id: 4, src: 'https://firebasestorage.googleapis.com/v0/b/sweater-generator.appspot.com/o/gallery%2Fmiso-soup-sweater.jpeg?alt=media&token=5bc96844-617f-4a6c-b3b7-ac3440f628ec', caption: '"clear holiday sweater filled with miso soup"' },
    { id: 5, src: 'https://firebasestorage.googleapis.com/v0/b/sweater-generator.appspot.com/o/gallery%2Fpickle-sweater.jpeg?alt=media&token=63ec5a8a-28d5-421a-b423-3782298c019f',  caption: '"holiday sweater made out of pickles"' },
    { id: 6, src: 'https://firebasestorage.googleapis.com/v0/b/sweater-generator.appspot.com/o/gallery%2Fsalad-sweater.jpeg?alt=media&token=dc6aa503-7437-4256-b04b-703f30bab981',  caption: '"salad holiday sweater"' },
    { id: 7, src: 'https://firebasestorage.googleapis.com/v0/b/sweater-generator.appspot.com/o/gallery%2Fimage_1700601090621.png?alt=media&token=07feb848-970f-4497-9cd1-e5cfa392abae',  caption: '"holiday sweater made of cinnamon rolls, candy and cookies"' },
    { id: 8, src: 'https://firebasestorage.googleapis.com/v0/b/sweater-generator.appspot.com/o/gallery%2Fimage_1700784321046.png?alt=media&token=5f5dbc36-f2ae-4174-9ebb-9f913054443a',  caption: '"sweater made out of ramen noodles"' },
    { id: 9, src: 'https://firebasestorage.googleapis.com/v0/b/sweater-generator.appspot.com/o/gallery%2Fimage_1701281403749.png?alt=media&token=aa643838-70ab-4c08-b7d3-2be1f8c70251',  caption: '"sweater made of okra and pie"' },
  ];

  return (
    <div id="generator" className="h-full flex items-center">
      <div
        className=" bg-slate-800 mx-auto  p-4 rounded-lg text-white "
        style={{ maxWidth: 980 }}
      >
        <div className="sm:flex stitchedBorder whiteStitch p-2 sm:p-8">
          <div className="sm:w-1/2 text-white mr-4">
            <ImageGenerator addImage={addImage} />
          </div>

          <div className="sm:w-1/2  text-white">
            <div className="flex flex-wrap justify-center">
              {generatedImages.length > 0 && (
                <div className="w-full">
                  <h2 className="text-xl md:text-2xl mb-4 text-center">
Feast your eyes on your delicious design 
                  </h2>
                  <ImageTiles images={generatedImages} />
                </div>
              )}
              {generatedImages.length === 0 && (
                <div className="w-full">
                   <h2 className="text-xl md:text-xl mb-4 text-center">Some delicious sweaters from our closet  </h2>
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
    <div className="container mx-auto px-5 text-left">
      <div className="mx-auto mt-20">
        <h2 className="text-lg md:text-2xl md:mx-5 text-white text-center mb-3">
        content block copy   Get into the holiday spirit and design your own festive food-themed
          sweaters with our magical generator.
        </h2>
      </div>
    </div>
  );
};



export default Masthead;
