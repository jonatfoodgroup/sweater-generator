import React, { useState, useEffect } from 'react';
import Image from "../components/Image";

const Gallery = ({
  images = [],
}) => {

  return (
    <>
      <div className="pt-10 pb-10">
        <div
          className="mx-auto p-4 rounded-lg mx-6 md:mx-20 text-white bg-slate-800"
          style={{ maxWidth: 1600 }}
        >
          <div className=" stitchedBorder whiteStitch sm:pl-6 sm:pr-6 px-2" id="closet">
            <h2 className="text-4xl text-amber-300 text-center mt-8 mx-2 block">Check out the TFG Closet</h2>
            <GalleryImages images={images} />
          </div>
        </div>
      </div>
    </>
  );
};

const GalleryImages = ({ images }) => {
  const [displayedImages, setDisplayedImages] = useState(8); 
  const reversedImages = images.slice().reverse();
  return (
    <div className="container mx-auto flex flex-wrap justify-center py-4">
      {reversedImages.slice(0, displayedImages).map((imageObj, index) => (
        <Image imageUrl={imageObj.url} customPrompt={imageObj.prompt} name={imageObj.username} imageID={index} key={index} />
      ))}
      {images.length > displayedImages && (
        <button className='w-auto text-slate-800 py-3 px-6 text-xl rounded-md transition-colors bg-amber-300 hover:bg-amber-400 font-bold flex items-center m-auto mt-3 mb-2' onClick={() => setDisplayedImages(displayedImages + 8)}>
          Load More
        </button>
      )}
    </div>
  );
};

export default Gallery;