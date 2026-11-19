const amqp = require('amqplib');

async function enviarTarefa() {
  // 1. Conecta ao Broker usando usuário e senha do docker-compose
  const connection = await amqp.connect('amqp://admin:admin123@localhost:5672');
  
  // 2. Cria um canal virtual
  const channel = await connection.createChannel();

  const queue = 'fila_processamento';
  const mensagem = JSON.stringify({
    id: Math.floor(Math.random() * 1000),
    tarefa: 'Gerar relatorio PDF',
    criadoEm: new Date().toISOString()
  });

  // 3. Garante que a fila existe
  await channel.assertQueue(queue, { durable: false });

  // 4. Envia a mensagem (sempre convertida para Buffer)
  channel.sendToQueue(queue, Buffer.from(mensagem));
  console.log(`[x] Enviado: ${mensagem}`);

  // Fecha o canal e a conexão após 500ms
  setTimeout(() => {
    connection.close();
    process.exit(0);
  }, 500);
}

enviarTarefa();