import React from "react";

const DonationCard = () => {

return (
<div className="DonationCard max-w-lg  mx-auto mt-6 rounded-md overflow-hidden  bg-slate-800 self-end">
<div className="flex items-center p-4">
  {/* Circular Avatar Image */}
  <div className="rounded-full h-12 w-12 flex-shrink-0 bg-white overflow-hidden">
    <img
      src="https://nvlupin.blob.core.windows.net/images/van/FAM/FAM/1/87084/images/themes/favicon.png"
      alt="Avatar"
      className="object-cover w-full h-full"
    />
  </div>

  {/* Content on the Right */}
  <div className="mx-4 ">
    <h3 className="text-amber-300">You Generate. We Donate.</h3>
    <p className="text-white">For every sweater added to our gallery, we’ll donate 10 meals to Feeding America! </p>
    
  </div>
</div>
</div>)
}
export default DonationCard;


