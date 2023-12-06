import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../src/components/Header";
import Footer from "../src/modules/Footer";
import Masthead from "../src/modules/Masthead";
import Gallery from "../src/modules/Gallery";
import { db } from "../src/firebase/database";
import { ref, onValue } from "firebase/database";

export default function Home() {
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const imagesRef = ref(db, "gallery");
    onValue(imagesRef, (snapshot) => {
      const data = snapshot.val();

      const imageArray = [];
      for (const key in data) {
        imageArray.push({ ...data[key], id: key });
      }
      setImages(imageArray);
    });
  }, []);
  return (
    <div className="App bg-slate-800">
      <Head>
        <title>The Food Group Holiday Sweater Generator</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Food Group Holiday Sweater Generator" />
        <meta property="og:description" content="Create your own holiday sweater with The Food Group's Holiday Sweater Generator." />
        <meta property="og:image" content={'/images/fb-cover.png'} />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <Header />
      <div
        style={{
          backgroundImage: `url(${"/images/header-wood.jpg"})`,
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
      >
        <div className="imgGenerator" id="imgGenerator">
          <Masthead
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
        </div>
        <Gallery images={images} />
      </div>
      <Footer count={images.length * 10} />
    </div>
  );
}
