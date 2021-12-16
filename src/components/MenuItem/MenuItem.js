import PropTypes from 'prop-types';
import styles from './MenuItem.module.scss';

const MenuItem = function ({
  title, subtitle, image, size,
}) {
  const menuItemStyle = {
    backgroundImage: `url(${image})`,
  };
  return (
    <div className={`${styles.MenuItem} ${styles[size]}`} data-testid="MenuItem">
      <div style={menuItemStyle} className={styles.backgroundImage} />
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <span className={styles.subtitle}>{subtitle}</span>
      </div>
    </div>
  );
};

MenuItem.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  size: PropTypes.string,
};

MenuItem.defaultProps = {
  title: '',
  subtitle: '',
  image: '',
  size: '',
};

export default MenuItem;
