import firebase from 'firebase'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJZ1RIBENBWe0jrRQUYOhWJuVGbvaW0hg",
  authDomain: "next-crud-39acd.firebaseapp.com",
  projectId: "next-crud-39acd",
  storageBucket: "next-crud-39acd.appspot.com",
  messagingSenderId: "81920602612",
  appId: "1:81920602612:web:51d6e8d32d7ccaf251c9a1"
};

// Initialize Firebase
if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase