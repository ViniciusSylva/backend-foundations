# Microservices Backend Foundations 🚀

## 📌 About
Prática guiada e laboratório hands-on de **Arquitetura de Microserviços** focada na transição de sistemas monolíticos para arquiteturas distribuídas. O projeto engloba a implementação de padrões essenciais de mensageria assíncrona, resiliência, roteamento via API Gateway, chamadas síncronas com tratamento de falhas e gerenciamento de transações distribuídas (Saga Pattern).

## 🚀 Technologies
- **Node.js** (Express, Axios, Opossum, amqplib)
- **Docker & Docker Compose** (RabbitMQ Management)
- **RabbitMQ** (AMQP Broker)
- **Git** (Versionamento e estrutura modular)

## 🧠 What I learned
- **Monolith vs. Microservices**: Separação de contextos de negócio (*Bounded Context*) e isolamento de dados com a estratégia *Database-per-Service*.
- **Comunicação Assíncrona via Mensageria**: Publicação e consumo de eventos em filas utilizando RabbitMQ para garantir o desacoplamento de serviços.
- **Resiliência e Tolerância a Falhas**: Aplicação do padrão *Circuit Breaker* com a biblioteca `opossum` para interromper chamadas a serviços instáveis e responder com *Fallbacks*.
- **API Gateway Pattern**: Centralização de tráfego na porta HTTP 8000 roteando requisições dinamicamente para múltiplos microserviços isolados.
- **Comunicação Síncrona REST com Timeouts**: Controle de chamadas HTTP síncronas atrelando limites de tempo (*timeouts*) para prevenir travamento em cadeia (*cascading failures*).
- **Saga Pattern & Transações Compensatórias**: Manutenção da integridade eventual de dados entre múltiplos bancos sem a presença de transações ACID globais.
- **Observabilidade**: Utilização de *Correlation IDs* no cabeçalho das requisições para rastreabilidade de chamadas distribuídas.

## ⚠️ Challenges
- **Compatibilidade de Comandos e Ambientes**: Ajuste de comandos de terminal (diferenças de sintaxe entre CMD, PowerShell e Bash no Windows) e resolução de conflitos de módulos em subpastas isoladas.
- **Parsing de JSON e Escapes no PowerShell**: Tratamento de caracteres de escape ao testar endpoints HTTP via `curl` no PowerShell.
- **Sincronia de Subida dos Contêineres**: Lidar com conexões antecipadas de scripts Node.js antes da inicialização completa do serviço de mensageria no Docker (`ECONNRESET`).

## 🔧 Improvements
- Criar automação com `docker-compose.yml` único para subir todos os microserviços simultaneamente.
- Implementar autenticação via JWT diretamente na camada do API Gateway.
- Adicionar rastreamento distribuído (Distributed Tracing) com Jaeger ou OpenTelemetry.
- Implementar filas de mensagens mortas (Dead Letter Exchange / DLQ) no módulo de mensageria.

## 🌎 About me
I am a Computer Science student in Brazil, focused on learning and continuous growth. I currently work at a technology company in the backend and automation field. I am still exploring different paths within technology to find my specialization, while developing practical projects and strengthening my foundation.