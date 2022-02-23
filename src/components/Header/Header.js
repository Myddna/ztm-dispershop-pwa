import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; // HOC
import { createStructuredSelector } from 'reselect';
import styles from './Header.module.scss';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';

/**
 * This is a CreateReactApp "special"
 * See more: https://create-react-app.dev/docs/adding-images-fonts-and-files/#adding-svgs
 */
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = function ({ currentUser, hidden }) {
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
        <CartIcon />
      </nav>
      {
        hidden ? null
          : <CartDropdown />
      }
    </header>
  );
};

Header.propTypes = {
  currentUser: PropTypes.shape({
    id: PropTypes.string,
    createdAt: PropTypes.any,
    displayName: PropTypes.string,
    email: PropTypes.string,
  }),
  hidden: PropTypes.bool,
};

Header.defaultProps = {
  currentUser: null,
  hidden: true,
};

// Using the HOC
// State: top level root reducer
// this function name is a convention in redux
// CreateStructuredSelector will automatically pass top level state object
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});
export default connect(mapStateToProps, null)(Header);
