<?php

$arquivoLog = "acessos.log";
$mensagem = "";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $usuario = htmlspecialchars(strtolower(trim($_POST["usuario"] ?? "")));
    
    if ($usuario !== "") {
        $dataHora = date("Y-m-d H:i:s");
        $linhaLog = "[$dataHora] Tentativa de login do usuário: $usuario" . PHP_EOL;

        file_put_contents($arquivoLog, $linhaLog, FILE_APPEND);

        $mensagem = "<p style='color: green;'>Acesso registrado no arquivo com sucesso!</p>";
    } else {
        $mensagem = "<p style='color: red;'>Por favor, informe um nome de usuário.</p>";
    }
}

$historico = "";
if (file_exists($arquivoLog)) {
    $historico = file_get_contents($arquivoLog);
}
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Aula 09 - Manipulação de Arquivos</title>
</head>
<body>
    <h2>Registro de Acessos em Arquivo (.log)</h2>

    <?php echo $mensagem; ?>

    <form action="09-arquivos.php" method="POST">
        <label for="usuario">Nome do Usuário:</label><br>
        <input type="text" id="usuario" name="usuario" required>
        <br><br>
        <button type="submit">Gravar no Log</button>
    </form>

    <hr>

    <h3>Conteúdo Atual do Arquivo (acessos.log):</h3>
    <pre style="background: #222; color: #0f0; padding: 10px; border-radius: 5px;"><?php echo $historico ?: "Nenhum acesso registrado ainda."; ?></pre>
</body>
</html>