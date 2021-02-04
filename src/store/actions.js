import axios from "axios"

const host_api = 'http://127.0.0.1:8000/api';

let actions = {
  getAllProducts({commit}) {
    axios.get(`${host_api}/products`).then(res => {
      commit('SET_STATE', ['products', res.data]);
    }).catch(error => {
      commit('SET_ALERT', ['error', error.response.data.message]);
    })
  },

  getWishlistForUser({commit}, slug) {
    axios.get(`${host_api}/wl/getUser/${slug}`).then(res => {
      commit('SET_STATE', ['products', res.data.body.product_list]);
    }).catch(error => {
      commit('SET_ALERT', ['error', error.response.data.message]);
    })
  },

  register({commit}, data) {
    axios({
      method: 'post',
      url: `${host_api}/register`,
      data: data,
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(res => {
      commit('SET_STATE', ['message', res.data.body.message])
    }).catch(error => {
      commit('SET_ALERT', ['error', error.response.data.message]);
    })
  },

  login({commit}, data) {
    console.log(data)
    axios({
      method: "post",
      url: `${host_api}/login`,
      data: data,
      headers: {
        'Content-type': "application/json; charset=UTF-8"
      }
    }).then(res => {
      commit('SET_STATE', ['token', res.data.body.token]);
      commit('SET_ALERT', ['message', res.data.body.message]);
      commit('SET_STATE', ['user', res.data.body.user]);
      localStorage.setItem('user', JSON.stringify(res.data.body.user));
    }).catch(error => {
      commit('SET_ALERT', ['error', error.response.data.message]);
    })
  },

  getUser({commit}, slug) {
    axios.get(`${host_api}/get_user/${slug}`).then(res => {
      commit('SET_STATE', ['user', res.data.user]);
    }).catch(error => {
      commit('SET_ALERT', ['error', error.response.data.message]);
    });
  },

  exit({commit}, id) {
    axios.get(`${host_api}/logout?id=${id}`).then(res => {
      commit('SET_STATE', ['user', null]);
      commit('SET_ALERT', ['message', res.data.body.message]);
    }).catch(error => {
      commit('SET_ALERT', ['error', error.response.data.message]);
    });
  },

  getOneProduct({commit}, id) {
    axios.get(`${host_api}/product/getOne/${id}`).then(res => {
      commit('SET_STATE', ['product', res.data]);
    }).catch(error => {
      commit('SET_ALERT', ['error', error.response.data.message]);
    });
  },

  setAlertFlag({commit}, value) {
    commit('SET_AlertFlag', value);
  }
}

export default actions;
