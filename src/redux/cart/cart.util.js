export const addItemToCart = (cartItems, cartItemToAdd) => {
  // Find duplicate
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  // Add quantity to duplicate
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  // Else return with quantity == 1
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
