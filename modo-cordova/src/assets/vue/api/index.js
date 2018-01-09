import axios from 'axios'


const api = {

  getUserInfo: function (done, error) {
    axios.get('/api/user')
      .then(function (response) {
        done(response)
      })
      .catch(function (err) {
        error(err)
      })
  },
  login: function (uname, pwd, done, error) {
    axios.post('/api/login', {
      uname: uname,
      pwd: pwd
    })
      .then(function (response) {
        done(response)
      })
      .catch(function (err) {
        error(err)
      })
  }
}

export default api
