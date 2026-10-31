// checkout-service.js (Porta 4000)
const express = require('express');
const axios = require('axios');
const app = express();

const CATALOG_SERVICE_URL = 'http://localhost:4001';

app.get('/checkout/:productId', async (req, res) => {
  const { productId } = req.params;
  console.log(`🛒 [Checkout Service] Iniciando checkout para o produto ${productId}...`);

  try {
    // Define um limite de tempo (timeout) de 1500ms na chamada HTTP síncrona
    const response = await axios.get(`${CATALOG_SERVICE_URL}/products/${productId}`, {
      timeout: 1500 
    });

    return res.json({
      status: 'SUCCESS',
      message: 'Checkout concluído com sucesso!',
      product: response.data
    });

  } catch (error) {
    // Trata falhas de timeout ou serviço indisponível com um Fallback
    console.error(`⚠️ [Checkout Service] Falha ao consultar catálogo: ${error.message}`);

    if (error.code === 'ECONNABORTED') {
      return res.status(504).json({
        status: 'FALLBACK',
        message: 'O catálogo de produtos demorou muito para responder. Tente novamente em instantes.'
      });
    }

    return res.status(503).json({
      status: 'FALLBACK',
      message: 'Serviço de catálogo temporariamente indisponível.'
    });
  }
});

app.listen(4000, () => console.log('💳 [Checkout Service] Rodando na porta 4000'));