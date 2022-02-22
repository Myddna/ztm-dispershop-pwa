export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToAdd.id);
  if (existingCartItem) {
    // Using map because we need to return a NEW array.
    return cartItems.map((cartItem) => (cartItem.id === cartItemToAdd.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : { ...cartItem }));
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const countCartItems = (cartItems) => {
  const totalCartItems = cartItems.reduce((prev, current) => prev + current.quantity, 0);
  return totalCartItems;
};

export default addItemToCart;
