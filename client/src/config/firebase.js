import * as firebase from 'firebase';
import 'firebase/auth';

// Initialize Firebase
const config = {
    apiKey: 'AIzaSyB13ZA3zZ5EI_rY_FU7Ad1SLfRSLSb0PaE',
    authDomain: 'boomtown-b0c6a.firebaseapp.com',
    databaseURL: 'https://boomtown-b0c6a.firebaseio.com',
    projectId: 'boomtown-b0c6a',
    storageBucket: 'boomtown-b0c6a.appspot.com',
    messagingSenderId: '191615605005'
};

const firebaseApp = firebase.initializeApp(config);
const firebaseAuth = firebase.auth();

export { firebaseApp, firebaseAuth };
