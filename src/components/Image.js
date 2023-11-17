import React, { useState, useEffect } from "react";
import { ArrowDownTrayIcon, HandThumbUpIcon } from "@heroicons/react/24/solid";
import { FacebookShareButton, FacebookIcon,TwitterIcon, TwitterShareButton,EmailIcon, EmailShareButton } from "react-share";


const Image = ({ imageUrl, setSelectedImage }) => {
  const [hovered, setHovered] = useState(false);
  const shareUrl = window.location.href; // Replace with your own URL
  const title = "The Food Group Holiday Sweater Generator"; // Replace with your own title

  return (
    <div
      className="w-1/2 md:w-1/4 relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={imageUrl}
        alt={`Food Sweater`}
        className="w-full h-auto rounded-md"
      />
      
      {hovered && (
        <div className="absolute  bottom-0 left-0 mt-1 w-full">
          <div className="inlineTools inline-flex items-center bg-slate-900 p-4 bg-opacity-80">
       <DownloadButton className=" text-white  font-bold cursor-pointer" />
        <FacebookShareButton url={shareUrl} quote={title}>
          <FacebookIcon size={46} round={true} />
        </FacebookShareButton>
        <EmailShareButton url={shareUrl} subject={title}>
          <EmailIcon size={46} round={true} />
        </EmailShareButton>
        </div>
        </div>
      )}
    </div>
  );
};

const DownloadButton = ({ imageUrl }) => {
  const downloadImage = () => {
  // download the image to my local machine with a filename of "food-sweater.png"
  const link = document.createElement("a");
  link.href = imageUrl;
  link.download = "food-sweater.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
   
  };

  return (
    <button
      className="bg-amber-300 text-black py-2 px-4 rounded-md hover:bg-amber-500"
      onClick={downloadImage}
    >
      Download
    </button>
  );
}





export default Image;
