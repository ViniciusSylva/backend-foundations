<?php

function formatarMoeda(float $valorReal): string 
{
    $valorFormatado = number_format($valorReal, 2, ",", ".");

    return "R$ " . $valorFormatado;
}

$precoProduto = 89.9;

echo formatarMoeda($precoProduto);