export default {
  addProductToCart(state, payload) {
    const productInCartIndex = state.cart.items.findIndex(
      ci => ci.productId === payload.productData.id
    );

    if (productInCartIndex >= 0) {
      state.cart.items[productInCartIndex].qty++;
    } else {
      const newItem = {
        productId: payload.productData.id,
        title: payload.productData.title,
        image: payload.productData.image,
        price: payload.productData.price,
        qty: 1
      };
      state.cart.items.push(newItem);
    }
    state.cart.qty++;
    state.cart.total += payload.productData.price;
  },
  removeProductFromCart(state, payload) {
    const productInCartIndex = state.cart.items.findIndex(
      cartItem => cartItem.productId === payload.prodId
    );
    const prodData = state.cart.items[productInCartIndex];
    state.cart.items.splice(productInCartIndex, 1);
    state.cart.qty -= prodData.qty;
    state.cart.total -= prodData.price * prodData.qty;
  }
};
