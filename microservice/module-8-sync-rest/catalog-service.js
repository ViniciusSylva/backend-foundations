// catalog-service.js (Porta 4001)
const express = require('express');
const app = express();

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  
  // Simula uma resposta que às vezes demora 3 segundos para responder
  const isSlow = Math.random() > 0.5;
  const delay = isSlow ? 3000 : 200;

  console.log(`🔍 [Catalog Service] Buscando produto ID ${id}... (Tempo de resposta: ${delay}ms)`);

  setTimeout(() => {
    res.json({
      id: id,
      name: 'Headset Gamer 7.1',
      price: 299.90,
      stock: 15
    });
  }, delay);
});

app.listen(4001, () => console.log('🏷️ [Catalog Service] Rodando na porta 4001'));