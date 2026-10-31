// payment-service.js (Escuta eventos de novos pedidos)
const amqp = require('amqplib');

async function startConsumer() {
  const connection = await amqp.connect('amqp://guest:guest@localhost:5672');
  const channel = await connection.createChannel();
  const queue = 'orders_queue';

  await channel.assertQueue(queue, { durable: false });
  console.log('⚡ [Payment Service] Aguardando novos pedidos na fila...');

  channel.consume(queue, (msg) => {
    const order = JSON.parse(msg.content.toString());
    console.log(`\n💳 [Payment Service] Processando pagamento para o Pedido #${order.id}...`);
    console.log(`💰 Valor: R$ ${order.total} | Cliente: ${order.customer}`);
    
    // Simula o processamento
    setTimeout(() => {
      console.log(`✅ [Payment Service] Pagamento do Pedido #${order.id} APROVADO com sucesso!`);
    }, 2000);
  }, { noAck: true });
}

startConsumer().catch(console.error);