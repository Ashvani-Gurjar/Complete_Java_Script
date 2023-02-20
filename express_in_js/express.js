const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
     console.log(req.query.name);
  res.send('This is about')
})
app.get('/home', (req, res) => {
     res.sendFile((path.join(__dirname, './index.html')))
})
app.get('/link', (req, res) => {
  res.send('All of us used links')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})