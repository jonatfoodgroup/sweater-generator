import React from "react";
import Image from "../components/Image";
import { app, 
  addGalleryItem
} from "../firebase/firebaseConfig";
import { ref, onValue, getDatabase } from "firebase/database";

const Gallery = () => {
  const [images, setImages] = React.useState([]);

  React.useEffect(() => {
    const db = getDatabase(app);
    const galleryRef = ref(db, "gallery");
    onValue(galleryRef, (snapshot) => {
      const data = snapshot.val();
      console.log('Images: ', data);
      const gallery = [];
      for (let key in data) {
        gallery.push(data[key]);
      }
      setImages(gallery);
    });
  }, []);

  return (
    <>
    <GalleryForm />
    <div className="container mx-auto flex flex-wrap justify-center py-8 p-10 rounded-lg bg-slate-800">
      <h2 className="text-4xl  mb-4 text-amber-300">Checkout the TFG Closet</h2>
  
      
      <GalleryImages images={images} />
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