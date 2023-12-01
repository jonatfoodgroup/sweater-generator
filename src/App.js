// src/App.js
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Masthead from "./modules/Masthead";
import Gallery from "./modules/Gallery";
import Footer from "./modules/Footer";
import { useParams } from "react-router-dom";
import { db } from "./firebase/database";
import {  ref, get } from "firebase/database";

function App() {
  const { id } = useParams();
  const [singleImage, setSingleImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (id) {
    //  Check the database for the image with the id
    //  If the image exists, set it as the selected image
    //  If the image does not exist, redirect to the homepage

    const docRef = ref(db, "gallery/" + id);
    get(docRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          setSingleImage(snapshot.val());
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
    
  }
  }, [id]);
  // Define an array of image URLs
  const imageUrls = [
    "https://source.unsplash.com/random/400x300?hotdog",
    "https://source.unsplash.com/random/400x300?sweater",
    "https://source.unsplash.com/random/400x300?food",
    "https://source.unsplash.com/random/400x300?hoodie",
  ];
  
  if (singleImage) {
    return (
      <div className="App text-center justify-center">
        <SingleImage image={singleImage} />
      </div>
    );
  }
  return (
    <div className="App">
      <Header />
      <div  style={{
          // add backgroundImage from public folder:
          backgroundImage: `url(${
            process.env.PUBLIC_URL + '/images/header-wood.jpg'
          })`,

          backgroundRepeat: "no-repeat",
         backgroundAttachment: "fixed",
          backgroundPosition: "top center",
          backgroundSize: "cover"
        }}
        >

      
      <div class="imgGenerator" id="imgGenerator"
       
      >
        <Masthead
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
        </div>
        <Gallery images={imageUrls} />
        </div>
        <Footer />
    </div>
  );
}

const SingleImage = ({ image }) => {
  return (
    <div className="single-image text-center">
      <img src={image} alt="" className="w-1/2 m-auto" />
    </div>
  );
}

export default App;
