import React, { useState } from 'react';
import Image from "../components/Image";

import { db } from "../firebase/database";
import { ref, onValue } from "firebase/database";
import { addGalleryItem } from "../firebase/storage";

const Gallery = () => {
  const [images, setImages] = React.useState([]);

  React.useEffect(() => {
    // Get the images from Firebase Storage
    const galleryRef = ref(db, "gallery");
    onValue(galleryRef, (snapshot) => {
      const data = snapshot.val();
      console.log("data: ", data);
      if (data) {
        const imageUrls = Object.values(data);
        setImages(imageUrls);
      }
    });
  }, []);

  return (
    <>
      <div
        className="pt-10 pb-10"
        style={{
          // add backgroundImage from public folder:
        
        
        }}
      >
        <div
          className=" mx-auto  p-4 rounded-lg  mx-6 md:mx-20 text-white  bg-slate-800"
          style={{ maxWidth: 1600 }}
        >
          <div className=" stitchedBorder whiteStitch pl-6 pr-6">
            <h2 className="text-4xl text-amber-300 text-center mt-8 mx-2 block">Check out the TFG Closet</h2>
            <GalleryImages images={images} />
          </div>
        </div>
      </div>
    </>
  );
};

const GalleryImages = ({ images }) => {
  const [displayedImages, setDisplayedImages] = useState(8); // Initial number of images to display

  const reversedImages = images.slice().reverse(); // Create a copy of the array and reverse it

  return (
    <div className="container mx-auto flex flex-wrap justify-center py-4">
      {reversedImages.slice(0, displayedImages).map((imageUrl, index) => (
        <Image imageUrl={imageUrl} key={index} imageID={index} />
      ))}
      {images.length > displayedImages && (
        <button className='w-auto text-slate-800 py-3 px-6 text-xl rounded-md transition-colors bg-amber-300 hover:bg-amber-400 font-bold flex items-center m-auto' onClick={() => setDisplayedImages(displayedImages + 8)}>
          Load More
        </button>
      )}
    </div>
  );
};

export default Gallery;