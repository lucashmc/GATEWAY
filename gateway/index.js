const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')

const app = express()

// rota para users-service
app.use(
  '/users',
  createProxyMiddleware({
    target: 'http://localhost:3001',
    changeOrigin: true,
  })
)

// rota para products-service
app.use(
  '/products',
  createProxyMiddleware({
    target: 'http://localhost:3002',
    changeOrigin: true,
  })
)

app.listen(3000, () => {
  console.log('Gateway rodando na porta 3000')
})
