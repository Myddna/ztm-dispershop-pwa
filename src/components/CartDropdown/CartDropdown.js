import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './CartDropdown.module.scss';

import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';

const CartDropdown = function ({ cartItems }) {
  return (
    <div className={styles.CartDropdown}>
      <div className={styles.cartItems}>
        {
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
        }
      </div>
      <CustomButton type="button">Go to checkout</CustomButton>
    </div>
  );
};

CartDropdown.propTypes = {
  cartItems: PropTypes.array,
};

CartDropdown.defaultProps = {
  cartItems: [],
};

const mapStateToProps = function ({ cart: { cartItems } }) {
  return {
    cartItems,
  };
};

export default connect(mapStateToProps, null)(CartDropdown);
