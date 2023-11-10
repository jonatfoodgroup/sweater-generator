import React from "react";
import Image from "../components/Image";

const Gallery = ({
  images
}) => {
  return (
    <div className="container mx-auto flex flex-wrap justify-center py-8">
      {images.map((imageUrl, index) => (
          <Image imageUrl={imageUrl} key={index} />
      ))}
    </div>
  );
}

export default Gallery;