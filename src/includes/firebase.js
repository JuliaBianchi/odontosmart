import firebase from 'firebase/app';

import 'firebase/database';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCBwYLrj5Cm4A5C173XnNzgtgPL56yG0Vg",
    authDomain: "music-6752b.firebaseapp.com",
    projectId: "music-6752b",
    storageBucket: "music-6752b.firebasestorage.app",
    messagingSenderId: "563290366443",
    appId: "1:563290366443:web:94f06e881dbb8bdc7779ae"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.firestore();
const auth = firebase.auth();

const usersCollection = database.collection('users');

export { database, auth, usersCollection };

