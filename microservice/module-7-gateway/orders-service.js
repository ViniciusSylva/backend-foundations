const express = require('express');
const app = express();

// A rota precisa ter o /orders na frente porque o Gateway repassa /orders/list
app.get('/orders/list', (req, res) => {
  res.json({
    service: 'Orders Service (Porta 3002)',
    orders: [
      { id: 101, item: 'Teclado Mecânico', total: 350.00 },
      { id: 102, item: 'Mouse Gamer', total: 180.00 }
    ]
  });
});

app.listen(3002, () => console.log('📦 [Orders Service] Rodando na porta 3002'));