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
    products: null,
    _alert: {
      flag: false,
      message: null
    },
    token: null
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
    }
  },

  getters: {
    getUser: state => state.user,
    getProduct: state => state.product
  },

  actions
})
