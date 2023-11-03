import React, { useState } from "react";

const ImageOverlay = ({ generatedImage }) => {
  const [headshot, setHeadshot] = useState(null);

  const handleHeadshotUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setHeadshot(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleShareClick = () => {
    // Combine the generatedImage and headshot using HTML5 Canvas
    // Convert the combined image to a data URL (base64)
    // Store it in localStorage
    // Create a downloadable link and trigger the download
  };

  return (
    <div className="container mx-auto mt-4 p-4">
      <h1 className="text-2xl font-bold mb-4">Image Overlay</h1>

      <div className="bg-white p-4 rounded-lg shadow-lg">
        <input
          type="file"
          accept="image/*"
          onChange={handleHeadshotUpload}
          className="mb-4"
        />

        {headshot && (
          <div>
            <h2 className="text-xl font-bold mb-2">Combined Image:</h2>
            <div className="flex flex-wrap items-center justify-center">
              <div className="w-full md:w-1/2">
                <img
                  src={generatedImage}
                  alt="Generated Image"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="w-full md:w-1/2 mt-4 md:mt-0">
                <img
                  src={headshot}
                  alt="Headshot"
                  className="w-40 h-40 mx-auto rounded-full"
                />
              </div>
            </div>
            <button
              onClick={handleShareClick}
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mt-4 mx-auto block"
            >
              Share and Download
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageOverlay;
