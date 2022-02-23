import './App.css';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Routes, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { onSnapshot } from 'firebase/firestore';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import Header from './components/Header/Header';
import SignInSignUp from './pages/SignInSignUp/SignInSignUp';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser as setCurrentUserAction } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';

const App = function ({ currentUser, setCurrentUser }) {
  let unsubscribeUserSnapshot = () => { };
  const isAuthenticated = currentUser !== null;

  useEffect(() => {
    // Subscribing on mount
    const unsubscribeAuthStateChange = onAuthStateChanged(auth, async (userAuth) => {
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

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        {/* Preventing authenticated users from signin-in or signin-up again */}
        <Route
          path="/sign-in"
          element={
            !isAuthenticated
              ? <SignInSignUp />
              : <Navigate to="/" />
          }
        />
      </Routes>
    </div>
  );
};

App.propTypes = {
  setCurrentUser: PropTypes.func,
  currentUser: PropTypes.shape({
    id: PropTypes.string,
    createdAt: PropTypes.any,
    displayName: PropTypes.string,
    email: PropTypes.string,
  }),
};

App.defaultProps = {
  setCurrentUser: null,
  currentUser: null,
};

// Redux
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUserAction(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
