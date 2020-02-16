import firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    // replace with your config 
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.firestore().settings({timestampsInSnapshots: true})

  export default firebase
