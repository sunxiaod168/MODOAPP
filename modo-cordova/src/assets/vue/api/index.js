import axios from 'axios'

// method: get
// url: /api/user
// response: { code: 200, data:[], msg: '成功'}

// method: post
// url: /api/login
// params: {uid:'abc', pwd:'123'}
// response:{ code: 200, data:[], msg: '成功'}

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
