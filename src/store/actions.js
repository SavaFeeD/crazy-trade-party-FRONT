import axios from "axios"

const host_api = 'http://127.0.0.1:8000/api';

let actions = {
  isAuth({commit}) {
    if (localStorage.getItem('user') !== null)
      commit('SET_STATE', ['user', JSON.parse(localStorage.getItem('user'))]);
      commit('SET_STATE', ['profile', JSON.parse(localStorage.getItem('user'))]);
  },

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
      commit('SET_STATE', ['profile', res.data.body.user]);
      localStorage.setItem('user', JSON.stringify(res.data.body.user));
      localStorage.setItem('token', JSON.stringify(res.data.body.token));
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

  to_profile({commit}) {
    commit('to_profile');
  },

  exit({commit}, id) {
    axios({
      method: "get",
      url: `${host_api}/logout?id=${id}`,
      headers: {
        'Content-type': "application/json; charset=UTF-8",
        'Authorization': `Bearer ${localStorage.token.substr(1, localStorage.token.length-2)}`
      }
    }).then(res => {
      commit('SET_STATE', ['user', {
        id: null,
        slug: '',
        name: undefined
      }]);
      commit('SET_STATE', ['profile', {
        id: null,
        slug: '',
        name: undefined
      }]);
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
  },

  add_viewCount({commit}, id) {
    axios.get(`${host_api}/product/add_viewCount?id=${id}`).catch(error => {
      commit('SET_ALERT', ['error', error.response.data.message]);
    });
  }
}

export default actions;
