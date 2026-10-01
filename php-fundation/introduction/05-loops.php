<?php

$servicos = ["Nginx", "PHP-FPM", "MySQL", "Redis"];

echo "<h3>Lista de Serviços (Array Simples)</h3>";
echo "<ul>";
foreach ($servicos as $servico) {
    echo "<li>$servico</li>";
}
echo "</ul>";

$statusServidores = [
    "Web" => "Ativo",
    "Database" => "Ativo",
    "Cache" => "Inativo"
];

echo "<h3>Lista de Serviços (Array Associativo)</h3>";
foreach ($statusServidores as $servidor => $status) {
    echo "<p>Servidor: $servidor - Status: $status</p>";
}


/* 

$carrinho = [
    "Teclado Mecânico" => 250.00,
    "Mouse Gamer" => 120.00,
    "Monitor 24" => 800.00
];

Código usando foreach para percorrer o $carrinho, exibir nome, preço e o valor total somado no final.

Pergunta conceitual: No trecho foreach ($carrinho as $item => $preco), o que representam as variáveis $item e $preco em cada iteração?

*/