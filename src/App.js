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
      <ImageOverlay selectedImage={selectedImage} setSelectedImage={setSelectedImage} generatedImage="https://images.unsplash.com/photo-1682687982093-4773cb0dbc2e?auto=format&fit=crop&q=80&w=2187&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    </div>
  );
}

export default App;
