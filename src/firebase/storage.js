import { getStorage, ref as storageRef, uploadBytes, getDownloadURL,listAll
} from "firebase/storage";
import { app } from "./firebaseConfig";

export const storage = getStorage(app);

// Accepts a File object as an argument
export const addGalleryItem = async (imageFile) => {
  console.log("Adding image to gallery");
  const galleryRef = storageRef(storage, "gallery");
  const fileName = `image_${Date.now()}.png`; // You can generate a unique filename here
  const imageRef = storageRef(galleryRef, fileName);

  try {
    // Upload the image to Firebase Storage
    await uploadBytes(imageRef, imageFile);

    // Get the download URL of the uploaded image
    const downloadURL = await getDownloadURL(imageRef);

    console.log("Image URL: ", downloadURL);
    return downloadURL;

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
