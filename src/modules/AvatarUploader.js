import React, { useEffect, useState } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

const PersonalizeButton = ({
  imageUrl = "https://images.unsplash.com/photo-1682687220247-9f786e34d472?q=80&w=3330&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
}) => {
  const [active, setActive] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [crop, setCrop] = useState({ unit: "%", width: 30, aspect: 1 / 1 });
  const [completedCrop, setCompletedCrop] = useState(null);
  const [loadedImage, setLoadedImage] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const openModal = () => {
    setActive(true);
  };

  const handleDragStart = () => {
    setDragging(true);
  };

  const handleDrag = (e) => {
    console.log("drag", e.screenX, e.clientY);
    setPosition({ x: e.screenX, y: e.clientY });
  };

  const handleDragEnd = (e) => {
    console.log("drag end", e.screenX, e.clientY);
    setPosition({ x: e.screenX, y: e.clientY });
    setDragging(false);
  };

  const closeModal = () => {
    setActive(false);
  };

  // On file upload (click the upload button), save the file to state
  const onFileUpload = (event) => {
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleCropChange = (newCrop) => {
    setCrop(newCrop);
  };

  const handleCropComplete = (crop) => {
    setCompletedCrop(crop);
  };

  const handleImageLoaded = (image) => {
    // You can do any image-related operations here if needed
    // For example, you can automatically select the crop area
    // if the image is not a square

    // You can also save the image file to state if needed
    setLoadedImage(image);
  };

  useEffect(() => {
    if (!completedCrop || !selectedImage) return;
  }, [completedCrop, selectedImage]);

  // If the user presses enter with the crop area selected, crop the image
  useEffect(() => {
    if (!completedCrop || !selectedImage) return;

    const canvas = document.createElement("canvas");
    const scaleX = loadedImage.naturalWidth / loadedImage.width;
    const scaleY = loadedImage.naturalHeight / loadedImage.height;
    canvas.width = completedCrop.width;
    canvas.height = completedCrop.height;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      loadedImage,
      completedCrop.x * scaleX,
      completedCrop.y * scaleY,
      completedCrop.width * scaleX,
      completedCrop.height * scaleY,
      0,
      0,
      completedCrop.width,
      completedCrop.height
    );

    const base64Image = canvas.toDataURL("image/jpeg");
    setCroppedImage(base64Image);
  }, [completedCrop, selectedImage]);

  return (
    <div className="App">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={openModal}
      >
        Add Headshot
      </button>

      {active && (
        <div className="fixed w-full h-full inset-0 z-50 flex items-center justify-center">
          {/* Overlay */}
          <div className="fixed inset-0 bg-black opacity-50"></div>

          {/* Modal */}
          <div className="bg-white w-full h-full p-16 rounded-lg z-60 relative">
            {/* Close button */}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              X
            </button>
            <h2 className="text-xl md:text-2xl mb-4 text-center text-black">
              Personalize Your Sweater
            </h2>
            {/* 3 steps (tailwind) - 1. Upload your photo 2. Crop it 3. Place and download */}
            <div className="flex justify-between items-center max-w-md mx-auto">
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full bg-blue-500 text-white flex justify-center items-center ${
                    selectedImage ? "bg-green-500" : ""
                  }`}
                >
                  1
                </div>
                <p className="text-sm text-black">Upload your photo</p>
              </div>
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full bg-blue-500 text-white flex justify-center items-center ${
                    croppedImage ? "bg-green-500" : ""
                  }`}
                >
                  2
                </div>
                <p className="text-sm text-black">Crop it</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex justify-center items-center">
                  3
                </div>
                <p className="text-sm text-black">Place and download</p>
              </div>
            </div>

            {!selectedImage && (
              <div className="flex justify-center mt-4">
                <input
                  type="file"
                  onChange={onFileUpload}
                  className="border-2 border-gray-300 p-2 w-96"
                />
              </div>
            )}
            {!croppedImage && selectedImage && (
              <ReactCrop
                crop={crop}
                onChange={handleCropChange}
                onComplete={handleCropComplete}
                circularCrop={true}
              >
                <img
                  src={selectedImage}
                  alt="Selected Photo"
                  className="w-auto"
                  style={{ height: 400 }}
                  onLoad={(e) => handleImageLoaded(e.target)}
                />
              </ReactCrop>
            )}

            {croppedImage && (
              <>
              <div className="flex justify-center mt-20 py-10 bg-gray-200 relative">
                <img src={imageUrl} alt="Selected Photo" className="w-1/3" />
                <img
                  src={croppedImage}
                  alt="Cropped Photo"
                  className="w-32 h-32 absolute left-200 cursor-pointer border-2 border-yellow-300"
                  style={{
                    transform: `translate(${position.x}px, ${position.y}px)`,
                    top: -20,
                  }}
                  draggable={true}
                  onDragStart={handleDragStart}
                  onDrag={handleDrag}
                  onDragEnd={handleDragEnd}
                />
              </div>
              </>
            )}

            {

              croppedImage && (
            <div className="flex justify-center mt-4">
            {/* Save button */}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
              Download
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
              Add to Gallery
            </button>
            </div>
            )

            }
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonalizeButton;
