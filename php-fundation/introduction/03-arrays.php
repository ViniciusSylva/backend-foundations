<?php

$tecnologias = ["Node", "Docker", "PHP"]
echo "Primeira tecnologia: " . $tecnologias[0] . "<br>";

$usuarios = [
    "nome" => "Viny",
    "funcao" => "Backend Developer",
    "status" => true
]

$servidor = [
    "ip" => "192.168.1.10",
    "ambiente" => "producao",
    "containers" => ["web", "database", "cache"]
];

echo "Usuário: " . $usuario["nome"] . " - Função: " . $usuario["funcao"] . "<br>";