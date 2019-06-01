import firebase from "firebase/app";
import "firebase/firestore";

if (!firebase.apps.length) {
  const config = {
    apiKey: "AIzaSyD6qS6SODXZpi-6UNjLr5gZZNPHpy1U3qc",
    authDomain: "townrating.firebaseapp.com",
    databaseURL: "https://townrating.firebaseio.com",
    projectId: "townrating",
    storageBucket: "townrating.appspot.com",
    messagingSenderId: "642635782554",
    appId: "1:642635782554:web:ecf7b7a005c1aa9b"
  };

  firebase.initializeApp(config);
}

export default firebase.firestore();
