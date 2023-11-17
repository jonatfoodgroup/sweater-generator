import { 
  getDatabase,
  ref,
  onValue,
  push,
  set
} from "firebase/database";
import { app } from "./firebaseConfig";


export const db = getDatabase(app);