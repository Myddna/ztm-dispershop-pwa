import PropTypes from 'prop-types';
import styles from './CollectionItem.module.scss';

const CollectionItem = function ({
  id, name, imageUrl, price,
}) {
  console.log(id);
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
        <span className={styles.price}>{price}</span>
      </div>
    </div>
  );
};

CollectionItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  price: PropTypes.number.isRequired,
};

CollectionItem.defaultProps = {
  imageUrl: 'https://via.placeholder.com/234x350.png?text=DisperShop',
};

export default CollectionItem;
