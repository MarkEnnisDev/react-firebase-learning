import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
const firebaseConfig = {
    apiKey: "AIzaSyBq-nU5l1Nez4e_JinmdasfCKhTlEck99I",
    authDomain: "mymoney-a2000.firebaseapp.com",
    projectId: "mymoney-a2000",
    storageBucket: "mymoney-a2000.appspot.com",
    messagingSenderId: "698726190996",
    appId: "1:698726190996:web:49aef994b815341e4d0981"
  };

// init firebase
firebase.initializeApp(firebaseConfig)

// init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

export { projectFirestore, projectAuth }