import React, { useEffect, useState } from "react";
import axios from "axios";
import { addGalleryItem } from "../firebase/firebaseConfig";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import DonationCard from "../modules/DonationCard";

const apiKey = process.env.REACT_APP_OPENAI_API_KEY || "";

const apiRoute = "https://api.openai.com/v1/images/generations";

function ImageGenerator({ addImage }) {
  const [selectedPrompt, setSelectedPrompt] = useState("");
  const [customPrompt, setCustomPrompt] = useState("");
  const [generatedImages, setGeneratedImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateImages = async () => {
    setIsLoading(true);

    let image = await generateImage();

    if (generatedImages.length < 4) {
      // TODO: Add 3 additional images in generateImages -- ensure this doesn't exceed the API rate limit
      // Hint: You can use a for loop or a while loop to do this
    }

    setIsLoading(false);
  };

  const generateImage = async () => {
    let promptToUse = selectedPrompt;
    if (customPrompt.trim() !== "") {
      promptToUse = customPrompt;
    }

    let tfgRecos =
      "a knit sweater with holiday theme or design, made out of real food, without any people or mannequin";
    promptToUse = promptToUse + tfgRecos;
    
    // Make a POST request to the OpenAI API
    try {
      const response = await axios.post(
        apiRoute,
        {
          prompt: promptToUse,
          model: "dall-e-3",
          n: 1,
          size: "1024x1024",
          style: "vivid",
          response_format: "b64_json",
          // You may need to provide other parameters based on the OpenAI API documentation
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
        }
      );

      // Handle the response from OpenAI
      const generatedImagesData = response.data; // Modify this based on the API response structure
      const base64Image = generatedImagesData.data[0].b64_json;

      // Decode the base64 image from the base64 string
      const imageBlob = await fetch(
        `data:image/jpeg;base64,${base64Image}`
      ).then((res) => res.blob());

      addImage(imageBlob);

      // Add the base64 image to the generated images array
      setGeneratedImages((prevImages) => imageBlob);

        // Add a delay to prevent hitting the API rate limit
        await new Promise((resolve) => setTimeout(resolve, 1000));

      return imageBlob;
      
    } catch (error) {
      console.error("Error generating images:", error);

      return null;
    }
  }

  return (
    <div className="container px-5 mt-10 mx-auto">
      <h2 className="text-xl md:text-2xl mb-4 text-center">Enter your prompt below</h2>
      <textarea
        className="w-full p-3 text-black border-2 border-amber-500 rounded-md text-lg placeholder-gray-400 focus:outline-none focus:border-blue-700 mb-2"
        placeholder="Infuse your ingredients"
        value={customPrompt}
        onChange={(e) => setCustomPrompt(e.target.value)}
        rows="2" // Adjust the number of rows as needed
      />
  <button
        className="w-auto text-black py-3 px-6 text-xl rounded-md transition-colors duration-300 bg-amber-300 hover:bg-amber-400 font-bold flex items-center m-auto"
        onClick={handleGenerateImages}>
        {isLoading ? (
          <Loadericon isActive={isLoading} />
        ) : generatedImages.length > 0 ? (
          "Regenerate"
        ) : (
          "Knit My Sweater"
        )}
      </button>
     
      <DonationCard />
    </div>
  );
}

const Loadericon = ({ isActive }) => {
  if (!isActive) {
    return null;
  }

  return (
    <>
      {" "}
      <svg
        className="animate-spin h-5 w-5 ml-2 inline-block"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
        ></path>
      </svg>{" "}
      &nbsp;Knitting
    </>
  );
};

export default ImageGenerator;
