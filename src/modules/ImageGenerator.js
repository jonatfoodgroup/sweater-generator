import React, { useEffect, useState } from "react";
import axios from "axios";
import {addGalleryItem} from "../firebase/firebaseConfig";
import {
  ArrowDownTrayIcon,
} from '@heroicons/react/24/outline';

const apiKey = process.env.REACT_APP_OPENAI_API_KEY || "";

const apiRoute = "https://api.openai.com/v1/images/generations";

function ImageGenerator({
  addImage,
}) {
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
        
      addImage(generatedImagesData.data[0].url);
      // Extract the image URLs from the response and update the state
      let generatedImageUrls = generatedImagesData.data.map((image) => image.url);
      setGeneratedImages(generatedImageUrls);

      setIsLoading(false);

    } catch (error) {
      console.error('Error generating images:', error);

      setIsLoading(false);
    }
  };


  

  return (
    <div className="container px-5 mt-10 mx-auto">
      <h2 className="text-2xl mb-4 text-center">Enter your prompt below</h2>

      <textarea
        className="w-full p-3 text-black border-2 border-amber-500 rounded-md text-lg placeholder-gray-400 focus:outline-none focus:border-blue-700 mb-4"
        placeholder="Describe your design"
        value={customPrompt}
        onChange={(e) => setCustomPrompt(e.target.value)}
        rows="2" // Adjust the number of rows as needed
      />


      <button
        className="w-auto bg-amber-300 text-black py-3 px-6 text-xl rounded-md hover:bg-amber-400  mt-4 font-bold flex items-center m-auto"
        onClick={handleGenerateImages}
      > 
        {
          isLoading ? (
            <Loadericon isActive={isLoading} />
          ) : (
            generatedImages.length > 0 ? "Regenerate" : "Make My Sweater"
          )
        }
      </button>
    </div>
  );
}



const Loadericon = ({
  isActive
}) => {
  if (!isActive) {
    return null;
  }
  
  return (
<>   <svg className="animate-spin h-5 w-5 ml-2 inline-block" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
    </svg> &nbsp;Knitting</> 
  )
}

export default ImageGenerator;
