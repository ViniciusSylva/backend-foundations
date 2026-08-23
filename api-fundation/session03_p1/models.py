from typing import Optional 

from pydantic import BaseModel, validator


class Curso(BaseModel):
    id: Optional[int] = None
    titulo: str
    aulas: int
    horas: int

    @validator('titulo')
    def validar_titulo(cls, value):
        palavras = value.split(' ')
        if len(palavras) < 3:
            raise ValueError('O titulo deve ter pelo menos 3 palavras.')

        if value.islower():
            raise ValueError('O título deve ser capitalizado.')

        return value

    @validator('aulas')
    def validar_aulas(cls, value):
        aulas = value
        if aulas < 12:
            raise ValueError('O número de aulas não pode ser menor que 12.') 

        return value

    @validator('horas')
    def validar_horas(cls, value):
        horas = value
        if horas < 10:
            raise ValueError('O número de horas não pode ser menor que 10.')

        return value

cursos = [
    Curso(id=1, titulo='Programação para Leigos', aulas=42, horas=56),
    Curso(id=2, titulo='Algoritimos e lógica de programação', aulas=65, horas=97)
]