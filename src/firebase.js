// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA--HZgwryfRJEyfkdncD6IYHECA_LXM94",
  authDomain: "clone-6cfbd.firebaseapp.com",
  projectId: "clone-6cfbd",
  storageBucket: "clone-6cfbd.appspot.com",
  messagingSenderId: "513206242522",
  appId: "1:513206242522:web:f47d9703e774801a7629e3",
  measurementId: "G-CNHG2B22JE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;