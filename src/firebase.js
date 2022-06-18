import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey:"AIzaSyAyt3F8J35Og025HPpyrVbnZQImAvrE06Q",
  authDomain:"rblunlocking.firebaseapp.com",

  projectId: "rblunlocking",
  storageBucket:"rblunlocking.appspot.com",
  messagingSenderId:"990925671130",
  appId: "1:990925671130:web:4e8b12266379717dabf3e3",
})

export const auth = app.auth()
export default app
