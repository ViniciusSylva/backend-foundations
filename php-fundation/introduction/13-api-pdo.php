<?php
// 1. Define o cabeçalho informando que o retorno é um JSON
header('Content-Type: application/json; charset=utf-8');

try {
    // 2. Conexão com o banco de dados via PDO (Exemplo com SQLite em memória ou MySQL)
    $pdo = new PDO('mysql:host=localhost;dbname=meudb;charset=utf8mb4', 'usuario', 'senha');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Criando uma tabela rápida e inserindo um dado para teste
    $pdo->exec("CREATE TABLE usuarios (id INTEGER PRIMARY KEY, nome TEXT, email TEXT)");
    $pdo->exec("INSERT INTO usuarios (nome, email) VALUES ('Vinicius', 'vinicius@email.com')");

    // 3. Consulta com Prepared Statements (Evita SQL Injection)
    $stmt = $pdo->prepare("SELECT * FROM usuarios WHERE id = :id");
    $stmt->execute([':id' => 1]);
    
    $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

    // 4. Retorna a resposta formatada como JSON
    echo json_encode([
        "status" => "sucesso",
        "dados" => $usuario
    ]);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["status" => "erro", "mensagem" => $e->getMessage()]);
}