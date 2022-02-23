import { createSelector } from 'reselect';

// Input selector
const selectCart = (state) => state.cart;

// This is a Memoized selector
export const selectCartItems = createSelector(
  [selectCart], // array of selectors
  (cart) => {
    console.log('calculating selectCartItems');
    return cart.cartItems;
  }, // function that will return what we want from the selector(s)
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => {
    console.log('calculating selectCartItemsCount');
    return cartItems.reduce((prev, current) => prev + current.quantity, 0);
  },
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden,
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((prev, current) => prev + current.quantity * current.price, 0),
);
