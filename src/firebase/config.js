import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCs0hFVA73QWboVo4Yxs57P0r04k9MSZZQ",
  authDomain: "myfirebaseproj-247c6.firebaseapp.com",
  projectId: "myfirebaseproj-247c6",
  storageBucket: "myfirebaseproj-247c6.appspot.com",
  messagingSenderId: "758859868225",
  appId: "1:758859868225:web:6c72302ed3105473b97ec0"
};

  initializeApp(firebaseConfig);

const db = getFirestore();

const auth = getAuth();

export {db, auth}