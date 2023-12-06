import React, { useState } from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  EmailIcon,
  EmailShareButton,
} from "react-share";
import { ref, getStorage, getBlob } from "firebase/storage";

const Image = ({ imageUrl, setSelectedImage, customPrompt, name, imageID }) => {
  const [hovered, setHovered] = useState(false);
  const shareUrl = window.location.href + imageID;
  const title = "The Food Group Holiday Sweater Generator"; 
  const quote = "Check out my sweater!"; 

  const handleEmail = () => {
    console.log("email clicked", shareUrl);
  }
  return (
    <div className="w-full lg:w-1/4 relative">
      <div
        className="m-4 mb-1 relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="relative">
          <img
            src={imageUrl}
            alt={`Food Sweater with ${customPrompt}`}
            className="w-full h-auto rounded-md"
          />
        </div>

        {hovered && (
          <div className="absolute bottom-0 left-0 mt-1 w-full">
            <div className="inlineTools md:inline-flex items-center bg-slate-900 p-4 rounded-b-md bg-opacity-80">
              <DownloadButton
                className=" text-white  font-bold cursor-pointer"
                imageUrl={imageUrl}
              />
              <FacebookShareButton
                url={shareUrl}
                quote={quote}
              >
                <FacebookIcon size={46} round={true} />
              </FacebookShareButton>
              <EmailShareButton url={shareUrl} subject={title} body={quote} onClick={handleEmail}>
                <EmailIcon size={46} round={true} />
              </EmailShareButton>
            </div>
          </div>
        )}
      </div>
      <p className=" text-center text-md leading-tight font-thin mx-4 my-2 mt-0 mb-2">
        "{customPrompt}"
        {name ? (
          <span className="block font-sway text-sm font-bold text-amber-300">
            {" "}
            by {name}
          </span>
        ) : (
          ""
        )}
      </p>
    </div>
  );
};

const DownloadButton = ({ imageUrl }) => {
  const downloadImage = () => {
    const storage = getStorage();
    const storageRef = ref(storage, imageUrl);
    getBlob(storageRef).then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "food-sweater.png";
      a.click();
    });
  };

  return (
    <button
      className="bg-amber-300 text-slate-800 py-2 px-4 rounded-md hover:bg-amber-500 font-semibold cursor-pointer"
      onClick={downloadImage}
    >
      Download
    </button>
  );
};

export default Image;
