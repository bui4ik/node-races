const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const jwt = require('jsonwebtoken')
const router = require('./router')
const mongoose = require('./setupMongoose')
const swagger = require('./swagger')

app.use(bodyParser.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  next()
})

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

router(app)
mongoose()
swagger(app)


app.listen(3000, () => console.log('Listening 3000'))
