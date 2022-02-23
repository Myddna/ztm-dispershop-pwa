import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './CheckoutItem.module.scss';
import {
  clearItem as clearItemAction,
  addItem as addItemAction,
  removeItem as removeItemAction,
} from '../../redux/cart/cart.actions';

const CheckoutItem = function ({
  cartItem, clearItem, addItem, removeItem,
}) {
  const {
    imageUrl, price, name, quantity,
  } = cartItem;
  return (
    <div className={styles.CheckoutItem}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={name} />
      </div>
      <span className={styles.name}>{name}</span>
      <span className={styles.quantity}>
        <div
          className={styles.arrow}
          role="button"
          tabIndex={0}
          onClick={() => removeItem(cartItem)}
        >
          &#10094;
        </div>
        <span className={styles.value}>{quantity}</span>
        <div
          className={styles.arrow}
          role="button"
          tabIndex={0}
          onClick={() => addItem(cartItem)}
        >
          &#10095;
        </div>
      </span>
      <span className={styles.price}>
        {price}
        €
      </span>
      <div
        className={styles.removeButton}
        role="button"
        tabIndex={0}
        onClick={() => clearItem(cartItem)}
      >
        &#10005;

      </div>
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
  clearItem: PropTypes.func,
  addItem: PropTypes.func,
  removeItem: PropTypes.func,
};

CheckoutItem.defaultProps = {
  cartItem: null,
  clearItem: () => {},
  addItem: () => {},
  removeItem: () => {},
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemAction(item)),
  addItem: (item) => dispatch(addItemAction(item)),
  removeItem: (item) => dispatch(removeItemAction(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
