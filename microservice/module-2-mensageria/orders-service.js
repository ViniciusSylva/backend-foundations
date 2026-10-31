// orders-service.js (Dispara eventos de novos pedidos)
const amqp = require('amqplib');

async function sendOrder() {
  const connection = await amqp.connect('amqp://guest:guest@localhost:5672');
  const channel = await connection.createChannel();
  const queue = 'orders_queue';

  await channel.assertQueue(queue, { durable: false });

  const order = {
    id: Math.floor(Math.random() * 1000),
    customer: 'Vinicius',
    total: 250.00,
    createdAt: new Date().toISOString()
  };

  channel.sendToQueue(queue, Buffer.from(JSON.stringify(order)));
  console.log(`📦 [Orders Service] Pedido #${order.id} criado e enviado para a fila!`);

  setTimeout(() => {
    connection.close();
    process.exit(0);
  }, 500);
}

sendOrder().catch(console.error);