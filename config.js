/*"expo": "~36.0.0",
    "firebase": "^7.9.3",
    "lottie-react-native": "^3.3.2",
    "react": "~16.9.0",
    "react-dom": "~16.9.0",
    "react-native": "https://github.com/expo/react-native/archive/sdk-36.0.0.tar.gz",
    "react-native-web": "~0.11.7"*/

    import firebase from 'firebase';
    require('@firestore/firebase');

    var firebaseConfig = {
      apiKey: "AIzaSyBLAwXCDJQ_9IUbpzctTltAVSCYtLQsmKQ",
      authDomain: "barter-app-8291e.firebaseapp.com",
      databaseURL: "https://barter-app-8291e.firebaseio.com",
      projectId: "barter-app-8291e",
      storageBucket: "barter-app-8291e.appspot.com",
      messagingSenderId: "333383746208",
      appId: "1:333383746208:web:e049504f022e96dd88bfc5",
      measurementId: "G-V8R3JBJVS6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    export default firebase;