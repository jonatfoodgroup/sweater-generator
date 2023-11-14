import React, { useState } from "react";
import axios from "axios";

const apiKey = "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";
const apiRoute = "https://api.openai.com/v1/images/generations";

function ImageGenerator() {
  const [selectedPrompt, setSelectedPrompt] = useState("");
  const [customPrompt, setCustomPrompt] = useState("");
  const [generatedImages, setGeneratedImages] = useState([]);

  const handleGenerateImages = async () => {
    let promptToUse = selectedPrompt;
    if (customPrompt.trim() !== "") {
      promptToUse = customPrompt;
    }
  

    let tfgRecos = "A super cools weatshirt made out of food to showcase how AI interprets. Should be in photoshoot style";
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

    } catch (error) {
      console.error('Error generating images:', error);
    }
  };
  

  return (
    <div className="container mx-auto mt-4 p-4">
      <h1 className="text-2xl font-bold mb-4">Enter your prompt below</h1>

      <textarea
        className="w-full p-3 text-black border-2 border-blue-500 rounded-md text-lg placeholder-gray-400 focus:outline-none focus:border-blue-700 mb-4"
        placeholder="Enter a custom food sweater prompt"
        value={customPrompt}
        onChange={(e) => setCustomPrompt(e.target.value)}
        rows="4" // Adjust the number of rows as needed
      />

      <button
        className="w-auto bg-black text-white py-3 px-6 rounded-md hover:bg-blue-600"
        onClick={handleGenerateImages}
      >
        Generate Images
      </button>
      <div className="mt-4">
        {/* Display the generated images here */}
        {generatedImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Generated Image ${index}`}
            className="w-64 h-64 mx-auto my-2"
          />
        ))}
      </div>
    </div>
  );
}

const AddImageToGallery = ({ imageUrl }) => {
  return (
    <div className="w-1/4 p-2">
      <img
        src={imageUrl}
        alt="Food Sweater"
        className="w-full h-full object-cover rounded-md"
      />
    </div>
  );
};

export default ImageGenerator;
