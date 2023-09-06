import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBKIUtM_cO87V-XatpjeAstQuEnwfzGzGs",
  authDomain: "weather-development-29795.firebaseapp.com",
  projectId: "weather-development-29795",
  storageBucket: "weather-development-29795.appspot.com",
  messagingSenderId: "136202837009",
  appId: "1:136202837009:web:22a92a04fe832b097e25b0",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
