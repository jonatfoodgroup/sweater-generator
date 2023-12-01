import React from "react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { addGalleryItem } from "../firebase/storage";


const ImageTiles = ({ images }) => {
  const handleAddToGallery = async (blob) => {
    let image = await addGalleryItem(blob);
    document.getElementById('modal').classList.toggle('hidden');
  }

const toggleModal = () => {
  document.getElementById('modal').classList.toggle('hidden');
};

const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

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
      <button className="bg-amber-300 hover:bg-amber-400 transition-colors text-slate-800 rounded-b-md font-bold cursor-pointer w-full" onClick={() => { handleAddToGallery(images[images.length-1]);}}>Add to gallery</button>
    </div>
  </div>
          </div>
        {/* </div>
      ))} */}
{/* <div class="flex items-center justify-center h-screen">
  <button class="py-2 px-6 bg-blue-500 text-white rounded hover:bg-blue-700" onclick="toggleModal()">Show Modal</button>
</div> */}
<div class="fixed z-10 overflow-y-auto top-0 w-full left-0 hidden" id="modal">
  <div class="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    <div class="fixed inset-0 transition-opacity">
      <div class="absolute inset-0 bg-gray-900 opacity-75" />
    </div>
    <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
    <div class="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
      <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
      <div className="DonationCard max-w-lg  mx-auto rounded-md overflow-hidden  bg-slate-900">
<div className="flex items-center p-4 ">
  {/* Circular Avatar Image */}
  <div className="rounded-full h-12 w-12 flex-shrink-0 bg-white  overflow-hidden">
    <img
      src="https://nvlupin.blob.core.windows.net/images/van/FAM/FAM/1/87084/images/themes/favicon.png"
      alt="Avatar"
      className="object-cover w-full h-full"
    />
  </div>

  {/* Content on the Right */}
  <div className="mx-4 ">
    <h3 className="bg-scroll-green">Added to Closet!</h3>
    <p className="text-white">Your sweater is now hanging in the TFG closet and we thank you for contributing meals to Feeding America.</p>
    <button type="button" class="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2" onClick={() => scrollToElement("closet")}><i class="fas fa-times"></i> Close</button>
  </div>
</div>
</div>
      </div>
    </div>
  </div>
</div>
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