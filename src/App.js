// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Masthead from './modules/Masthead';
import ImageOverlay from './modules/ImageOverlay';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div className="App">
      <Header />
      <Masthead selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
    </div>
  );
}

export default App;
