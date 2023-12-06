import React, { useState } from "react";
import axios from "axios";
import DonationCard from "../modules/DonationCard";

const apiKey = process.env.REACT_APP_OPENAI_API_KEY || "";
const apiRoute = "https://api.openai.com/v1/images/generations";

function ImageGenerator({ addImage, customPrompt, setCustomPrompt }) {
  const [generatedImage, setGeneratedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateImage = async () => {
    setIsLoading(true);
    let image = await generateImage();
    setIsLoading(false);
  };

  const generateImage = async () => {
    let tfgRecos =
      "a knit sweater with holiday theme or design, made out of real food, without any people or mannequin. Should be detailed and tasty! The prompt from The Food Group's Holiday Sweater Generator is: ";
    let promptToUse = tfgRecos + customPrompt;

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
        },  
        {
        
          headers: {
            Authorization: `Bearer ${apiKey}`,
           "Content-Type": "application/json",
          },     
        }
      );

      const generatedImagesData = response.data;
      const base64Image = generatedImagesData.data[0].b64_json;

      const imageBlob = await fetch(
        `data:image/jpeg;base64,${base64Image}`
      ).then((res) => res.blob());
      addImage(imageBlob);
      setGeneratedImage(imageBlob);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return imageBlob;
    } catch (error) {
      console.error("Error generating images:", error);
      return null;
    }
  };

  return (
    <div className="container px-5 mx-auto containerFlex">
      <h2 className="text-amber-300 text-xl md:text-2xl mb-4 text-center self-center">
        Enter your prompt below
      </h2>
      <textarea
        className="w-full p-3 text-black border-2 font-semibold border-amber-500 rounded-md text-lg placeholder-gray-400 focus:outline-none focus:border-blue-700 mb-2"
        placeholder="Infuse your ingredients"
        value={customPrompt}
        onChange={(e) => setCustomPrompt(e.target.value)}
        rows="2" // Adjust the number of rows as needed
      />
      <button
        className="sm:m-auto sm:w-auto  sm:flex mx-0 w-full text-slate-800 py-3 px-6 text-xl rounded-md transition-colors duration-300 bg-amber-300 hover:bg-amber-400 font-bold block items-center"
        onClick={handleGenerateImage}
      >
        {isLoading ? (
          <Loadericon isActive={isLoading} />
        ) : generatedImage ? (
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
      </svg>
      &nbsp;Knitting
    </>
  );
};

export default ImageGenerator;
