import axios from 'axios'
import store from 'state'

var base = axios.create({
  // baseURL: 'http://localhost:5795/api/',
  baseURL: 'https://appp.modoucloud.com/api/',
  timeout: 1000 * 60 * 2
})

base.interceptors.request.use(function (config) {
  config.headers.token = store.state.token;
  config.headers.DeviceType = store.state.platform;
  // config.headers.DeviceType = 'Android';
  config.headers.uuid = store.state.uuid;
  return config;
}, function (error) {

  return Promise.reject(error);
});

base.interceptors.response.use(function (response) {

  return response;
}, function (error) {
  if (error.response.status == 401) {
    vm.$f7.alert(error.response.data, "重新登录", function () {
      vm.$router.back({
        url: "/login",
        force: true
      });
    })
  }

  return Promise.reject(error);
});

export default base
