const express = require('express');
const app = express();

// A rota precisa ter o /users na frente porque o Gateway repassa /users/profile
app.get('/users/profile', (req, res) => {
  res.json({
    service: 'User Service (Porta 3001)',
    user: { id: 1, name: 'Vinicius', role: 'Developer' }
  });
});

app.listen(3001, () => console.log('👤 [User Service] Rodando na porta 3001'));