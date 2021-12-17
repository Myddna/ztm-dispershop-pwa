import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './MenuItem.module.scss';

const MenuItem = function ({
  title, imageUrl, size, linkUrl,
}) {
  const menuItemStyle = {
    backgroundImage: `url(${imageUrl})`,
  };
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div role="button" tabIndex={0} className={`${styles.MenuItem} ${styles[size]}`} data-testid="MenuItem" onClick={() => { navigate(`${location.pathname}${linkUrl}`); }}>
      <div style={menuItemStyle} className={styles.backgroundImage} />
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <span className={styles.subtitle}>Shop Now</span>
      </div>
    </div>
  );
};

MenuItem.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  size: PropTypes.string,
  linkUrl: PropTypes.string,
};

MenuItem.defaultProps = {
  title: '',
  imageUrl: '',
  size: '',
  linkUrl: '',
};

export default MenuItem;
