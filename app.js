var cloudscraper = require('cloudscraper');

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('CloudFlare ByPass Proxy')
})

app.get('/get/:url', (req, res) => {
  cloudscraper.get(req.params.url).then(function (html) {
  	res.send(html)
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})