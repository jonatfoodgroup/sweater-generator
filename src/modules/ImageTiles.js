import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { storage } from "../firebase/storage";


const ImageTiles = ({ images }) => {
  const handleAddToGallery = async (imageUrl) => {
    // Get file data from the url using FileReader API

  }


  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
      {images.map((imageUrl, index) => (
        <div key={index}>
          <button className="border-1  py-2 m-1 border-solid border-amber-400 text-sm rounded-md text-white m-0 w-full bg-black" onClick={() => handleAddToGallery(imageUrl)}>
            <PlusCircleIcon />
            Add to gallery
          </button>
          <img
            src={imageUrl}
            alt={`Generated Image ${index}`}
            className="w-full h-full object-cover max-h-56	max-w-4xl rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageTiles;