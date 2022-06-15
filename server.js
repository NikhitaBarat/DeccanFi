const express = require('express')
const axios = require('axios');
const app = express()
const port = 4000

app.use()

app.get('/', (req, res) => {
  res.send('nikhitaaaaaaaaaaaaa')
})

app.get('/api', async (req, res) =>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/')
    res.send(response)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })