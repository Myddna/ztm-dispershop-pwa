import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './CartIcon.module.scss';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden as toggleCartHiddenAction } from '../../redux/cart/cart.actions';

const CartIcon = function ({ toggleCartHidden }) {
  return (
    <div className={styles.CartIcon} onClick={toggleCartHidden} role="button" tabIndex={0}>
      <ShoppingIcon className={styles.shoppingIcon} />
      <span className={styles.itemCount}>0</span>
    </div>
  );
};

CartIcon.propTypes = {
  toggleCartHidden: PropTypes.func,
};

CartIcon.defaultProps = {
  toggleCartHidden: null,
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHiddenAction()),
});

export default connect(
  null,
  mapDispatchToProps,
)(CartIcon);
