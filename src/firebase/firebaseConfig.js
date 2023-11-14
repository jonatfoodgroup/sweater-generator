// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { 
  getDatabase,
  ref,
  onValue,
  push,
  set
} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg1HPgEzq2X48I8iuqienpjxDthVJc-98",
  authDomain: "sweater-generator.firebaseapp.com",
  projectId: "sweater-generator",
  storageBucket: "sweater-generator.appspot.com",
  messagingSenderId: "666771304403",
  appId: "1:666771304403:web:b8a009827bcca00baa8926"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

export const addGalleryItem = (imageUrl) => {
  const galleryRef = ref(db, "gallery");
  const newImageRef = push(galleryRef);
  set(newImageRef, imageUrl);
}
