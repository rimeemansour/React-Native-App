// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps} from "firebase/app";
import  { getAuth,initializeAuth } from "firebase/auth";
import {getReactNativePersistence} from "firebase/auth/react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { getDatabase} from "firebase/database";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyB_IX3XWfFnBIDRQ1FmfQd4fpbhlQ8VDkI",
  authDomain: "socialmediaapp-1b427.firebaseapp.com",
  projectId: "socialmediaapp-1b427",
  storageBucket: "socialmediaapp-1b427.appspot.com",
  messagingSenderId: "93553222783",
  appId: "1:93553222783:web:80528b78d3fc32d2ea4b4a",
  measurementId: "G-SY47T1JPZK"
};
let ath;

let app:any;
// Initialize Firebase
if (!getApps().length) {
  try {
    app = initializeApp(firebaseConfig);
    ath = initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage),
    });
  } catch (error) {
    console.log("Error initializing app: " + error);
  }
} else {
  app = getApp();
  ath = getAuth(app);
}
const auth = getAuth(app)
export const database = getDatabase(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app)
export default auth;