import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import Header from './components/Header/Header';
import SignInSignUp from './pages/SignInSignUp/SignInSignUp';
import { auth } from './firebase/firebase.utils';

const App = function () {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Subscribing on mount
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    // Unsubscribing on unmount
    return () => {
      unsubscribe();
    };
  }, []);

  console.log(currentUser);

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
