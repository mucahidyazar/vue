import { createStore } from 'vuex';
import CartModule from './modules/cart/index';
import ProductsModule from './modules/products/index';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const store = createStore({
  modules: {
    cart: CartModule,
    products: ProductsModule
  },
  state() {
    return {
      isLoggedIn: false
    };
  },
  getters,
  mutations,
  actions
});

export default store;
