// circuit-breaker-demo.js
const CircuitBreaker = require('opossum');

// 1. Simula um serviço externo inconstante (que falha 70% das vezes)
async function unstableExternalService() {
  return new Promise((resolve, reject) => {
    const isSuccess = Math.random() > 0.7;
    setTimeout(() => {
      if (isSuccess) {
        resolve("✅ Resposta com SUCESSO do serviço!");
      } else {
        reject("❌ FALHA no serviço externo!");
      }
    }, 300);
  });
}

// 2. Configura o Circuit Breaker
const options = {
  timeout: 1000,           // Se demorar mais de 1s, considera falha
  errorThresholdPercentage: 50, // Se 50% das chamadas falharem, ABRE O CIRCUITO
  resetTimeout: 5000       // Espera 5s com o circuito aberto antes de tentar fechar de novo
};

const breaker = new CircuitBreaker(unstableExternalService, options);

// Define um comportamento de "Fallback" quando o circuito estiver aberto ou falhar
breaker.fallback(() => "⚠️ [FALLBACK] Serviço instável no momento. Exibindo dados em cache.");

breaker.on('open', () => console.log('\n🔴 [DISJUNTOR ABERTO] Parando de enviar requisições ao serviço com defeito!'));
breaker.on('halfOpen', () => console.log('\n🟡 [DISJUNTOR TESTANDO] Testando se o serviço se recuperou...'));
breaker.on('close', () => console.log('\n🟢 [DISJUNTOR FECHADO] Serviço normalizado!'));

// 3. Simula chamadas contínuas
setInterval(async () => {
  try {
    const result = await breaker.fire();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}, 500);