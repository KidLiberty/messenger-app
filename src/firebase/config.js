import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import {
  browserLocalPersistence,
  browserPopupRedirectResolver,
  browserSessionPersistence,
  indexedDBLocalPersistence,
  initializeAuth
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBbsyl4jF1XxUoDXHI2-Q1L-bEurg_pyIE',
  authDomain: 'vue-firebase-sites-9f1fb.firebaseapp.com',
  projectId: 'vue-firebase-sites-9f1fb',
  storageBucket: 'vue-firebase-sites-9f1fb.appspot.com',
  messagingSenderId: '1062118696159',
  appId: '1:1062118696159:web:30cfa72273bc3b446fb56a'
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)

export const auth = initializeAuth(app, {
  persistence: [
    indexedDBLocalPersistence,
    browserLocalPersistence,
    browserSessionPersistence
  ],
  popupRedirectResolver: browserPopupRedirectResolver
})
