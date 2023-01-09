const express = require('express')
const dotenv = require('dotenv')

dotenv.config()

const app = express()
const PORT = process.env.PORT || 8080

app.get('/', (req, res) => {
    res.send("Express(Node) + Typescript")
})

app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`)
})