import React from 'react';
import PropTypes from 'prop-types';
import styles from './CollectionItem.module.scss';

const CollectionItem = function ({
  id, name, imageUrl, price,
}) {
  return (
    <div className={styles.CollectionItem}>
      {id}
      {' '}
      {name}
      {' '}
      {imageUrl}
      {' '}
      {price}
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
