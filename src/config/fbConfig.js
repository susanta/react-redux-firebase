  import firebase from 'firebase/app';
  import 'firebase/firestore';
  import 'firebase/auth';
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCazqQujoOORJnpvq_9rPqAmyFrugQpxOo",
    authDomain: "react-redux-marioplan.firebaseapp.com",
    databaseURL: "https://react-redux-marioplan.firebaseio.com",
    projectId: "react-redux-marioplan",
    storageBucket: "react-redux-marioplan.appspot.com",
    messagingSenderId: "501326371855"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true});

  export default firebase;