import firebase from 'firebase/app'
import 'firebase/firestore'

    const firebaseConfig = {
        apiKey: "AIzaSyDJsVKdfteY18TtASL8yqAE9G2LKS115cs",
        authDomain: "cooking-ninja-site-df24d.firebaseapp.com",
        projectId: "cooking-ninja-site-df24d",
        storageBucket: "cooking-ninja-site-df24d.appspot.com",
        messagingSenderId: "102118471780",
        appId: "1:102118471780:web:f006ec0200d5ed1eb68771"
    };

  // init firebase
  firebase.initializeApp(firebaseConfig)

  // init services
  const projectFirestore = firebase.firestore()

  export { projectFirestore }