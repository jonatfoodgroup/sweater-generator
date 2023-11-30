import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center">
      <div className="absolute inset-0 bg-gray-500 opacity-75" onClick={onClose}></div>
      <div className="bg-white p-4 rounded-lg z-20">
        {children}
        <p> some modal content</p>
        <button onClick={onClose}>Close Modal</button>
      </div>
    </div>
  );
};

export default Modal;