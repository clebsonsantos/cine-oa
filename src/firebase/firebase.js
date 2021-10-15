import {initializeApp} from "firebase/app";
import { getDatabase} from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyDa2N6Gh6BixqPw_C-qr77pC93BT0gGQzM",
  authDomain: "cine-oa-web.firebaseapp.com",
  projectId: "cine-oa-web",
  storageBucket: "cine-oa-web.appspot.com",
  messagingSenderId: "63152037991",
  appId: "1:63152037991:web:3eb76776abfb3e7c7874c2"
};

// Initialize Firebase
const fireDb =  initializeApp(firebaseConfig);


export default getDatabase(fireDb)