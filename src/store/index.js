import { createStore } from 'vuex'
import actions from "./actions";

export default createStore({
  state: {
    user: {
      id: null,
      slug: '',
      name: undefined
    },
    profile: {
      id: null,
      slug: '',
      name: undefined
    },
    product: {
      name: ''
    },
    user_buy_product: false,
    product_in_wishlist: false,
    wl: {},
    products: null,
    _alert: {
      flag: false,
      message: null
    },
    token: null,
    data_anal: {},
    market: {},
    rating: {},
    my_product: {},
    load_resource: false,
    checkprocess_buy: false,
    checkprocess_wl: false
  },

  mutations: {
    SET_STATE(state, data) {
      state[data[0]] = data[1];
    },
    SET_ALERT(state, data) {
      state._alert = {
        flag: true,
        type: data[0],
        message: data[1]
      }
    },
    SET_AlertFlag(state, value) {
      state._alert.flag = value;
    },

    to_profile(state) {
      state.user = state.profile;
    },

    SET_Market(state, data) {
      state.market[data[0]] = data[1];
    },
    SET_Market_Product(state, data) {
      state.market.products = data;
    }
  },

  getters: {
    getUser: state => state.user,
  },

  actions
})
