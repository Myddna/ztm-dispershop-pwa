import React from 'react';
import PropTypes from 'prop-types';

import styles from './CheckoutItem.module.scss';

const CheckoutItem = function ({
  cartItem: {
    id, imageUrl, price, name, quantity,
  },
}) {
  console.log(id);
  return (
    <div className={styles.CheckoutItem}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={name} />
      </div>
      <span className={styles.name}>{name}</span>
      <span className={styles.quantity}>{quantity}</span>
      <span className={styles.price}>
        {price}
        €
      </span>
      <div className={styles.removeButton}>&#10005;</div>
    </div>
  );
};

CheckoutItem.propTypes = {
  cartItem: PropTypes.shape({
    id: PropTypes.number,
    imageUrl: PropTypes.string,
    price: PropTypes.number,
    name: PropTypes.string,
    quantity: PropTypes.number,
  }),
};

CheckoutItem.defaultProps = {
  cartItem: null,
};

export default CheckoutItem;
