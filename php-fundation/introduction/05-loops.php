<?php

$carrinho = [
    "Teclado Mecânico" => 250.00,
    "Mouse Gamer" => 120.00,
    "Monitor 24" => 800.00
];

$total = 0; 

foreach ($carrinho as $item => $preco) {
    echo "Produto: $item - R$ " . number_format($preco, 2, ',', '.') . "<br>";
    
    $total += $preco; 
}

echo "<hr>";
echo "<strong>Total do Carrinho:</strong> R$ " . number_format($total, 2, ',', '.');