require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const port = process.env.LOCAL_DEMO_PORT || 3000

app.use('/assets', express.static(path.join(__dirname + '/../public/build')))
app.get('/favicon.ico', (req, res) => {
  const ico = path.join(__dirname + '/../public/icons/favicon.ico')
  res.sendFile(ico)
})
app.get('/', (req, res) => {
  const page = path.join(__dirname + '/../public/index.html')
  res.sendFile(page)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
