import axios from 'axios'

const api = {
	info: function (done, error) {
		axios.get('/api/user/info')
			.then(function (response) {
				done(response)
			})
			.catch(function (err) {
				error(err)
			})
	},
	login: function (uname, pwd, done, error) {
		axios.post('/api/user/login', {
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