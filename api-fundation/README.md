# FastAPI & Postman API Development Project

---

## 📌 About
This project focuses on designing, building, and testing modern asynchronous RESTful APIs using **FastAPI** and **Python**, alongside automated API testing and documentation workflows using **Postman**. It serves as a practical application of backend development concepts, including request handling, database integration, authentication, asynchronous programming, and end-to-end API testing.

## 🚀 Technologies
- **Python** (FastAPI, Pydantic, SQLAlchemy, Asyncio)
- **Postman** (Automated Testing, Collections, Environment Variables, Newman CLI)
- **Database** (SQLite / PostgreSQL / MySQL)
- **Uvicorn** (ASGI Web Server)
- **Swagger UI / ReDoc** (Interactive API Documentation)

## 🧠 What I learned
- **Asynchronous API Design:** Building high-performance backend services using FastAPI and `async`/`await`.
- **Data Validation & Serialization:** Using Pydantic models for strict data validation and schema definitions.
- **RESTful Endpoints & CRUD:** Designing structured CRUD operations following HTTP method standards.
- **API Authentication:** Implementing secure endpoints using JWT (JSON Web Tokens) and password hashing.
- **Automated API Testing in Postman:** Writing pre-request scripts and test assertions for status codes, headers, and payload validation.
- **Environment & Collection Management:** Utilizing global/environment variables, dynamic data generation, and chaining requests in Postman.
- **API Documentation:** Generating and customizing interactive documentation via OpenAPI/Swagger.

## ⚠️ Challenges
- **Managing Async Contexts:** Handling database connections and session management correctly within asynchronous route handlers.
- **Dynamic Assertions in Postman:** Extracting dynamic response tokens (e.g., JWT access tokens) and passing them seamlessly to dependent requests within Postman collections.
- **Error Handling & HTTP Status Codes:** Structuring consistent exception handlers and returning appropriate HTTP status codes for edge cases.

## 🔧 Improvements
- **CI/CD Integration:** Integrate Postman test suites into GitHub Actions using Newman CLI for automated regression testing.
- **Dockerization:** Containerize the application and database using Docker Compose for easier setup and deployment.
- **Rate Limiting & Caching:** Implement Redis for response caching and request rate limiting to improve performance and security.
- **Test Coverage Expansion:** Increase backend unit and integration test coverage using `pytest` and `httpx`.

## 🌎 About me
I am a Computer Science student in Brazil, focused on learning and continuous growth. I currently work at a technology company in the backend and automation field. I am still exploring different paths within technology to find my specialization, while developing practical projects and strengthening my foundation.