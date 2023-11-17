import React from "react";
import Image from "../components/Image";
import { app, 
  addGalleryItem,
  getImagesFromStorage
} from "../firebase/storage";

const Gallery = () => {
  const [images, setImages] = React.useState([]);

  React.useEffect(() => {
    // Get the images from Firebase Storage
    getImagesFromStorage().then((imageUrls) => {
      console.log("imageUrls: ", imageUrls);
      setImages(imageUrls);
    });
  }, []);

  return (
    <>
    <div  className="pt-10 pb-10"
        style={{
          // add backgroundImage from public folder:
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/images/background-wood.jpg"
          })`,
          backgroundRepeat: "no-repeat",
         
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >


<div className=" mx-auto  p-4 rounded-lg  mx-6 md:mx-20 text-white  bg-slate-800" style={{ maxWidth: 1600 }}>
<div className=" stitchedBorder whiteStitch">
        <h2 className="text-4xl  mb-4 text-amber-300 text-center mt-6 mx-2 block">Checkout the TFG Closet</h2>  
       <GalleryImages images={images} />
      </div>
      </div>
      </div>
    </>
  );
}

const GalleryImages = ({ images }) => {
  return (
    <div className="container mx-auto flex flex-wrap justify-center py-8">
      {images.map((imageUrl, index) => (
          <Image imageUrl={imageUrl} key={index} />
      ))}
    </div>
  );
}

// An input field to place a URL
// A button to submit the URL
const GalleryForm = () => {
  const [imageUrl, setImageUrl] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addGalleryItem(imageUrl);
    setImageUrl("");
  }

  return (
    <form onSubmit={handleSubmit} className="container mx-auto flex flex-wrap justify-center py-8">
      <input 
        type="text"
        placeholder="Enter image URL"
        className="border-2 border-gray-400 rounded-lg px-4 py-2"
        value={imageUrl}
        onChange={(event) => setImageUrl(event.target.value)}
      />
      <button 
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg ml-4"
      >
        Submit
      </button>
    </form>
  );
}

export default Gallery;