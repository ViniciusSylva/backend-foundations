<?php

$valorCompra = 150.00;
$valorFrete = 0;

if ($valorCompra >= 200.00) {
    $valorFrete = 0;
    echo "Parabéns! Você ganhou Frete Grátis. <br>";
} elseif ($valorCompra >= 100.00 && $valorCompra < 200.00) {
    $valorFrete = 15.00;
    echo "Valor do frete: R$ " . number_format($valorFrete, 2, ',', '.') . "<br>";
} else {
    $valorFrete = 30.00;
    echo "Valor do frete: R$ " . number_format($valorFrete, 2, ',', '.') . "<br>";
}

echo "Total da compra com frete: R$ " . number_format($valorCompra + $valorFrete, 2, ',', '.');