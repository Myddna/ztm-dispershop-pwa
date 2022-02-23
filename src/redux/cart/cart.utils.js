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

export const clearItemFromCart = function (cartItems, cartItemToRemove) {
  // Filter creates a new array
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
};

export const removeItemFromCart = function (cartItems, cartItemToRemove) {
  // if we are decreasing, we know for a fact that tere is at least one element
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

  // If there is only one item, remove the item entirely
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // In other case, decrease the count
  return cartItems.map((cartItem) => (
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  ));
};
