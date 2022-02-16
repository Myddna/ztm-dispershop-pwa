import { initializeApp } from 'firebase/app';
import {
  getFirestore, doc, getDoc, setDoc,
} from 'firebase/firestore';
import {
  getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword,
} from 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAzql-7US8nRj-kH1S8ENmn0kcgoVigwS8',
  authDomain: 'crwn-db-ztm-react.firebaseapp.com',
  projectId: 'crwn-db-ztm-react',
  storageBucket: 'crwn-db-ztm-react.appspot.com',
  messagingSenderId: '473334587436',
  appId: '1:473334587436:web:5d096eabc275bebdd0f189',
};

const app = initializeApp(config);

export const auth = getAuth(app);
export const db = getFirestore(app);

const provider = new GoogleAuthProvider(app);
provider.setCustomParameters({
  login_hint: 'user@example.com',
  prompt: 'select_account',
});

export const signInWithGoogle = function () {
  return signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const { accessToken: token } = GoogleAuthProvider.credentialFromResult(result);
      // The signed-in user info.
      const { user } = result;

      return { token, user };
    })
    .catch((error) => {
      // Handle Errors here.
      const { errorCode, errorMessage, email } = error;

      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);

      throw new Error({
        errorCode, errorMessage, email, credential,
      });
    });
};

export const createEmailUser = function (email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential);
      const { user } = userCredential;

      return user;
    })
    .catch((error) => {
      throw new Error(error);
    });
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return false;

  // Query for the document on Firestore
  const userRef = doc(db, `users/${userAuth.uid}`);
  const theDoc = await getDoc(userRef);
  if (!theDoc.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('Error creating user:', error.errorMessage);
    }
  }

  return userRef;
};
