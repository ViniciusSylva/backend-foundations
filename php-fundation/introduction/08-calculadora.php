<?php

function formatarMoeda(float $valor): string
{
    return "R$ " . number_format($valor, 2, ',', '.');
}

$resultado = null;

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $valorProduto = (float) ($_POST["valor_produto"] ?? 0);
    $cupom = htmlspecialchars(strtoupper(trim($_POST["cupom"] ?? "")));

    if ($valorProduto <= 0) {
        $resultado = "<p style='color: red;'>Por favor, informe um valor de produto válido.</p>";
    } else {
        $percentualDesconto = 0;

        // Regra de cupons
        if ($cupom === "DEV10") {
            $percentualDesconto = 10;
        } elseif ($cupom === "DEV20") {
            $percentualDesconto = 20;
        } elseif ($cupom === "DEV50") {
            $percentualDesconto = 50;
        }

        $valorDesconto = $valorProduto * ($percentualDesconto / 100);
        $valorFinal = $valorProduto - $valorDesconto;

        $resultado = "
            <div style='background-color: #f4f4f4; padding: 15px; border-radius: 5px; margin-top: 15px;'>
                <h3>Resumo do Pedido</h3>
                <p>Valor Original: <strong>" . formatarMoeda($valorProduto) . "</strong></p>
                <p>Cupom Aplicado: <strong>" . ($cupom ?: "Nenhum") . " ($percentualDesconto%)</strong></p>
                <p>Valor do Desconto: <strong>" . formatarMoeda($valorDesconto) . "</strong></p>
                <hr>
                <p>Valor Final: <strong>" . formatarMoeda($valorFinal) . "</strong></p>
            </div>
        ";
    }
}
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Aula 08 - Calculadora de Desconto</title>
</head>
<body>
    <h2>Calculadora de Desconto da Loja</h2>

    <form action="08-calculadora.php" method="POST">
        <div>
            <label for="valor_produto">Valor do Produto (R$):</label><br>
            <input type="number" step="0.01" id="valor_produto" name="valor_produto" required>
        </div>
        <br>
        <div>
            <label for="cupom">Cupom de Desconto:</label><br>
            <input type="text" id="cupom" name="cupom" placeholder="Ex: DEV10, DEV20, DEV50">
        </div>
        <br>
        <button type="submit">Calcular Total</button>
    </form>

    <?php echo $resultado; ?>
</body>
</html>