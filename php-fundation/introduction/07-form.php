<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    
    $usuario = $_POST["usuario"] ?? "";
    $senha = $_POST["senha"] ?? "";

    echo "<h3>Dados Recebidos pelo Servidor:</h3>";
    echo "Usuário digitado: <strong>$usuario</strong><br>";
    echo "Senha digitada: <strong>$senha</strong><br>";
    echo "<hr>";
}
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Aula 07 - Formulários</title>
</head>
<body>
    <h2>Formulário de Login</h2>

    <form action="07-formulario.php" method="POST">
        <div>
            <label for="usuario">Usuário:</label><br>
            <input type="text" id="usuario" name="usuario" required>
        </div>
        <br>
        <div>
            <label for="senha">Senha:</label><br>
            <input type="password" id="senha" name="senha" required>
        </div>
        <br>
        <button type="submit">Enviar Dados</button>
    </form>
</body>
</html>