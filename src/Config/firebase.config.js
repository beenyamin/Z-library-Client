
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD7myAxNFNTk7I6t1USz3kqSm6yFPpbKkY",
  authDomain: "assignment-11-fbabf.firebaseapp.com",
  projectId: "assignment-11-fbabf",
  storageBucket: "assignment-11-fbabf.appspot.com",
  messagingSenderId: "717962344749",
  appId: "1:717962344749:web:91daeb8bec14766be6fba4"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);