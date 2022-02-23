import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './CartIcon.module.scss';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden as toggleCartHiddenAction } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = function ({ itemCount, toggleCartHidden }) {
  console.log('Rendering CartIcon component');
  return (
    <div className={styles.CartIcon} onClick={toggleCartHidden} role="button" tabIndex={0}>
      <ShoppingIcon className={styles.shoppingIcon} />
      <span className={styles.itemCount}>{itemCount}</span>
    </div>
  );
};

CartIcon.propTypes = {
  toggleCartHidden: PropTypes.func,
  itemCount: PropTypes.number,
};

CartIcon.defaultProps = {
  toggleCartHidden: null,
  itemCount: 0,
};

// Example of selectors use to memoize the items count
const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHiddenAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartIcon);
