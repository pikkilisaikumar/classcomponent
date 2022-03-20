import {initializeApp} from 'firebase/app'

import {getFirestore} from '@firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyAf70i6kq5Xrvp_ck8r51vCPWr8dPcw76c',
  authDomain: 'fir-tutorial-7b780.firebaseapp.com',
  projectId: 'fir-tutorial-7b780',
  storageBucket: 'fir-tutorial-7b780.appspot.com',
  messagingSenderId: '812112486203',
  appId: '1:812112486203:web:5817e2ad0920bbf2f9211e',
  measurementId: 'G-543EZCSLR4',
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export default db
