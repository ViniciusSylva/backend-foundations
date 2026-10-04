<?php
session_start();

$arquivoJson = "tarefas.json";

if (isset($_POST["acao_login"])) {
    $nome = htmlspecialchars(trim($_POST["nome_usuario"] ?? ""));
    if ($nome !== "") {
        $_SESSION["usuario"] = $nome;
    }
}

if (isset($_GET["acao"]) && $_GET["acao"] === "sair") {
    session_destroy();
    header("Location: 11-projeto-todo.php");
    exit;
}

$tarefas = [];
if (file_exists($arquivoJson)) {
    $conteudoJson = file_get_contents($arquivoJson);
    $tarefas = json_decode($conteudoJson, true) ?? [];
}

if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["nova_tarefa"])) {
    $descricao = htmlspecialchars(trim($_POST["descricao"] ?? ""));
    
    if ($descricao !== "" && isset($_SESSION["usuario"])) {
        $novaTarefa = [
            "id" => uniqid(),
            "usuario" => $_SESSION["usuario"],
            "descricao" => $descricao,
            "data" => date("d/m/Y H:i")
        ];

        $tarefas[] = $novaTarefa;

        file_put_contents($arquivoJson, json_encode($tarefas, JSON_PRETTY_PRINT));
        
        header("Location: 11-projeto-todo.php");
        exit;
    }
}

if (isset($_GET["acao"]) && $_GET["acao"] === "limpar") {
    if (file_exists($arquivoJson)) {
        unlink($arquivoJson); 
    }
    header("Location: 11-projeto-todo.php");
    exit;
}
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Projeto 02 - Lista de Tarefas PHP</title>
</head>
<body>

    <?php if (!isset($_SESSION["usuario"])): ?>
        <h2>Identificação do Usuário</h2>
        <form action="11-projeto-todo.php" method="POST">
            <input type="hidden" name="acao_login" value="1">
            <label for="nome_usuario">Seu Nome:</label><br>
            <input type="text" id="nome_usuario" name="nome_usuario" required>
            <button type="submit">Entrar no Gerenciador</button>
        </form>

    <?php else: ?>
        <h2>Gerenciador de Tarefas</h2>
        <p>Usuário Ativo: <strong><?php echo $_SESSION["usuario"]; ?></strong> | 
           <a href="11-projeto-todo.php?acao=sair" style="color: red;">[ Sair ]</a>
        </p>

        <form action="11-projeto-todo.php" method="POST">
            <input type="hidden" name="nova_tarefa" value="1">
            <input type="text" name="descricao" placeholder="Digite uma nova tarefa..." size="40" required>
            <button type="submit">Adicionar Tarefa</button>
        </form>

        <hr>

        <h3>Minhas Tarefas:</h3>

        <?php if (empty($tarefas)): ?>
            <p>Nenhuma tarefa cadastrada até o momento.</p>
        <?php else: ?>
            <ul>
                <?php foreach ($tarefas as $item): ?>
                    <li>
                        <strong><?php echo $item["descricao"]; ?></strong> 
                        <small>(por <?php echo $item["usuario"]; ?> em <?php echo $item["data"]; ?>)</small>
                    </li>
                <?php endforeach; ?>
            </ul>

            <br>
            <a href="11-projeto-todo.php?acao=limpar" onclick="return confirm('Tem certeza?');" style="color: darkred;">[ Limpar Todas as Tarefas ]</a>
        <?php endif; ?>

    <?php endif; ?>

</body>
</html>