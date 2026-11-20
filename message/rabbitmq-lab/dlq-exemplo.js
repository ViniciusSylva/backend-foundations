const amqp = require('amqplib');

async function testarDLQ() {
  const connection = await amqp.connect('amqp://admin:admin123@localhost:5672');
  const channel = await connection.createChannel();

  // 1. Configurando o ambiente de ERROS (DLX + DLQ)
  const dlxExchange = 'dlx_pagamentos';
  const dlqQueue = 'fila_pagamentos_erros';

  await channel.assertExchange(dlxExchange, 'direct', { durable: true });
  await channel.assertQueue(dlqQueue, { durable: true });
  await channel.bindQueue(dlqQueue, dlxExchange, 'rota_erro');

  // 2. Configurando a FILA PRINCIPAL apontando para a DLX
  const mainQueue = 'fila_pagamentos_v2';
  await channel.assertQueue(mainQueue, {
    durable: true,
    arguments: {
      'x-dead-letter-exchange': dlxExchange,    // Para qual Exchange mandar se morrer
      'x-dead-letter-routing-key': 'rota_erro'  // Com qual chave mandar
    }
  });

  // 3. Publica uma mensagem com valor negativo (inválido)
  const payload = JSON.stringify({ pedidoId: 99, valor: -50 });
  channel.sendToQueue(mainQueue, Buffer.from(payload), { persistent: true });
  console.log(`[x] Enviado para fila principal: ${payload}`);

  // 4. Consumidor valida e rejeita (NACK com requeue: false)
  channel.consume(mainQueue, (msg) => {
    if (msg !== null) {
      const dados = JSON.parse(msg.content.toString());

      if (dados.valor <= 0) {
        console.log(`[!] Erro de validação (valor <= 0). Enviando para DLQ...`);
        // 2º param (allUpTo): false | 3º param (requeue): false -> Manda pra DLX!
        channel.nack(msg, false, false);
      } else {
        console.log(`[v] Pagamento aprovado!`);
        channel.ack(msg);
      }
    }
  }, { noAck: false });
}

testarDLQ();