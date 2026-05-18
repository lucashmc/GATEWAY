const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.json({
    service: 'Products Service'
  })
})

app.listen(3002, () => {
  console.log('Products Service rodando')
})
