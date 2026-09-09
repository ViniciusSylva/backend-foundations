from fastapi import FastAPI

from core.configs import settings 
from api.v1.api import api_router


app = FastAPI(title='Curso API - Segurança')
app.include_router(api_router, prefix=settings.API_V1_STR)


if __name__ == "__main__":
    import uvicorn

    uvicorn.run("main:app", host="0.0.0.0", port=8000,
                log_level='info', reload=True)


"""
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNzZXNzX3Rva2VuIiwiZXhwIjoxNzg5NDAzMTgyLCJpYXQiOjE3ODg3OTgzODIsInN1YiI6IjIifQ.uNoYlAcX9630rLtFIa_KmUREbK9nPHrUQcuTdYZspSg",
    "token_type": "bearer"
"""