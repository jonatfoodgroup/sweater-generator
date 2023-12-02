import React from "react";


const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center">
      <div className="absolute inset-0 bg-gray-500 opacity-75" onClick={onClose}></div>
      <div className="bg-white p-4 rounded-lg z-20">
        {children}
        <div className="DonationCard max-w-lg  mx-auto rounded-md overflow-hidden  bg-slate-900">
          <div className="flex items-center p-4 py-6">
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
              <h3 className="bg-scroll-green">Added to Closet!</h3>
              <p className="text-white">Your sweater is now hanging in the TFG closet and we thank you for contributing meals to Feeding America.</p>
              <form className="text-white my-4">
  <label>
    <input className="w-full py-1 px-2" type="text" name="name" placeholder="Add your name to your work!" />
  </label>
  <input className="w-full py-1 px-2 bg-amber-300 hover:bg-amber-400 transition-colors text-slate-800 font-bold cursor-pointer" type="submit" value="Submit" />
</form>

            </div>
          </div>
        </div>
        {/* <button onClick={onClose}>Close Modal</button> */}
      </div>
    </div>
  );
};

export default Modal;
