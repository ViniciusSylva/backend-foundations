# Backend Foundations Lab 🚀

## 📌 About
A comprehensive, multi-stack repository built as a hands-on laboratory for backend architecture, REST API design, containerization, microservices patterns, dynamic messaging, and API testing. It spans language fundamentals in PHP and Python to node-level asynchronous systems with Node.js, covering everything from core HTTP request lifecycle to event-driven architectures with RabbitMQ and resilience patterns.

## 🚀 Technologies
- **Languages & Frameworks:** Node.js (Express), Python (FastAPI, Pydantic, Uvicorn), PHP 8.2 (Apache, PDO)
- **Containerization & Infrastructure:** Docker, Docker Compose, Linux / Bash
- **Messaging & Event-Driven:** RabbitMQ (AMQP Broker, `amqplib`)
- **Resilience & Networking:** Opossum (Circuit Breaker), Axios (HTTP Client)
- **Database & Persistence:** PostgreSQL, MySQL, SQLite, JSON / File System
- **Testing & API Tooling:** Postman (Collections, Environments, Newman), Pre-request & Test Scripts

## 🧠 What I learned
- **RESTful API Engineering:** Designing modern, asynchronous endpoints with FastAPI (Pydantic v2 validation) and PHP (PDO prepared statements, CORS headers, native session management).
- **Automated API Testing:** Building comprehensive test suites in Postman using environment variables, assertions, pre-request scripts, and continuous execution via Newman.
- **Dockerization & Orchestration:** Writing optimized multi-stage `Dockerfile` definitions, resolving container file permissions, managing persistent volumes, and orchestrating multi-service stacks with Docker Compose.
- **Distributed Microservices Patterns:** Context separation (Bounded Context), Database-per-Service strategy, and API Gateway centralized routing.
- **Asynchronous Messaging & Queues:** Implementing event-driven communication using RabbitMQ to decouple services and handle high-throughput workloads asynchronously.
- **Resilience & Fault Tolerance:** Protecting distributed systems against cascading failures using the Circuit Breaker pattern (`opossum`), fallbacks, HTTP timeouts, and eventual consistency via the Saga Pattern (compensating transactions).
- **Observability:** Propagating Correlation IDs across distributed service boundaries for end-to-end request tracing.

## ⚠️ Challenges
- **Container Network Synchronization:** Managing startup order dependencies (e.g., handling `ECONNRESET` when Node.js services attempt to connect to RabbitMQ before the broker fully boots).
- **File System Permissions in Docker:** Resolving Linux write access issues (`Permission denied`) when web servers generate logs or interact with mounted volumes inside containers.
- **Cross-Platform CLI Compatibility:** Handling escaping variations and JSON parsing differences across PowerShell, Windows CMD, and Unix-based environments.
- **Data Integrity in Distributed Environments:** Structuring dynamic environment variables, stateless authentication flow, and dynamic fallback mechanisms during service outages.

## 🔧 Improvements
- Consolidated single-command orchestration using `docker-compose.yml` to boot the entire microservices mesh alongside infrastructure services.
- Centralized JWT authentication and rate-limiting enforcement at the API Gateway layer.
- Implementation of Dead Letter Exchanges (DLQ) in RabbitMQ for robust unhandled message processing.
- Integration of distributed tracing systems (Jaeger / OpenTelemetry) and CI/CD pipelines with Newman for continuous API verification.

## 🌎 About me
I am a Computer Science student in Brazil, focused on learning and continuous growth. I currently work at a technology company in the backend and automation field. I am still exploring different paths within technology to find my specialization, while developing practical projects and strengthening my foundation.