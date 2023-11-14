import React, { useState, useEffect } from "react";
import { ArrowDownTrayIcon, HandThumbUpIcon } from "@heroicons/react/24/solid";
import { FacebookShareButton, TwitterShareButton, EmailShareButton } from "react-share";

const Image = ({ imageUrl, setSelectedImage }) => {
  const [hovered, setHovered] = useState(false);

  const shareUrl = window.location.href; // Replace with your own URL
  const title = "Food Sweater Generator"; // Replace with your own title

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
          
          {/* Share buttons */}
          <div className="flex space-x-2">
            <p className="text-white">Share:</p>
            <FacebookShareButton url={shareUrl} quote={title}>
              Facebook
            </FacebookShareButton>
            <TwitterShareButton url={shareUrl} title={title}>
              Twitter
            </TwitterShareButton>
            <EmailShareButton url={shareUrl} subject={title}>
              Email
            </EmailShareButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default Image;
