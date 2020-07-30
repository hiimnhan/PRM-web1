import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const baseUrl = 'http://financial-web-service.azurewebsites.net/api/';

const setHeader = (token) => {
  return {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  };
};

const setStorage = ({ key, val }) => {
  window.localStorage.setItem(key, val);
};

const getStorage = (key) => window.localStorage.getItem(key) || '';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

firebase.initializeApp(firebaseConfig);
const firebaseAuth = firebase.auth();
const firestore = firebase.firestore();

export { baseUrl, firebaseAuth, firestore, setHeader, setStorage, getStorage };
