import React from 'react';
// import PropTypes from 'prop-types';
import styles from './CartDropdown.module.scss';

import CustomButton from '../CustomButton/CustomButton';

const CartDropdown = function () {
  return (
    <div className={styles.CartDropdown}>
      <div className={styles.cartItems}>
        aa
      </div>
      <CustomButton type="button">Go to checkout</CustomButton>
    </div>
  );
};

CartDropdown.propTypes = {};

CartDropdown.defaultProps = {};

export default CartDropdown;
