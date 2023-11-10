import React, { useState } from "react";
import { ArrowDownTrayIcon, HandThumbUpIcon } from "@heroicons/react/24/solid";

const Image = ({ imageUrl, setSelectedImage }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="w-1/2 md:w-1/4 p-2 relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={imageUrl}
        alt={`Food Sweater`}
        className="w-full h-auto rounded-md"
      />
      {hovered && (
        <div className="absolute top-0 right-0 mt-2 md:mt-4 mr-2 md:mr-4 flex flex-row space-x-2">
          <ArrowDownTrayIcon className="h-8 w-8 text-white cursor-pointer" />
          <HandThumbUpIcon className="h-8 w-8 text-white cursor-pointer" />
        </div>
      )}
    </div>
  );
};

export default Image;
