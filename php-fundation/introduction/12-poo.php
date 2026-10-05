<?php

class Usuario 
{
    public function __construct(
        public string $nome,
        public string $email
    ) {}

    public function getResumo(): string 
    {
        return "Usuário: {$this->nome} ({$this->email})";
    }
}

$user = new Usuario("Vinicius", "vinicius@email.com");

echo $user->getResumo();