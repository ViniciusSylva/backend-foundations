const amqp = require('amqplib');

async function iniciar() {
  const connection = await amqp.connect('amqp://admin:admin123@localhost:5672');
  const channel = await connection.createChannel();

  const exchange = 'eventos_ecommerce';
  await channel.assertExchange(exchange, 'topic', { durable: false });

  // Criando as duas filas
  await channel.assertQueue('fila_logistica', { durable: false });
  await channel.assertQueue('fila_auditoria', { durable: false });

  // Fazendo os BINDINGS (amarrando fila -> exchange com uma regra)
  await channel.bindQueue('fila_logistica', exchange, 'pedido.*.pago');
  await channel.bindQueue('fila_auditoria', exchange, 'pedido.#');

  console.log('[*] Filas vinculadas e escutando...');

  channel.consume('fila_logistica', (msg) => {
    console.log(`[LOGÍSTICA] Recebeu (${msg.fields.routingKey}): ${msg.content.toString()}`);
  }, { noAck: true });

  channel.consume('fila_auditoria', (msg) => {
    console.log(`[AUDITORIA] Recebeu (${msg.fields.routingKey}): ${msg.content.toString()}`);
  }, { noAck: true });
}

iniciar();