import React, { useEffect }from "react";
import { updateGalleryItem } from "../firebase/storage";
import { update } from "firebase/database";

import { db } from "../firebase/database";
import { ref, onValue } from "firebase/database";


const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
const Modal = ({ isOpen, onClose, children } ) => {
  const [username, setUsername] = React.useState("");
  useEffect(() => {

  }, []);
  // const [username, setUsername] = React.useState("") //! might not need
  // const [username, setUsername] = React.useState(newDataObj.username) <--
  // React.useEffect(() => {
    // Get the images from Firebase Storage
    // const galleryRef = ref(db, "gallery");
    // onValue(galleryRef, (snapshot) => {
    //   const ImgListObj = snapshot.val();
    //   const lastImgTuple = Object.entries(ImgListObj).pop();
      
    //    lastImgTuple[1].username = username;
      
    //   console.log("lastImgObj: ", lastImgTuple);
      
      // if (data) {
      //   const imageUrlObjs = Object.values(data);
  
      // }
  //   });
  // }, []);

  if (!isOpen) {
    return null;
  }

  if (onClose) {
    scrollToElement('closet');
  }


  const onSubmit = async (e) => {
    e.preventDefault();  
    const galleryRef = ref(db, "gallery");
    onValue(galleryRef, (snapshot) => {
      const ImgListObj = snapshot.val();
      const lastImgTuple = Object.entries(ImgListObj).pop();
      lastImgTuple[1].username = username;
      const lastItemKey = lastImgTuple[0];
      const lastItem = lastImgTuple[1];
      console.log("lastItem: ", lastImgTuple[1]);
  
    })
      try {

        updateGalleryItem(username)

        onClose();
        // scrollToElement('closet');
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-60" onClick={onClose}></div>
      <div className="bg-white sm:p-4 p-2 sm:mx-auto mx-4 rounded-lg z-20">
        {children}
        <div className="DonationCard max-w-lg  mx-auto rounded-md sm:p-16 px-6 pt-10 pb-10 bg-slate-900">
          <div className="items-center py-4">
            {/* Circular Avatar Image */}
            <div className="mx-auto rounded-full sm:h-28 sm:w-28 h-20 w-20 absolute bg-white inset-x-0 overlay-top">
              <img
                src="https://nvlupin.blob.core.windows.net/images/van/FAM/FAM/1/87084/images/themes/favicon.png"
                alt="Avatar"
                className="object-cover w-full h-full"
              />
            </div>

            {/* Content on the Right */}
            <div className="text-center">
              <h3 className="text-3xl text-amber-300 pb-4">Added to Closet!</h3>
              <p className="text-xl text-white">Your sweater is now hanging in the TFG closet and we thank you for contributing meals to Feeding America.</p>


            </div>
            
          </div>
          <hr className="border-0 border-dashed border-b-2 rounded-md my-4"></hr>
          <form className="text-center block w-5/6 mx-auto text-white pb-0 pt-3">
              <p className="text-l text-white text-center">Add your name to let people know who this festive fit is from</p>
              <div className="flex w-full pt-6">
  <label className="w-full">


    <input className="w-full p-3 text-slate-800 rounded-l-md text-m placeholder-gray-400 focus:outline-none focus:border-blue-700" type="text" name="name" 
        onChange={(e) =>setUsername(e.target.value)}
    
    placeholder="Enter name here" />
  </label>
  <input className="w-5/12 cursor-pointer w-auto rounded-r-md text-slate-800 text-m transition-colors duration-300 bg-amber-300 hover:bg-amber-400 p-3" 
  onClick={ onSubmit } type="submit" value="Submit" />
  </div>
</form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
