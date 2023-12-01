import React, { useState, useEffect } from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  EmailIcon,
  EmailShareButton,
} from "react-share";

const Image = ({ imageUrl, setSelectedImage, imageID }) => {
  const [hovered, setHovered] = useState(false);
  const shareUrl = window.location.href + '/image/' + imageID;
  const title = "The Food Group Holiday Sweater Generator"; // Replace with your own title

  return (
    <div
      className="w-1/2 lg:w-1/4  relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
     <div className="m-4"><img
        src={imageUrl}
        alt={`Food Sweater`}
        className="w-full h-auto rounded-md"
      />
      </div>

      {hovered && (
        <div className="absolute  bottom-0 left-0 p-4 mt-1 w-full">
          <div className="inlineTools md:inline-flex items-center bg-slate-900 p-4 rounded-b-md bg-opacity-80">
            <DownloadButton className=" text-white  font-bold cursor-pointer" imageUrl={imageUrl} />
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
    console.log("download image", imageUrl);

    // Should be a blob that is then downloaded to the user's computer without opening a new tab

    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "image.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  };

  return (
    <button
      className="bg-amber-300 text-slate-800 py-2 px-4 rounded-md hover:bg-amber-500"
      onClick={downloadImage}
    >
      Download
    </button>
  );
};

export default Image;
