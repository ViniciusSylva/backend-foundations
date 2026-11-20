const amqp = require('amqplib');

async function iniciarWorker() {
  const connection = await amqp.connect('amqp://admin:admin123@localhost:5672');
  const channel = await connection.createChannel();

  const queue = 'fila_pagamentos_segura';

  // 1. Fila durável (sobrevive ao restart do RabbitMQ)
  await channel.assertQueue(queue, { durable: true });

  // 2. Fair Dispatch: processa apenas 1 mensagem por vez antes de pegar outra
  channel.prefetch(1);

  console.log(`[*] Worker seguro aguardando em '${queue}'...`);

  // 3. noAck: false -> exige confirmação manual
  channel.consume(queue, (msg) => {
    if (msg !== null) {
      const texto = msg.content.toString();
      console.log(`[...] Processando (3s): ${texto}`);

      setTimeout(() => {
        console.log(`[v] Sucesso! Enviando ACK para: ${texto}`);
        // Avisa o RabbitMQ que pode remover a mensagem da fila
        channel.ack(msg);
      }, 3000);
    }
  }, { noAck: false });
}

iniciarWorker();