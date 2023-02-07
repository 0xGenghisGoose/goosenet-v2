// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDFGSYRRQQVfsLek3JSk2fU3i-DyiZGtV4',
	authDomain: 'goosenet-8adcb.firebaseapp.com',
	projectId: 'goosenet-8adcb',
	storageBucket: 'goosenet-8adcb.appspot.com',
	messagingSenderId: '1040027261684',
	appId: '1:1040027261684:web:027428f781a8ecf5b4dca1',
	measurementId: 'G-KW0TEWGY6R',
};

// Initialize Firebase - if app is already initialized, just use that one
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
const analytics = getAnalytics(app);

export { app, db, storage, analytics };
