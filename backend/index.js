const express = require('express')
const app = express()
const cors = require('cors')
const port = 4000
const uuid4 = require('uuid4')
const fs = require('fs')
const jsonParser = express.json()
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const oneDay = 1000 * 60 * 60 * 24

app.use(cookieParser())

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200
}))

app.listen(port, () => { console.log(`Server is listening on port ${port}`) })
