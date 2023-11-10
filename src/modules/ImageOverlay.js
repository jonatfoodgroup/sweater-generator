import React, { useState, useRef } from "react";

const ImageOverlay = ({ generatedImage }) => {
  const [headshot, setHeadshot] = useState(null);
  const dropRef = useRef(null);

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
  return (
    <div className="container mx-auto mt-4 p-4">
      <h1 className="text-2xl font-bold mb-4">Image Overlay</h1>

      <div className="bg-white p-4 rounded-lg shadow-lg" ref={dropRef}>
        <input
          type="file"
          accept="image/*"
          onChange={handleHeadshotUpload}
          className="mb-4"
        />

        {headshot && (
          <div>
            <h2 className="text-xl font-bold mb-2">Combined Image:</h2>
            <div>
              <img
                src={generatedImage}
                alt="Generated Image"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageOverlay;
