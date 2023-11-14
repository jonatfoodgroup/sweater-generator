import React from "react";
import ImageGenerator from "./ImageGenerator";
import Gallery from "./Gallery";
import Footer from "./Footer";

// Define an array of image URLs
const imageUrls = [
  "https://source.unsplash.com/random/400x300?hotdog",
  "https://source.unsplash.com/random/400x300?sweater",
  "https://source.unsplash.com/random/400x300?food",
  "https://source.unsplash.com/random/400x300?hoodie",
];

const Masthead = () => {
  return (
    <div className="text-black">
      {/* Content Centered Above */}
      <ContentBlock />

      {/* Prompt Below */}
      <div className="container mx-auto text-center" style={{maxWidth: 600}}>
        <ImageGenerator />
      </div>

      {/* Gallery Below */}
      <Gallery images={imageUrls} />

      <Footer />
    </div>
  );
};

const ContentBlock = () => {
  return (
    <div className="container mx-auto py-16 px-5	 text-center">
        <div className="mx-auto" style={{maxWidth: 1400}}>
          <h1 className="text-2xl md:text-5xl mb-3">
          Get into the holiday spirit and design your own festive food-themed sweaters with our magical generator. 
          </h1>
        </div>
      </div>
  )
}

export default Masthead;
