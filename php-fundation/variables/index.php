<?php

$nome = "Vinicius";
$idade = 25;
$altura = 1.75;
$isDesenvolvedor = true;
$valor_pc = 10000;
$desconto_pix = 500;

echo "Nome: $nome <br>";
echo "Idade: $idade anos <br>";

echo "O valor do PC é R$ $valor_pc, mas com desconto no PIX de R$ $desconto_pix o valor final é R$ " . ($valor_pc - $desconto_pix) . "<br>";

var_dump($isDesenvolvedor);