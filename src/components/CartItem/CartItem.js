import React from 'react';
import PropTypes from 'prop-types';
import styles from './CartItem.module.scss';

const CartItem = function ({
  item: {
    imageUrl, price, name, quantity,
  },
}) {
  return (
    <div className={styles.CartItem}>
      <img src={imageUrl} alt={name} />
      <div className={styles.itemDetails}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>
          {quantity}
          x
          {price}
          €
        </span>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    imageUrl: PropTypes.string,
    price: PropTypes.number,
    name: PropTypes.string,
    quantity: PropTypes.number,
  }),
};

CartItem.defaultProps = {
  item: null,
};

export default CartItem;
