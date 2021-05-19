import axios from "axios"
import router from "../router"
const host_api = 'http://api.dgsava.beget.tech/api'
// const host_api = 'http://127.0.0.1:8000/api'
const host_anal = 'http://127.0.0.1:5000'

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

let actions = {
  isAuth({commit}) {
    function isEmpty(obj) {
      for (let key in obj) {
        return false;
      }
      return true;
    }

    if (!isEmpty(localStorage.getItem('user'))) {
      commit('SET_STATE', ['user', JSON.parse(localStorage.getItem('user'))]);
      commit('SET_STATE', ['profile', JSON.parse(localStorage.getItem('user'))]);
    }
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
      commit('SET_STATE', ['wl', res.data.body.product_list]);
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
      commit('SET_ALERT', ['message', res.data.body.message]);
      router.push('/login');
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
      if (res.data.status) {
        commit('SET_STATE', ['token', res.data.body.token]);
        commit('SET_ALERT', ['message', res.data.body.message]);
        commit('SET_STATE', ['user', res.data.body.user]);
        commit('SET_STATE', ['profile', res.data.body.user]);
        localStorage.setItem('user', JSON.stringify(res.data.body.user));
        localStorage.setItem('token', JSON.stringify(res.data.body.token));
        router.push('/');
      } else {
        commit('SET_ALERT', ['error', res.data.message]);
      }
    }).catch(error => {
      commit('SET_ALERT', ['error', error.response.data.message]);
    });
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
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      commit('SET_ALERT', ['message', res.data.body.message]);
    }).catch(error => {
      commit('SET_ALERT', ['error', error.response.data.message]);
    });
  },

  getOneProduct({commit}, id) {
    axios.get(`${host_api}/product/getOne/${id}`).then(res => {
      commit('SET_STATE', ['load_resource', true]);
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
  },

  analytics_sendFile({commit}, data) {
    let formdata = new FormData()
    formdata.append('file', data.file)
    axios({
      method: "POST",
      url: `${host_anal}/analytics/load_file`,
      data: formdata,
      headers: {
        Accept: 'application/json',
        'Content-type': "multipart/form-data"
      }
    }).then(res => {
      if (res.data.status) {
        console.log(res.data.body)
        data = {
          format_file: 'csv',
          filename: res.data.body.filename
        }
        localStorage.anal_file = JSON.stringify(data);
        commit('SET_STATE', ['data_anal', res.data.body]);
        router.push('/analytics/selectparams')
      } else {
        commit('SET_ALERT', ['error', res.data.message]);
      }
    }).catch(error => {
      commit('SET_ALERT', ['error', error.response.data.message]);
    });
  },

  analytics_get_info_dataset({commit}, data) {
    axios.get(`${host_anal}/analytics/get_info_dataset?filename=${data.filename}`)
    .then(res => {
      commit('SET_STATE', ['data_anal', res.data.body]);
    }).catch(error => {
      commit('SET_ALERT', ['error', error.response.data.message]);
    });
  },

  getMarket({commit}) {
    commit('SET_Market', ['category', {}]);

    axios.get(`${host_api}/category`)
    .then(res => {
      commit('SET_Market', ['category_all', res.data]);
    }).catch(error => {
      commit('SET_ALERT', ['error', error.response.data.message]);
    });

    axios.get(`${host_api}/products`)
    .then(res => {
      commit('SET_Market_Product', res.data);
      commit('SET_STATE', ['load_resource', true]);
    }).catch(error => {
      commit('SET_ALERT', ['error', error.response.data.message]);
    });
  },

  getMarket_category({commit}, data) {
    axios.get(`${host_api}/category/${data.id}/all`)
    .then(res => {
      commit('SET_Market', ['category', res.data.body.category]);
      commit('SET_Market_Product', res.data.body.products);
      commit('SET_STATE', ['load_resource', true]);
    }).catch(error => {
      commit('SET_ALERT', ['error', error.response.data.message]);
    });
  },

  getRating({commit}, data) {
    axios.get(`${host_api}/rating/${data.rate_type}`)
    .then(res => {
      console.log(res.data);
      commit('SET_STATE', ['rating', res.data.body.rate]);
    }).catch(error => {
      commit('SET_ALERT', ['error', error.response.data.message]);
    });
  },

  checkProductIsBuy({commit}, data) {
    axios.get(`${host_api}/buy/user/${data.user_slug}/${data.product_id}`)
    .then(res => {
      commit('SET_STATE', ['user_buy_product', res.data.body.check]);
      commit('SET_STATE', ['checkprocess_buy', true]);
    }).catch(error => {
      commit('SET_ALERT', ['error', error.response.data.message]);
    });
  },

  checkProductIsWL({commit}, data) {
    axios.get(`${host_api}/wl/user/${data.user_slug}/${data.product_id}`)
    .then(res => {
      commit('SET_STATE', ['product_in_wishlist', res.data.body.check]);
      commit('SET_STATE', ['checkprocess_wl', true]);
    }).catch(error => {
      commit('SET_ALERT', ['error', error.response.data.message]);
    });
  },

  addWishlist({commit}, data) {
    axios({
      method: "post",
      url: `${host_api}/wl/add`,
      data: data,
      headers: {
        'Content-type': "application/json; charset=UTF-8",
        'Authorization': `Bearer ${localStorage.token.substr(1, localStorage.token.length-2)}`
      }
    }).then(res => {
      commit('SET_ALERT', ['message', res.data.body.message]);
    }).catch(error => {
      commit('SET_ALERT', ['error', error.response.data.message]);
    });

    axios.get(`${host_api}/wl/user/${data.user_slug}/${data.product_id}`)
    .then(res => {
      commit('SET_STATE', ['product_in_wishlist', res.data.body.check]);
    }).catch(error => {
      commit('SET_ALERT', ['error', error.response.data.message]);
    });
  },

  deleteWishlist({commit}, data) {
    axios({
      method: "get",
      url: `${host_api}/wl/delete/${data.product_id}`,
      headers: {
        'Content-type': "application/json; charset=UTF-8",
        'Authorization': `Bearer ${localStorage.token.substr(1, localStorage.token.length-2)}`
      }
    }).then(res => {
      commit('SET_ALERT', ['message', res.data.body.message]);
    }).catch(error => {
      commit('SET_ALERT', ['error', error.response.data.message]);
    });

    axios.get(`${host_api}/wl/user/${data.user_slug}/${data.product_id}`)
    .then(res => {
      commit('SET_STATE', ['product_in_wishlist', res.data.body.check]);
    }).catch(error => {
      commit('SET_ALERT', ['error', error.response.data.message]);
    });
  },

  add_dataset({commit}, data) {
    commit('SET_ALERT', ['message', 'Подождите ответа']);
    let formdata = new FormData()
    formdata.append('user_id', data.user_id)
    formdata.append('name', data.name)
    formdata.append('short_description', data.short_description)
    formdata.append('description', data.description)
    formdata.append('price', data.price)
    formdata.append('img', data.img)
    formdata.append('dataset', data.dataset)
    axios({
      method: 'post',
      url: `${host_api}/product/store`,
      data: formdata,
      headers: {
        'Accept': '*/*',
        "Content-Type": "multipart/form-data;",
        'Authorization': `Bearer ${localStorage.token.substr(1, localStorage.token.length-2)}`
      }
    }).then(res => {
      commit('SET_ALERT', ['message', res.data.body.message]);
      router.push(`/product/${res.data.body.product_id}`);
    }).catch(error => {
      console.log(error);
      commit('SET_ALERT', ['error', error.response.data.message]);
    })
  },

  getUserBuys({commit}, data) {
    axios({
      method: "get",
      url: `${host_api}/buy/user/${data.slug}`,
      headers: {
        'Content-type': "application/json; charset=UTF-8",
        'Authorization': `Bearer ${localStorage.token.substr(1, localStorage.token.length-2)}`
      }
    }).then(res => {
      commit('SET_STATE', ['my_product', res.data.body.product_list]);
      commit('SET_STATE', ['load_resource', true]);
    }).catch(error => {
      commit('SET_ALERT', ['error', error.response.data.message]);
    });
  },

  getUserCreatedProduct({commit}, data) {
    axios({
      method: "get",
      url: `${host_api}/product/user/${data.slug}`,
      headers: {
        'Content-type': "application/json; charset=UTF-8",
        'Authorization': `Bearer ${localStorage.token.substr(1, localStorage.token.length-2)}`
      }
    }).then(res => {
      commit('SET_STATE', ['my_product', res.data.body.product_list]);
      commit('SET_STATE', ['load_resource', true]);
    }).catch(error => {
      commit('SET_ALERT', ['error', error.response.data.message]);
    });
  },

  addCrazycoin({commit}, data) {
    commit('SET_ALERT', ['message', "Запрос обрабатывается"]);
    axios({
      method: "get",
      url: `${host_api}/user/add_coins/${data.user_id}/${data.add_value}`,
      headers: {
        'Content-type': "application/json; charset=UTF-8"
      }
    }).then(res => {
      commit('SET_ALERT', ['message', res.data.body.message]);
      commit('SET_STATE', ['user', res.data.body.user]);
      commit('SET_STATE', ['profile', res.data.body.user]);
      localStorage.setItem('user', JSON.stringify(res.data.body.user));
    }).catch(error => {
      console.log(error);
      commit('SET_ALERT', ['error', error]);
    });
  },

  buyProduct({commit}, data) {
    commit('SET_ALERT', ['message', "Подождите ответа"]);
    axios({
      method: "post",
      url: `${host_api}/buy/product`,
      data: data.buy,
      headers: {
        'Content-type': "application/json; charset=UTF-8",
        'Authorization': `Bearer ${localStorage.token.substr(1, localStorage.token.length-2)}`
      }
    }).then(res => {
      commit('SET_ALERT', ['message', res.data.body.message]);
      if (res.data.body.status) {
        commit('SET_STATE', ['user', res.data.body.user]);
        commit('SET_STATE', ['profile', res.data.body.user]);
        localStorage.setItem('user', JSON.stringify(res.data.body.user));
      }
    }).catch(error => {
      console.log(error);
      commit('SET_ALERT', ['error', error.response.data.message]);
    });

    axios.get(`${host_api}/buy/user/${data.check.user_slug}/${data.check.product_id}`)
    .then(res => {
      commit('SET_STATE', ['user_buy_product', res.data.body.check]);
    }).catch(error => {
      commit('SET_ALERT', ['error', error.response.data.message]);
    });
  },

  deleteProduct({commit}, data) {
    commit('SET_ALERT', ['message', "Запрос обрабатывается"]);
    axios({
      method: "post",
      url: `${host_api}/product/delete`,
      data: data,
      headers: {
        'Content-type': "application/json; charset=UTF-8",
        'Authorization': `Bearer ${localStorage.token.substr(1, localStorage.token.length-2)}`
      }
    }).then(res => {
      commit('SET_ALERT', ['message', res.data.body.message]);
    }).catch(error => {
      console.log(error);
      commit('SET_ALERT', ['error', "Датасет удален"]);
    });
  }

}

export default actions;
