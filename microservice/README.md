# Microservices Backend Foundations 🚀

---

## 📌 About
Guided practice and hands-on laboratory focused on **Microservices Architecture**, transitioning from monolithic systems to distributed architectures. The project encompasses the implementation of key asynchronous messaging patterns, resilience, routing via an API Gateway, synchronous calls with fault handling, and distributed transaction management (Saga Pattern).

## 🚀 Technologies
- **Node.js** (Express, Axios, Opossum, amqplib)
- **Docker & Docker Compose** (RabbitMQ Management)
- **RabbitMQ** (AMQP Broker)
- **Git** (Version control and modular repository structure)

## 🧠 What I learned
- **Monolith vs. Microservices**: Business context separation (*Bounded Context*) and data isolation using the *Database-per-Service* strategy.
- **Asynchronous Messaging Communication**: Publishing and consuming queue events using RabbitMQ to ensure service decoupling.
- **Resilience and Fault Tolerance**: Applying the *Circuit Breaker* pattern with the `opossum` library to trip calls to unstable services and respond with *Fallbacks*.
- **API Gateway Pattern**: Centralizing HTTP traffic on port 8000, dynamically routing requests to multiple isolated microservices.
- **Synchronous REST Communication with Timeouts**: Managing synchronous HTTP calls by enforcing time limits (*timeouts*) to prevent *cascading failures*.
- **Saga Pattern & Compensating Transactions**: Maintaining eventual data consistency across multiple databases without global ACID transactions.
- **Observability**: Leveraging *Correlation IDs* in request headers for end-to-end distributed tracing.

## ⚠️ Challenges
- **Cross-Platform & Environment Compatibility**: Adjusting terminal commands (syntax differences between CMD, PowerShell, and Bash on Windows) and resolving module conflicts within isolated subfolders.
- **JSON Parsing & Escaping in PowerShell**: Handling character escaping when testing HTTP endpoints via `curl` in PowerShell.
- **Container Startup Synchronization**: Handling premature Node.js script connections before the messaging service in Docker is fully initialized (`ECONNRESET`).

## 🔧 Improvements
- Create single-command automation via `docker-compose.yml` to spin up all microservices simultaneously.
- Implement JWT authentication directly at the API Gateway layer.
- Add distributed tracing with Jaeger or OpenTelemetry.
- Implement Dead Letter Exchanges (DLQ) in the messaging module.

## 🌎 About me
I am a Computer Science student in Brazil, focused on learning and continuous growth. I currently work at a technology company in the backend and automation field. I am still exploring different paths within technology to find my specialization, while developing practical projects and strengthening my foundation.