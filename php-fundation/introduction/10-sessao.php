<?php
session_start();

$mensagem = "";

if (isset($_GET["acao"]) && $_GET["acao"] === "sair") {
    session_destroy();
    header("Location: 10-sessao.php");
    exit;
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $usuario = htmlspecialchars(strtolower(trim($_POST["usuario"] ?? "")));
    $senha = trim($_POST["senha"] ?? "");

    if ($usuario === "vinicius" && $senha === "123456") {
        $_SESSION["usuario_logado"] = $usuario;
        $_SESSION["data_login"] = date("d/m/Y H:i:s");
    } else {
        $mensagem = "<p style='color: red;'>Usuário ou senha incorretos!</p>";
    }
}
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Aula 10 - Gerenciamento de Sessão</title>
</head>
<body>
    <h2>Área Restrita do Sistema</h2>

    <?php if (isset($_SESSION["usuario_logado"])): ?>
        <div style="background-color: #d4edda; color: #155724; padding: 15px; border-radius: 5px;">
            <h3>Bem-vindo, <?php echo $_SESSION["usuario_logado"]; ?>! 👋</h3>
            <p>Você está autenticado no sistema desde: <strong><?php echo $_SESSION["data_login"]; ?></strong></p>
            <a href="10-sessao.php?acao=sair" style="color: red;">[ Sair / Encerrar Sessão ]</a>
        </div>
    <?php else: ?>
        <?php echo $mensagem; ?>

        <form action="10-sessao.php" method="POST">
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
            <button type="submit">Entrar</button>
        </form>
    <?php endif; ?>
</body>
</html>