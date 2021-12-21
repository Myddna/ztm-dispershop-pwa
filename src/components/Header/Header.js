import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = function () {
  return (
    <header className={styles.Header}>
      <Link to="/" className={styles.logoContainer}>
        <Logo className="logo" />
      </Link>
      <nav className={styles.options}>
        <Link to="/shop" className={styles.option}>
          SHOP
        </Link>
        <Link to="/contact" className={styles.option}>
          CONTACT
        </Link>
      </nav>
    </header>
  );
};

export default Header;
