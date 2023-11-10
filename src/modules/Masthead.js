import React from "react";
import ImageGenerator from "./ImageGenerator";
import Image from "../components/Image";

// Define an array of image URLs
const imageUrls = [
  "https://source.unsplash.com/random/400x300?hotdog",
  "https://source.unsplash.com/random/400x300?sweater",
  "https://source.unsplash.com/random/400x300?food",
  "https://source.unsplash.com/random/400x300?hoodie",
];

const Masthead = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* Content Centered Above */}
      <ContentBlock />

      {/* Prompt Below */}
      <div className="container mx-auto text-center" style={{maxWidth: 600}}>
        <ImageGenerator />
      </div>

      {/* Images from Array */}
      <div className="container mx-auto flex flex-wrap justify-center py-8">
        {imageUrls.map((imageUrl, index) => (
            <Image imageUrl={imageUrl} key={index} />
        ))}
      </div>
    </div>
  );
};

const ContentBlock = () => {
  return (
    <div className="container mx-auto py-16 text-center">
        <div className="mx-auto" style={{maxWidth: 600}}>
          <h1 className="text-5xl font-bold mb-4">
            Celebrate the Season with Food Sweater Magic!
          </h1>
          <p className="text-lg">
            Get into the holiday spirit and design your own festive food-themed
            sweaters with our magical generator. Embrace the joy of the season
            and let your creativity run wild as you craft delicious and
            heartwarming designs to share with the world!
          </p>
        </div>
      </div>
  )
}

export default Masthead;
