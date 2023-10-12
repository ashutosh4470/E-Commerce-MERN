
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Your Firebase configuration details
const firebaseConfig = {
  apiKey: "AIzaSyDJXl5dqpnF68cn5d238jpa1RTJ3UWPqBM",
  authDomain: "my-app-7912d.firebaseapp.com",
  projectId: "my-app-7912d",
  storageBucket: "my-app-7912d.appspot.com",
  messagingSenderId: "411763361324",
  appId: "1:411763361324:web:2155f8b77f0fb7be777389"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
