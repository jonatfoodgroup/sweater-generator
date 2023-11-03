import React, { useState } from "react";

const promptOptions = [
  "Generate a sweater with a pizza pattern.",
  "Create a sweater with a sushi design.",
  "Design a sweater featuring burgers and fries.",
];

function ImageGenerator() {
  const [selectedPrompt, setSelectedPrompt] = useState("");
  const [customPrompt, setCustomPrompt] = useState("");
  const [generatedImages, setGeneratedImages] = useState([]);

  const handleGenerateImages = async () => {
    let promptToUse = selectedPrompt;
    if (customPrompt.trim() !== "") {
      promptToUse = customPrompt;
    }

    // Use the OpenAI API to generate images based on 'promptToUse'
    // Update 'generatedImages' state with the generated images
  };

  return (
    <div className="container mx-auto mt-4 p-4">
      <h1 className="text-2xl font-bold mb-4">Enter your prompt below</h1>

      <textarea
        className="w-full p-3 border-2 border-blue-500 rounded-md text-lg placeholder-gray-400 focus:outline-none focus:border-blue-700 mb-4"
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
        <p className="font-bold">Select a Food Sweater Design:</p>
        <div className="flex flex-wrap mt-2">
          {promptOptions.map((option, index) => (
            <button
              key={index}
              className={`p-2 border-gray-300 text-black border rounded-md mx-2 mb-2 hover:bg-gray-100 focus:outline-none focus:border-blue-500 ${
                selectedPrompt === option ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => setSelectedPrompt(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

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

export default ImageGenerator;
