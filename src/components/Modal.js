import React from "react";
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
const Modal = ({ isOpen, onClose, newDataObj, children }) => {

  const [username, setUsername] = React.useState("") //! might not need
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
      } catch (e) {
        console.error("Error adding document: ", e);
      }
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


            </div>
            
          </div>
          <form className="text-white my-4 p-4 py-6">
              <h3 className="bg-scroll-green">Add your name to let people know who this festive fit is from</h3>
  <label>


    <input className="text-black w-full py-1 px-2" type="text" name="name" 
        onChange={(e) =>setUsername(e.target.value)}
    
    placeholder="Enter name here" />
  </label>
  <input className="w-full py-1 px-2 bg-amber-300 hover:bg-amber-400 transition-colors text-slate-800 font-bold cursor-pointer" onClick={onSubmit} type="submit" value="Submit" />
</form>
        </div>
        {/* <button onClick={onClose}>Close Modal</button> */}
      </div>
    </div>
  );
};

export default Modal;
