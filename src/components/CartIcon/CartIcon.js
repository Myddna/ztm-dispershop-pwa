import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './CartIcon.module.scss';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden as toggleCartHiddenAction } from '../../redux/cart/cart.actions';
import { countCartItems } from '../../redux/cart/cart.utils';

const CartIcon = function ({ cartItems, toggleCartHidden }) {
  return (
    <div className={styles.CartIcon} onClick={toggleCartHidden} role="button" tabIndex={0}>
      <ShoppingIcon className={styles.shoppingIcon} />
      <span className={styles.itemCount}>{countCartItems(cartItems)}</span>
    </div>
  );
};

CartIcon.propTypes = {
  toggleCartHidden: PropTypes.func,
  cartItems: PropTypes.array,
};

CartIcon.defaultProps = {
  toggleCartHidden: null,
  cartItems: [],
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHiddenAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartIcon);
