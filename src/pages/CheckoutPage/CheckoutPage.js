import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import styles from './CheckoutPage.module.scss';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';

const CheckoutPage = function ({ cartItems, total }) {
  return (
    <div className={styles.CheckoutPage}>
      <div className={styles.checkoutHeader}>
        <div className={styles.headerBlocks}>
          <span>Product</span>
        </div>
        <div className={styles.headerBlocks}>
          <span>Description</span>
        </div>
        <div className={styles.headerBlocks}>
          <span>Quantity</span>
        </div>
        <div className={styles.headerBlocks}>
          <span>Price</span>
        </div>
        <div className={styles.headerBlocks}>
          <span>Remove</span>
        </div>
      </div>
      {
        cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
      }
      <div className={styles.total}>
        <span>
          Total:
          {' '}
          {total}
          €
        </span>
      </div>
    </div>
  );
};

CheckoutPage.propTypes = {
  cartItems: PropTypes.array,
  total: PropTypes.number,
};

CheckoutPage.defaultProps = {
  cartItems: [],
  total: 0,
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(
  mapStateToProps,
)(CheckoutPage);
