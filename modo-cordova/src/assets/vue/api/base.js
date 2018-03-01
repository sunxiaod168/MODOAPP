import axios from 'axios'
import store from 'state'

var base = axios.create({
    baseURL: 'http://localhost:5795/api/',
    timeout: 15000
})

base.interceptors.request.use(function (config) {
    config.headers.token = store.state.token;
    config.headers.DeviceType = store.state.platform;
    config.headers.uuid = store.state.uuid;    
    return config;
  }, function (error) {

    return Promise.reject(error);
  });

  base.interceptors.response.use(function (response) {
   
    return response;
  }, function (error) {
   
    return Promise.reject(error);
  });

export default base