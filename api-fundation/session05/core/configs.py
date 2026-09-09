from typing import ClassVar
from pydantic_settings import BaseSettings
from sqlalchemy.orm import declarative_base

# Cria a base declarativa do SQLAlchemy fora do Pydantic
DBBaseModel = declarative_base()

class Settings(BaseSettings):
    """
    Configurações gerais usadas na aplicação 
    """
    API_V1_STR: str = '/api/v1'
    DB_URL: str = "postgresql+asyncpg://vini:vinicius2005@localhost:5432/faculdade"
    
    DBBaseModel: ClassVar = DBBaseModel

    class Config: 
        case_sensitive = True


settings = Settings()