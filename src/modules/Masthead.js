import React from "react";
import ImageGenerator from "./ImageGenerator";

const Masthead = () => {
  return (
    <div className="bg-blue-500 p-16 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {" "}
        <div className="md:w-1/2 mb-4 md:mb-0">
          <h1 className="text-5xl font-bold mb-4">
            Celebrate the Season with Food Sweater Magic!
          </h1>
          <p className="text-lg">
            Get into the holiday spirit and design your own festive food-themed
            sweaters with our magical generator. Embrace the joy of the season
            and let your creativity run wild as you craft delicious and
            heartwarming designs to share with the world!
          </p>

          <ImageGenerator />
        </div>
        <div className="md:w-1/2 flex flex-wrap">
          {/* Food Sweater Images */}
          <div className="w-1/2 p-2">
            <img
              src="https://source.unsplash.com/random/400x300?hotdog"
              alt="Food Sweater 1"
              className="w-full h-auto rounded-md"
            />
          </div>
          <div className="w-1/2 p-2">
            <img
              src="https://source.unsplash.com/random/400x300?sweater"
              alt="Food Sweater 2"
              className="w-full h-auto rounded-md"
            />
          </div>
          <div className="w-1/2 p-2">
            <img
              src="https://source.unsplash.com/random/400x300?food"
              alt="Food Sweater 3"
              className="w-full h-auto rounded-md"
            />
          </div>
          <div className="w-1/2 p-2">
            <img
              src="https://source.unsplash.com/random/400x300?hoodie"
              alt="Food Sweater 4"
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Masthead;
