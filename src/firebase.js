import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDVs6C7mKimUog0gj8SezFF_xm_Ydzuw8U",
  authDomain: "linkedin-clone-e25d6.firebaseapp.com",
  projectId: "linkedin-clone-e25d6",
  storageBucket: "linkedin-clone-e25d6.appspot.com",
  messagingSenderId: "615063347346",
  appId: "1:615063347346:web:73e50767ea3869302d464b",
  measurementId: "G-5P10KF698M"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
