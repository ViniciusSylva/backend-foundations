<?php
$mensagem = "";

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $usuario = htmlspecialchars(strtolower(trim($_POST["usuario"] ?? "")));
    $senha = trim($_POST["senha"] ?? "");

    if ($usuario === "vinicius" && $senha === "123456") {
        $mensagem = "<p style='color: green; font-weight: bold;'>Login efetuado com sucesso! Bem-vindo, $usuario.</p>";
    } else {
        $mensagem = "<p style='color: red; font-weight: bold;'>Acesso negado para o usuário: " . ($usuario ?: 'inválido') . "</p>";
    }
}
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Aula 07 - Formulário e Segurança</title>
</head>
<body>
    <h2>Sistema de Autenticação</h2>

    <?php echo $mensagem; ?>

    <form action="07-form.php" method="POST">
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
        <button type="submit">Entrar no Sistema</button>
    </form>
</body>
</html>