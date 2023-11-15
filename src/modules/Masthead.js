import React from "react";
import ImageGenerator from "./ImageGenerator";


const Masthead = () => {
  const [generatedImages, setGeneratedImages] = React.useState([]);

  const addImage = (imageUrl) => {
    setGeneratedImages([...generatedImages, imageUrl]);
  }
  return (
    <div className="text-black" id="generator">
      {/* Half container */}
      <div className="w-1/2 h-screen float-left bg-black">
        <ContentBlock />
         <ImageGenerator addImage={addImage} />
        </div>
      {/* Content Centered Above */}
      

      {/* Prompt Below */}
      <div className="container mx-auto text-center" style={{ maxWidth: 600 }}>
        <div className="flex flex-wrap justify-center">
          {
            generatedImages.length > 0 && (
              <div className="w-full">
                <h2 className="text-3xl text-white mb-3">
                  Your Sweaters
                </h2>
                <ImageTiles images={generatedImages} />
              </div>
            )
          }
          {
            generatedImages.length === 0 && (
              <div className="w-full">
                <h2 className="text-3xl text-white mb-3">
                  Your Sweaters
                </h2>
                <p className="text-white">
                  Click the button above to generate your sweaters!
                </p>
              </div>
            )
          }
      </div>
      </div>
    </div>
  )
}

const ContentBlock = () => {
  return (
    <div className="container mx-auto py-16 px-5	 text-left">
      <div className="mx-auto" style={{ maxWidth: 1400 }}>
        <h2 className="text-lg md:text-3xl text-white mb-3">
          Get into the holiday spirit and design your own festive food-themed sweaters with our magical generator.
        </h2>
      </div>
    </div>
  )
}

const ImageTiles = ({ images }) => {
  return (
    <div className="container mx-auto flex flex-wrap justify-center py-8">
      {images.map((imageUrl, index) => (
        <div
          key={index}
          className="w-1/2 md:w-1/2 p-2"
        >
          <img
            src={imageUrl}
            alt={`Generated Image ${index}`}
            className="mx-auto my-2 rounded-lg w-full"
          />
        </div>
      ))}
    </div>
  );
}

export default Masthead;
