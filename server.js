const cors = require('cors')
const express = require('express')

// start up express app
const app = express()

// use libraries to get data from the front-end
app.use(cors())

/** get the user data from the front-end after the user finds all of the objects */
app.post('/api/auth/', (req, res) => {
    const { username, password } = req.body.userData
  
    res.status(200)
    res.send(username)
  })
  
  app.listen('3500', () => console.log('endpoints running on port 3500'))