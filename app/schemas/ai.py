from pydantic import BaseModel

class AIRequest(BaseModel):
    question: str
    language: str = "English"

class AIResponse(BaseModel):
    answer: str