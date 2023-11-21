// src/App.js
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Masthead from "./modules/Masthead";
import Gallery from "./modules/Gallery";
import Footer from "./modules/Footer";
import PromptModal from "./modules/PromptModal";

function App() {
  const [promptModalOpen, setPromptModalOpen] = useState(false);

  useEffect(() => {
    // if press cmd + k, open prompt modal
    const handleKeyDown = (e) => {
      if (e.metaKey && e.key === "k") {
        setPromptModalOpen(!promptModalOpen);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
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

      <div
        class="imgGenerator"
        id="imgGenerator"
        style={{
          // add backgroundImage from public folder:
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/images/back-stitched.jpg"
          })`,
          backgroundRepeat: "repeat",

          backgroundPosition: "center center",
        }}
      >
        <Masthead
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      </div>
      <Gallery images={imageUrls} />
      <Footer />
      <PromptModal promptModalOpen={promptModalOpen} setPromptModalOpen={setPromptModalOpen} />
    </div>
  );
}

export default App;
