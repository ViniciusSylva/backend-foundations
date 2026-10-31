// saga-orchestrator.js
const express = require('express');
const app = express();
app.use(express.json());

// Simulação de Bancos de Dados Isolados em memória
const ordersDB = [];
const inventoryDB = { 'prod-1': 10 }; // Produto 1 tem 10 unidades em estoque

// --- SERVIÇOS SIMULADOS ---

// 1. Ação do Serviço de Pedidos
function createPendingOrder(orderId, productId) {
  const order = { id: orderId, productId, status: 'PENDING' };
  ordersDB.push(order);
  console.log(`1. 📝 [Orders DB] Pedido #${orderId} criado com status PENDING.`);
  return order;
}

// 2. Ação do Serviço de Estoque
function reserveInventory(productId) {
  if (inventoryDB[productId] > 0) {
    inventoryDB[productId] -= 1;
    console.log(`2. 📦 [Inventory DB] 1 unidade reservada do produto ${productId}. Restante: ${inventoryDB[productId]}`);
    return true;
  }
  console.log(`2. ❌ [Inventory DB] Sem estoque para o produto ${productId}.`);
  return false;
}

// 3. Ação do Serviço de Pagamento (Simulação de Cobrança com Falha)
function processPayment(shouldFail) {
  if (!shouldFail) {
    console.log(`3. 💳 [Payment Service] Pagamento aprovado com sucesso!`);
    return true;
  }
  console.log(`3. ❌ [Payment Service] FALHA NO PAGAMENTO: Cartão recusado.`);
  return false;
}

// --- TRANSAÇÕES COMPENSATÓRIAS (Desfazem as ações anteriores) ---

function compensateInventory(productId) {
  inventoryDB[productId] += 1;
  console.log(`🔄 [COMPENSAÇÃO] Estoque devolvido para o produto ${productId}. Atual: ${inventoryDB[productId]}`);
}

function compensateOrder(orderId) {
  const order = ordersDB.find(o => o.id === orderId);
  if (order) order.status = 'CANCELLED';
  console.log(`🔄 [COMPENSAÇÃO] Status do pedido #${orderId} alterado para CANCELLED.`);
}

// --- FLUXO PRINCIPAL DA SAGA ---

app.post('/process-saga', (req, res) => {
  const { orderId, productId, failAtPayment } = req.body;
  console.log(`\n=================== INICIANDO SAGA DE PEDIDO #${orderId} ===================`);

  // PASSO 1: Criar Pedido PENDENTE
  const order = createPendingOrder(orderId, productId);

  // PASSO 2: Reservar Estoque
  const hasInventory = reserveInventory(productId);
  if (!hasInventory) {
    compensateOrder(orderId);
    return res.status(400).json({ status: 'FAILED', reason: 'Sem estoque', orderStatus: 'CANCELLED' });
  }

  // PASSO 3: Processar Pagamento
  const paymentApproved = processPayment(failAtPayment);

  if (!paymentApproved) {
    console.log(`\n⚠️ Exceção detectada na Saga! Disparando Transações Compensatórias...`);
    // Executa a compensação na ordem inversa
    compensateInventory(productId);
    compensateOrder(orderId);

    return res.status(402).json({
      status: 'FAILED_AND_COMPENSATED',
      reason: 'Pagamento recusado',
      orderStatus: 'CANCELLED'
    });
  }

  // SUCESSO: Atualiza pedido para APROVADO
  order.status = 'APPROVED';
  console.log(`✅ [SAGA SUCESSO] Pedido #${orderId} finalizado como APPROVED!\n`);

  return res.json({ status: 'SUCCESS', orderStatus: 'APPROVED' });
});

app.listen(5000, () => console.log('⚙️ [Saga Orchestrator] Rodando na porta 5000'));