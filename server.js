const cors = require('cors')
const express = require('express')

// start up express app
const app = express()

// use libraries to get data from the front-end
app.use(cors())

function base64URLEncode(str) {
    return str.toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '');
}

const verifier = base64URLEncode(crypto.randomBytes(32));

function sha256(buffer) {
    return crypto.createHash('sha256').update(buffer).digest();
}

const challenge = base64URLEncode(sha256(verifier));

/** get the user data from the front-end */
app.post('/api/auth/', (req, res) => {
    const { username, password } = req.body.userData
  
    res.status(200)
    res.send(username)
  })
  
  app.listen('3500', () => console.log('endpoints running on port 3500'))