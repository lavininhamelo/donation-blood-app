import _firebase from 'firebase';

const config = {
    apiKey: process.env.API_KEY,
    authDomain:  process.env.AUTH_DOMAIN,
    databaseURL:  process.env.DATABASE_URL,
    projectId:  process.env.PROJECT_ID,
    storageBucket:  process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER,
    appId:  process.env.APP_ID
}

export const firebase = _firebase.initializeApp(config);
export const db = _firebase.firestore();
export const auth = _firebase.auth();

