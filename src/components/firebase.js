import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyB8Psw49cRVlQhOCewXGX8wxiz0Lghk0R0",
    authDomain: "dist-ware.firebaseapp.com",
    databaseURL: "https://dist-ware-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "dist-ware",
    storageBucket: "dist-ware.appspot.com",
    messagingSenderId: "587605774311",
    appId: "1:587605774311:web:022b55d8e9cb39816e3742",
    measurementId: "G-XYK53DLMGN"
};
var firebaseApp  = firebase.initializeApp(config);
var db = firebaseApp.firestore();

export { db };
