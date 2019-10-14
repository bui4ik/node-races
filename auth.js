const jwt = require('jsonwebtoken')

// test auth
function auth(app) {
	app.get('/test', verifyToken, (req, res) => {
		jwt.verify(req.token, 'secretKey', (err, authData) => {
			if (err){
				res.sendStatus(403)
			} else {
				res.json({
					message: 'Post created',
					authData
				})
			}
		})
	})

	app.post('/api/login', (req, res) => {
		const user = {
			id: 1,
			username: 'brad',
			email: 'brad@gmail.com'
		}

		jwt.sign({user}, 'secretKey', (err, token) =>{
			res.json({
				token
			})
		})
	})

	function verifyToken (req, res, next) {
		const bearerHeader = req.headers['authorization'];
		if (typeof bearerHeader != 'undefined'){
			const bearer = bearerHeader.split(' ')
			req.token = bearer[1]
			next()
		} else {
			res.sendStatus(403);
		}
	}
}

module.exports = auth;
