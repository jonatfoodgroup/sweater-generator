import React, { useEffect } from "react";
import { useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { addGalleryItem } from "../firebase/storage";
import Modal from "../components/Modal.js"; 


const ImageTiles = ({ images, customPrompt }) => { // props = { images, customPrompt }
  const [showModal, setShowModal] = useState(false);

  const handleAddToGallery = async (blob) => {
    let prompAndImageObj = await addGalleryItem(blob, customPrompt);
    setShowModal(true);

  };
  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    console.log(customPrompt);
  }, [customPrompt]);
  return (

    <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
      {/* {images.map((blob, index) => (
        <div key={index}> */}
        <div className="relative">
          {/* <button className="border-1  py-2 m-1 border-solid border-amber-400 flex-1 inline-flex items-center h-12 w-15 text-sm rounded-md text-white m-0 bg-black" onClick={() => handleAddToGallery(images[images.length-1])}>
            <PlusCircleIcon />
            Add to gallery
          </button> */}
          <Image file={images[images.length-1]} />
          <div className="relative bottom-0 left-0 w-full">
    <div className="inlineTools addToGallery md:inline-flex items-center bg-slate-900 rounded-b-md bg-opacity-80">
    <button
              className="bg-amber-300 hover:bg-amber-400 transition-colors text-slate-800 rounded-b-md font-bold cursor-pointer w-full"
              onClick={() => handleAddToGallery(images[images.length - 1])}
            >Add to closet</button>
    </div>
  </div>
          </div>

          <Modal isOpen={showModal} onClose={closeModal}>
        {/* Your modal content goes here */}
        <p className="text-black">Modal content here</p>
      </Modal>
        {/* </div>
      ))} */}
    </div>
  );
};

// Display blob using file reader
const Image = ({file}) => {
  const [image, setImage] = React.useState(null);

  React.useEffect(() => {
    if (file) {
      console.log("file", file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }, [file]);

  if (!file) {
    return null;
  }

  return (
    <div className="flex flex-col items-center">
      <img
        src={image}
        className="w-full h-full object-cover	max-w-4xl rounded-lg"
      />
    </div>
  );
}


export default ImageTiles;