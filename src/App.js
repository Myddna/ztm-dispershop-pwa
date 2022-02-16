import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { onSnapshot } from 'firebase/firestore';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import Header from './components/Header/Header';
import SignInSignUp from './pages/SignInSignUp/SignInSignUp';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

const App = function () {
  const [currentUser, setCurrentUser] = useState(null);
  let unsubscribeUserSnapshot = () => { };

  useEffect(() => {
    // Subscribing on mount
    const unsubscribeAuthStateChange = onAuthStateChanged(auth, async (userAuth) => {
      console.log(userAuth);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        // Listens to changes in the document
        unsubscribeUserSnapshot = onSnapshot(userRef, (userDoc) => {
          // The id comes with the snapshot, for the fields we have to call data() method
          setCurrentUser({
            id: userDoc.id,
            ...userDoc.data(),
          });
        });
      } else {
        // The flow goes here on sign out (auth.signOut() called at Header.js)
        setCurrentUser(null);
      }
    });

    // Unsubscribing on unmount
    return () => {
      unsubscribeAuthStateChange();
      unsubscribeUserSnapshot();
    };
  }, []);

  console.log('currentUser: ', currentUser);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/sign-in" element={<SignInSignUp />} />
      </Routes>
    </div>
  );
};

export default App;
