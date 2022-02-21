import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; // HOC
import styles from './Header.module.scss';
import { auth } from '../../firebase/firebase.utils';

/**
 * This is a CreateReactApp "special"
 * See more: https://create-react-app.dev/docs/adding-images-fonts-and-files/#adding-svgs
 */
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = function ({ currentUser }) {
  console.log('Header currentUser: ', currentUser);
  return (
    <header className={styles.Header}>
      <Link to="/" className={styles.logoContainer}>
        <Logo className="logo" title="DisperShop Store" />
      </Link>
      <nav className={styles.options}>
        <Link to="/shop" className={styles.option}>
          SHOP
        </Link>
        <Link to="/contact" className={styles.option}>
          CONTACT
        </Link>
        {
          currentUser ? (
            <div className={styles.option} role="button" tabIndex={0} onClick={() => auth.signOut()}>
              SIGN OUT
            </div>
          ) : (
            <Link to="/sign-in" className={styles.option}>
              SIGN IN
            </Link>
          )
        }
      </nav>
    </header>
  );
};

Header.propTypes = {
  currentUser: PropTypes.func,
};

Header.defaultProps = {
  currentUser: null,
};

// Using the HOC
// State: top level root reducer
// this function name is a convention in redux
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});
export default connect(mapStateToProps, null)(Header);
