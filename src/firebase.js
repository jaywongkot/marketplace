import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCiL5sdIq1RRPROJR0jOkqh3J5tje_cIzE',
  authDomain: 'clone-a985e.firebaseapp.com',
  databaseURL: 'https://clone-a985e.firebaseio.com',
  projectId: 'clone-a985e',
  storageBucket: 'clone-a985e.appspot.com',
  messagingSenderId: '813921443033',
  appId: '1:813921443033:web:ad6d09b1cdc101976672c8',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
