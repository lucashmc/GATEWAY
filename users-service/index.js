const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.json({
    service: 'Users Service'
  })
})

app.listen(3001, () => {
  console.log('Users Service rodando')
})
