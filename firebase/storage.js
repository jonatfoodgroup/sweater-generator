import { getStorage, ref as storageRef, uploadBytes, getDownloadURL} from "firebase/storage";
import { app } from "./firebaseConfig";
import { db } from "./database";
import { set, ref, push, update } from "firebase/database";

export const storage = getStorage(app);

export const addGalleryItem = async (imageFile, prompt) => {
  const galleryRef = storageRef(storage, "gallery");
  const fileName = `image_${Date.now()}.png`; // You can generate a unique filename here
  const imageRef = storageRef(galleryRef, fileName);

  try {
    await uploadBytes(imageRef, imageFile);
    const downloadURL = await getDownloadURL(imageRef);
    const galleryListRef = ref(db, "gallery");

    let obj = {
      url: downloadURL,
      prompt, 
      username: ""
    }

    const newGalleryItemRef = push(galleryListRef);
    set(newGalleryItemRef, obj);
    return newGalleryItemRef.key;
  } catch (error) {
    console.error("Error uploading image:", error);
  }
};

export const updateGalleryItem = (name, key) => {
  try {
    const itemRef = ref(db, "gallery/" + key);
    update(itemRef, { username: name})
  } catch (error) {
    console.error("Error getting images:", error);
  }
};
