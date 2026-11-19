const amqp = require('amqplib');

async function iniciarConsumidor() {
  const connection = await amqp.connect('amqp://admin:admin123@localhost:5672');
  const channel = await connection.createChannel();

  const queue = 'fila_processamento';

  // Garante que a fila existe (caso o consumer suba antes do producer)
  await channel.assertQueue(queue, { durable: false });

  console.log(`[*] Aguardando mensagens em '${queue}'. Pressione CTRL+C para sair.`);

  // Fica escutando continuamente
  channel.consume(queue, (msg) => {
    if (msg !== null) {
      const conteudo = msg.content.toString();
      console.log(`[v] Recebido e processado: ${conteudo}`);
    }
  }, { noAck: true }); // Veremos o que é noAck no Módulo 5!
}

iniciarConsumidor();