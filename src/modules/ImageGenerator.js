import React, { useState } from "react";
import axios from "axios";
import {addGalleryItem} from "../firebase/firebaseConfig";
import {
  ArrowDownTrayIcon,
} from '@heroicons/react/24/outline';

const apiKey = process.env.REACT_APP_OPENAI_API_KEY || "";

const apiRoute = "https://api.openai.com/v1/images/generations";

function ImageGenerator() {
  const [selectedPrompt, setSelectedPrompt] = useState("");
  const [customPrompt, setCustomPrompt] = useState("");
  const [generatedImages, setGeneratedImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateImages = async () => {

    setIsLoading(true);

    let promptToUse = selectedPrompt;
    if (customPrompt.trim() !== "") {
      promptToUse = customPrompt;
    }
  

    let tfgRecos = "A super cool sweatshirt made out of food to showcase how AI interprets. Should be in photoshoot style";
    promptToUse = promptToUse + tfgRecos;

    // Make a POST request to the OpenAI API
    try {
      const response = await axios.post(
        apiRoute,
        {
          "prompt": promptToUse,
          "model": "dall-e-3",
          "n": 1,
          "size": "1024x1024",
          "style": 'vivid'
          // You may need to provide other parameters based on the OpenAI API documentation
        },
        {
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
        }
      );
  
      // Handle the response from OpenAI
      const generatedImagesData = response.data; // Modify this based on the API response structure

      console.log(generatedImagesData.data);
  
      // Extract the image URLs from the response and update the state
      const generatedImageUrls = generatedImagesData.data.map((image) => image.url);
      setGeneratedImages(generatedImageUrls);

      setIsLoading(false);

    } catch (error) {
      console.error('Error generating images:', error);

      setIsLoading(false);
    }
  };
  

  return (
    <div className="container mx-auto mt-4 p-10 bg-black rounded-lg   text-white">
      <h1 className="text-4xl mb-4">Enter your prompt below</h1>

      <textarea
        className="w-full p-3 text-black border-2 border-blue-500 rounded-md text-lg placeholder-gray-400 focus:outline-none focus:border-blue-700 mb-4"
        placeholder="Describe your design"
        value={customPrompt}
        onChange={(e) => setCustomPrompt(e.target.value)}
        rows="4" // Adjust the number of rows as needed
      />

      <button
        className="w-auto bg-amber-300 text-black py-3 px-6 rounded-md hover:bg-amber-400"
        onClick={handleGenerateImages}
      >
        {
          isLoading ? (
            <Loadericon isActive={isLoading} />
          ) : (
            generatedImages.length > 0 ? "Regenerate" : "Generate Images"
          )
        }
      </button>
      <div className="mt-4">
        {/* Display the generated images here */}
        {generatedImages.map((image, index) => (
         <div>
           <img
            key={index}
            src={image}
            alt={`Generated Image ${index}`}
            className="w-64 h-64 mx-auto my-2"
          />
          <button
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            onClick={() => addGalleryItem(image)}
          >Add to Gallery</button>
          <DownloadButton imageUrl={image} />
          </div>
        ))}
      </div>
    </div>
  );
}

const DownloadButton = ({
  imageUrl,
}) => {
  const handleDownloadImage = async (imageUrl) => {
    // TODO: Implement this function
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    addGalleryItem(url).then(() => {
      window.URL.revokeObjectURL(url);
    }).catch((error) => {
      console.error("Error adding image to gallery:", error);
    })
    
  };
  
  
  return (
    <button
      className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      onClick={() => handleDownloadImage(imageUrl)}
    >
      <ArrowDownTrayIcon className="inline-block mr-2" />Download Image
    </button>
  )
}

const Loadericon = ({
  isActive
}) => {
  if (!isActive) {
    return null;
  }
  
  return (
    <svg className="animate-spin h-5 w-5 ml-2 inline-block" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
    </svg>
  )
}

export default ImageGenerator;
