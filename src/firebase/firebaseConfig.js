// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL,listAll, deleteObject, ref as storageRefFromUrl

} from "firebase/storage";
import { 
  getDatabase,
  ref,
  onValue,
  push,
  get,
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
export const storage = getStorage(app);

export const addGalleryItem = async (imageFile) => {
  const galleryRef = storageRef(storage, "gallery");
  const fileName = `image_${Date.now()}.png`; // You can generate a unique filename here
  const imageRef = storageRef(galleryRef, fileName);

  try {
    // Upload the image to Firebase Storage
    await uploadBytes(imageRef, imageFile);

    // Get the download URL of the uploaded image
    const downloadURL = await getDownloadURL(imageRef);

    console.log("Image URL: ", downloadURL);

    // Store the download URL in the Firebase Realtime Database
    const dbRef = ref(db, "gallery");
    push(dbRef, downloadURL);
  } catch (error) {
    console.error("Error uploading image:", error);
  }
};

export const getImagesFromStorage = async () => {
  console.log("Getting images from storage");

  const galleryRef = storageRef(storage, "gallery");
  const imageUrls = [];

  try {
    // Get image URLs from Firebase Storage
    const listResult = await listAll(galleryRef);
    console.log("listResult: ", listResult);
    const imageRefs = listResult.items;

    for (const imageRef of imageRefs) {
      const imageUrl = await getDownloadURL(imageRef);
      imageUrls.push(imageUrl);
    }

    console.log("Image URLs: ", imageUrls);

    return imageUrls;
  } catch (error) {
    console.error("Error getting images:", error);
  }
}

export const deleteImage = async (imageUrl) => {
  console.log("Deleting image: ", imageUrl);

  try {
    // Delete image from Firebase Storage
    const imageRef = storageRefFromUrl(storage, imageUrl);
    await deleteObject(imageRef);

    // Delete image from Firebase Realtime Database
    const dbRef = ref(db, "gallery");
    const snapshot = await get(dbRef);
    const data = snapshot.val();
    const imageUrls = Object.values(data);
    const index = imageUrls.indexOf(imageUrl);
    const key = Object.keys(data)[index];
    const imageToDeleteRef = ref(db, `gallery/${key}`);
    await set(imageToDeleteRef, null);
  } catch (error) {
    console.error("Error deleting image:", error);
  }
}

export const getPrompt = async () => {
  const dbRef = ref(db, "prompt");
  const snapshot = await get(dbRef);
  const data = snapshot.val();
  return data;
}

export const setPrompt = async (prompt) => {
  const dbRef = ref(db, "prompt");
  await set(dbRef, prompt);
}