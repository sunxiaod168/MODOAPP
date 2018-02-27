import axios from 'axios'
import store from 'state'

export default axios.create({
    baseURL: 'http://localhost:5795/api/',
    timeout: 5000,
    headers: { 'token': store.state.token , 'DeviceType': store.state.platform, 'uuid': store.state.uuid}
})