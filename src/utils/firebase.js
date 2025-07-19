// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxM_F_uAf59FbSjynejSb_W5XYCPXJtTw",
  authDomain: "mindmorphlabs.firebaseapp.com",
  projectId: "mindmorphlabs",
  storageBucket: "mindmorphlabs.firebasestorage.app",
  messagingSenderId: "442459850348",
  appId: "1:442459850348:web:663ae5c6bf10995084fa49",
  measurementId: "G-3J3LHNYT62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Only initialize analytics on the client side
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      getAnalytics(app);
    }
  });
}

export { app, database };
