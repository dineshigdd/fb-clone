import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAtWep-y_OeV0PxVWSOS7EbY8FBmu_wO80",
    authDomain: "facebook-clone-c3a24.firebaseapp.com",
    databaseURL: "https://facebook-clone-c3a24.firebaseio.com",
    projectId: "facebook-clone-c3a24",
    storageBucket: "facebook-clone-c3a24.appspot.com",
    messagingSenderId: "219932934864",
    appId: "1:219932934864:web:7cc715aca57e687aa214d5",
    measurementId: "G-PXMYZK35F2"
  };

  const firebaseApp = firebase.initializeApp( firebaseConfig );
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth , provider };
  export default db;