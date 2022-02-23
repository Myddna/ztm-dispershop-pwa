import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useNavigate } from 'react-router-dom';
import styles from './CartDropdown.module.scss';

import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = function ({ cartItems, dispatch }) {
  console.log('Rendering CartDropdown');

  const navigate = useNavigate();
  const goToCheckout = useCallback(() => {
    // Hiding the cart display before navigate
    dispatch(toggleCartHidden());
    navigate('/checkout');
  });
  return (
    <div className={styles.CartDropdown}>
      <div className={styles.cartItems}>
        {
          cartItems.length
            ? cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} item={cartItem} />
            ))
            : <span className={styles.emptyMessage}>The cart is empty</span>
        }
      </div>
      <CustomButton type="button" onClick={goToCheckout}>Go to checkout</CustomButton>
    </div>
  );
};

CartDropdown.propTypes = {
  cartItems: PropTypes.array,
  dispatch: PropTypes.func,
};

CartDropdown.defaultProps = {
  cartItems: [],
  dispatch: () => {},
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

// Not passing mapDispatchToPrps => passes by default the dispatch function
export default connect(mapStateToProps)(CartDropdown);
