import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../modules/Footer";
import Masthead from "../modules/Masthead";
import Gallery from "../modules/Gallery";
import { db } from "../firebase/database";
import { ref, onValue } from "firebase/database";

let badWords = ["mech","ignore"]

export default function Home() {
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const imagesRef = ref(db, "gallery");
    onValue(imagesRef, (snapshot) => {
      const data = snapshot.val();

      const imageArray = [];
      for (const key in data) {

        // if the prompt includes a bad word, skip it
        let skip = false;
        badWords.forEach((word) => {
          if (data[key].prompt.toLowerCase().includes(word) || data[key].prompt === "") {
            skip = true;
          }
        });

        if (skip) {
          continue;
        } else {
          imageArray.push({ ...data[key], id: key });
        } 
      }
      setImages(imageArray);
    });
  }, []);
  return (
    <div className="App bg-slate-800">
      <Head>
        <title>The Food Group Holiday Sweater Generator!</title>
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
      <Footer count={images.length} />
    </div>
  );
}
