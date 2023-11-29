// src/App.js
import React, { useState } from "react";
import Header from "./components/Header";
import Masthead from "./modules/Masthead";
import Gallery from "./modules/Gallery";
import Footer from "./modules/Footer";

function App() {
  // Define an array of image URLs
const imageUrls = [
  "https://source.unsplash.com/random/400x300?hotdog",
  "https://source.unsplash.com/random/400x300?sweater",
  "https://source.unsplash.com/random/400x300?food",
  "https://source.unsplash.com/random/400x300?hoodie",
];
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div className="App">
      <Header />
      <div  style={{
          // add backgroundImage from public folder:
          backgroundImage: `url(${
            process.env.PUBLIC_URL + '/images/header-wood.jpg'
          })`,

          backgroundRepeat: "no-repeat",
         
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

export default App;
