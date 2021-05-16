import firebase from 'firebase';
const config = {
//keys 
};
var firebaseApp  = firebase.initializeApp(config);
var db = firebaseApp.firestore();

export { db };
