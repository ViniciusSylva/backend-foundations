const express = require('express');
const proxy = require('express-http-proxy');
const app = express();

app.use((req, res, next) => {
  console.log(`🌐 [GATEWAY 8000] Requisição recebida: ${req.method} ${req.url}`);
  next();
});

app.use('/users', proxy('http://localhost:3001'));
app.use('/orders', proxy('http://localhost:3002'));

app.listen(8000, () => console.log('🚀 [API Gateway] Rodando na porta 8000'));