var cloudscraper = require('cloudscraper');

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Smily App is Best')
})

app.get('/get', (req, res) => {
  cloudscraper.get(req.query.url).then(function (html) {
  	res.send(html)
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
