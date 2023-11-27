import React from "react";
import Image from "../components/Image";

import { db } from "../firebase/database";
import { ref, onValue } from "firebase/database";
import { addGalleryItem } from "../firebase/storage";

const Gallery = () => {
  const [images, setImages] = React.useState([]);

  React.useEffect(() => {
    // Get the images from Firebase Storage
    const galleryRef = ref(db, "gallery");
    onValue(galleryRef, (snapshot) => {
      const data = snapshot.val();
      console.log("data: ", data);
      if (data) {
        const imageUrls = Object.values(data);
        setImages(imageUrls);
      }
    });
  }, []);

  return (
    <>
      <div
        className="pt-10 pb-10"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/images/background-wood.jpg"
          })`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <div
          className=" mx-auto  p-4 rounded-lg  mx-6 md:mx-20 text-white  bg-slate-800"
          style={{ maxWidth: 1600 }}
        >
          <div className=" stitchedBorder whiteStitch pl-6 pr-6">
            <h2 className="text-4xl  mb-4 text-amber-300 text-center mt-6 mx-2 block">
              Check out the TFG Closet
            </h2>
            <GalleryImages images={images} />
          </div>
        </div>
      </div>
    </>
  );
};

const GalleryImages = ({ images }) => {
  return (
    <div className="container mx-auto flex flex-wrap justify-center py-8">
      {images.map((imageUrl, index) => (
      <Image imageUrl={imageUrl} key={index} />
      ))}
    </div>
  );
};

export default Gallery;
