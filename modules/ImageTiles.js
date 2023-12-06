import React, { useState, useEffect } from "react";
import { addGalleryItem } from "../firebase/storage";
import Modal from "../components/Modal.js";

const ImageTiles = ({ image, customPrompt, setGeneratedImage, setPrompt }) => {
  const [showModal, setShowModal] = useState(false);
  const [newItem, setNewItem] = useState(null);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToGallery = async (blob) => {
    let newItemRef = await addGalleryItem(blob, customPrompt);
    setShowModal(true);
    setNewItem(newItemRef);
    setIsAdded(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const restart = () => {
    setGeneratedImage(null);
    setPrompt("");
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
      <div className="relative">
        <Image file={image} />
        <div className="relative bottom-0 left-0 w-full">
          <div className="inlineTools addToGallery md:inline-flex items-center bg-slate-900 rounded-b-md bg-opacity-80">
            {isAdded && (
              <>
              <button
                className="bg-amber-300 hover:bg-amber-400 transition-colors text-slate-800 rounded-b-md font-bold cursor-pointer w-full"
                onClick={() => restart()}
              >
                Knit Another Sweater
              </button>
              </>
            )}
            {!isAdded && (
              <button
                className="bg-amber-300 hover:bg-amber-400 transition-colors text-slate-800 rounded-b-md font-bold cursor-pointer w-full"
                onClick={() => handleAddToGallery(image)}
              >
                Add to closet
              </button>
            )}
          </div>
        </div>
      </div>

      <Modal
        isOpen={showModal}
        onClose={closeModal}
        objId={newItem ? newItem : null}
      ></Modal>
    </div>
  );
};

const Image = ({ file }) => {
  const [image, setImage] = useState(null);
  useEffect(() => {
    if (file) {
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
};

export default ImageTiles;
