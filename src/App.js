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

<div style={{ 
     // add backgroundImage from public folder:
      backgroundImage: `url(${process.env.PUBLIC_URL + '/images/background.jpg'})`,
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover' 
    }}>
<Masthead selectedImage={selectedImage} setSelectedImage={setSelectedImage} />

</div>

    </div>
  );
}

export default App;
