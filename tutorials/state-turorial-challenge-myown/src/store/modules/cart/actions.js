export default {
  addProductToCart(context, payload) {
    console.log('payload');
    console.log(payload);
    context.commit('addProductToCart', payload);
  },
  removeProductFromCart(context, payload) {
    context.commit('removeProductFromCart', payload);
  }
};
