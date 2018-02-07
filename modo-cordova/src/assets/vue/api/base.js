import axios from 'axios'
import store from 'state'


export default axios.create({
    baseURL: '/api/',
    timeout: 1000,
    headers: { 'token': store.state.token , 'platform': store.state.platform, 'uuid': store.state.uuid}
})