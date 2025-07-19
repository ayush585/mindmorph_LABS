// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxM_F_uAf59FbSjynejSb_W5XYCPXJtTw",
  authDomain: "mindmorphlabs.firebaseapp.com",
  databaseURL: "https://mindmorphlabs-default-rtdb.firebaseio.com/",
  projectId: "mindmorphlabs",
  storageBucket: "mindmorphlabs.firebasestorage.app",
  messagingSenderId: "442459850348",
  appId: "1:442459850348:web:663ae5c6bf10995084fa49",
  measurementId: "G-3J3LHNYT62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);

// Initialize Analytics (only in browser environment)
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { analytics };