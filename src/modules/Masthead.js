import React from "react";
import ImageGenerator from "./ImageGenerator";
import DonationCard from "../modules/DonationCard";


const Masthead = () => {
  const [generatedImages, setGeneratedImages] = React.useState([]);

  const addImage = (imageUrl) => {
    setGeneratedImages([...generatedImages, imageUrl]);
  }
  return (
    <div id="generator" className="h-full flex items-center">
      <div className=" bg-black mx-auto  p-4 bg-black rounded-lg text-white " style={{ maxWidth: 980 }} >
        <div className="flex stitchedBorder p-8" >

          <div className="w-1/2 text-white mr-4">
            <ContentBlock />
            <ImageGenerator addImage={addImage} />
          </div>

          <div className="w-1/2  text-white">


            <div className="flex flex-wrap justify-center">
              {
                generatedImages.length > 0 && (
                  <div className="w-full">
                    <h2 className="text-3xl text-white text-center">Your Sweaters</h2>
                    <ImageTiles images={generatedImages} />
                    <DonationCard />
                  </div>
                )
              }
              {
                generatedImages.length === 0 && (
                  <div className="w-full">
                    <h2 className="text-2xl text-white text-center md:mx-12 mb-3">Some delicious sweaters from our closet</h2>
                      <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
                      {/* just for positioning */}
                      <img src="https://firebasestorage.googleapis.com/v0/b/sweater-generator.appspot.com/o/gallery%2Fimg-QPYhEdHotJ2lW4oDzhBXaAUS.png?alt=media&token=1dada176-2bde-4dfc-98eb-e9159f2c279d" className="w-full h-full object-cover max-h-56	max-w-4xl rounded-lg" />
                      <img src="https://firebasestorage.googleapis.com/v0/b/sweater-generator.appspot.com/o/gallery%2Fimg-QPYhEdHotJ2lW4oDzhBXaAUS.png?alt=media&token=1dada176-2bde-4dfc-98eb-e9159f2c279d" className="w-full h-full object-cover max-h-56	max-w-4xl rounded-lg" />
                      <img src="https://firebasestorage.googleapis.com/v0/b/sweater-generator.appspot.com/o/gallery%2Fimg-QPYhEdHotJ2lW4oDzhBXaAUS.png?alt=media&token=1dada176-2bde-4dfc-98eb-e9159f2c279d" className="w-full h-full object-cover max-h-56	max-w-4xl rounded-lg" />
                      <img src="https://firebasestorage.googleapis.com/v0/b/sweater-generator.appspot.com/o/gallery%2Fimg-QPYhEdHotJ2lW4oDzhBXaAUS.png?alt=media&token=1dada176-2bde-4dfc-98eb-e9159f2c279d" className="w-full h-full object-cover max-h-56	max-w-4xl rounded-lg" />
                    </div>
                    <DonationCard />
                  </div>
                )
              }

            </div>
            </div>

        </div>
      </div>







    </div>
  )
}

const ContentBlock = () => {
  return (
    <div className="container mx-auto px-5	 text-left">
      <div className="mx-auto mt-20">
        <h2 className="text-lg md:text-2xl md:mx-5 text-white text-center mb-3">
          Get into the holiday spirit and design your own festive food-themed sweaters with our magical generator.
        </h2>
      </div>
    </div>
  )
}

const ImageTiles = ({ images }) => {
  return (
 
     
     <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">

 {images.map((imageUrl, index) => (
      
          <img
            src={imageUrl}
            alt={`Generated Image ${index}`}
          
            className="w-full h-full object-cover max-h-56	max-w-4xl rounded-lg"
          />
      ))}
    </div>
  );
}

export default Masthead;
