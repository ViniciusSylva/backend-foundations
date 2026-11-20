const amqp = require('amqplib');

async function publicarEvento() {
  const connection = await amqp.connect('amqp://admin:admin123@localhost:5672');
  const channel = await connection.createChannel();

  const exchange = 'eventos_ecommerce';
  // Pega a routing key passada no terminal, ou usa 'pedido.br.pago' como padrão
  const routingKey = process.argv[2] || 'pedido.br.pago';
  const payload = JSON.stringify({ evento: routingKey, valor: 150.00 });

  // 1. Declara a Exchange do tipo 'topic'
  await channel.assertExchange(exchange, 'topic', { durable: false });

  // 2. Publica NA EXCHANGE (não na fila!) passando a routingKey
  channel.publish(exchange, routingKey, Buffer.from(payload));
  console.log(`[x] Publicado em '${exchange}' | Chave: '${routingKey}'`);

  setTimeout(() => {
    connection.close();
    process.exit(0);
  }, 500);
}

publicarEvento();