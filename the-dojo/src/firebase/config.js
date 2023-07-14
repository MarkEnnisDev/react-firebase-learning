import firebase from 'firebase/compat/app';
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCedmCmLKQ8Sy0zdzlklIT7MBEptapD_ns",
  authDomain: "adojosite.firebaseapp.com",
  projectId: "adojosite",
  storageBucket: "adojosite.appspot.com",
  messagingSenderId: "351596169015",
  appId: "1:351596169015:web:205dabbfbba9a2a2823cb2"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }