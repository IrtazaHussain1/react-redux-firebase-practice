import firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAcb4IhbR7ej28YLe14i033NWu4-dABrsQ",
    authDomain: "marioplan-c6c07.firebaseapp.com",
    databaseURL: "https://marioplan-c6c07.firebaseio.com",
    projectId: "marioplan-c6c07",
    storageBucket: "marioplan-c6c07.appspot.com",
    messagingSenderId: "398070425354",
    appId: "1:398070425354:web:287ac4aba043be068c7cf3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.firestore().settings({timestampsInSnapshots: true})

  export default firebase