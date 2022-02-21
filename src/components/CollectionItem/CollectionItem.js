import PropTypes from 'prop-types';
import styles from './CollectionItem.module.scss';

const CollectionItem = function ({
  name, imageUrl, price,
}) {
  return (
    <div className={styles.CollectionItem}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className={styles.footer}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>
          {price}
          €
        </span>
      </div>
    </div>
  );
};

CollectionItem.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  price: PropTypes.number.isRequired,
};

CollectionItem.defaultProps = {
  imageUrl: 'https://via.placeholder.com/500x800.png?text=Image+not+available',
};

export default CollectionItem;
