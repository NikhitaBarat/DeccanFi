const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const mongoose = require('mongoose')
const routeGraphQL = require('./graphql/query');
dotenv.config()

// configuration
const app = express()
const PORT = process.env.PORT || 4000

// middleware
app.use(express.json())
app.use(cors())

// routes
app.get('/', (req, res) => {
    res.send('Server is running fine')
})

// database connection
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.once('open', () => {
    console.log('Database is Connected')
})

app.use('/graphql', routeGraphQL)

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})