# PHP Backend Foundations

---

## English Version

### 📌 About
A hands-on, progressive repository built to learn PHP from scratch up to intermediate backend concepts. The project covers core language syntax, web request handling (`GET`/`POST`), security fundamentals, file persistence, session management, basic Object-Oriented Programming (POO), and building RESTful API endpoints with database interaction via PDO.

### 🚀 Technologies
- PHP 8.2
- Apache
- Docker
- JSON / File System
- SQLite / MySQL (PDO)
- HTML5 / CSS3

### 🧠 What I learned
- **PHP Fundamentals & HTTP:** Server-side execution flow, variables, arrays, control structures, loops (`foreach`), and functions.
- **Web Forms & Security:** Handling `GET` and `POST` methods, preventing Cross-Site Scripting (XSS) with `htmlspecialchars()`, and input sanitization (`trim`, `strtolower`).
- **Data Persistence & Sessions:** File manipulation (`file_put_contents`, `file_get_contents`, `JSON`), reading/writing `.log` files, and state management using `$_SESSION` and `session_start()`.
- **Object-Oriented Programming (POO):** Classes, properties, methods, the `$this` keyword, and object instantiation using constructors (`__construct`).
- **APIs & Database Access:** Database connectivity via PDO, preventing SQL Injection using Prepared Statements, and rendering REST API responses with `json_encode()` and custom HTTP headers.

### ⚠️ Challenges
- **Docker Mounts & Linux Permissions:** Resolving file permission issues (`Permission denied` / `chmod 777`) when PHP attempted to create and write to `.log` and `.json` files inside the Apache Docker container.
- **Stateless HTTP vs State Management:** Understanding how web sessions work under the hood with cookies (`PHPSESSID`) and `$_SESSION` to maintain user authentication across page reloads.

### 🔧 Improvements
- Convert file-based persistence into a fully persistent relational database (MySQL/PostgreSQL) with full CRUD operations.
- Introduce an environment variable loader (`.env`) for sensitive credentials and dynamic database configuration.
- Implement an MVC (Model-View-Controller) architecture to decouple business logic from HTML presentation.

## 🌎 About me
I am a Computer Science student in Brazil, focused on learning and continuous growth. I currently work at a technology company in the backend and automation field. I am still exploring different paths within technology to find my specialization, while developing practical projects and strengthening my foundation