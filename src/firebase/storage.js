import { getStorage, ref as storageRef, uploadBytes, getDownloadURL,listAll
} from "firebase/storage";
import { app } from "./firebaseConfig";
import { db } from "./database";
import { set, ref, push, update, onValue, getDatabase, child, get, limitToLast} from "firebase/database";

export const storage = getStorage(app);
const database = getDatabase();

// Accepts a File object as an argument
export const addGalleryItem = async (imageFile, prompt) => {
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

    // Add the download URL to the database
    //gallery ref
    const galleryListRef = ref(db, "gallery");

    let obj = {
      url: downloadURL,
      prompt, 
      username: ""
    }
    //push to gallery
    const newGalleryItemRef = push(galleryListRef);
    // console.log("New Gallery Item: ", newGalleryItemRef);
    set(newGalleryItemRef, obj);
    console.log("Prompt", obj)
    // return downloadURL;ås
    return obj;

  } catch (error) {
    console.error("Error uploading image:", error);
  }
};

export const updateGalleryItem = (name) => {

  
  try {
      // get last from gallery

  const galleryRef = ref(db, "gallery");
  onValue(galleryRef, (snapshot) => {
    const ImgListObj = snapshot.val();
    const lastImgTuple = Object.entries(ImgListObj).pop();
    lastImgTuple[1].username = name;
    const lastItemKey = lastImgTuple[0];
    const lastItem = lastImgTuple[1];
    console.log("lastItem: ", lastImgTuple[1]);
  // const galleryRef = storageRef(storage, "gallery");

  const starCountRef = ref(db, 'gallery/' + lastItemKey);
// console.log(starCountRef);
// console.log(lastItem);
update(starCountRef, { username: name})
  });

  } catch (error) {
    console.error("Error getting images:", error);
  }


};

export const getImagesFromStorage = async () => {
  console.log("Getting images from storage");

  const galleryRef = storageRef(storage, "gallery");
  const imageUrls = []; // rename bc obj

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
