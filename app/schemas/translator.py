from pydantic import BaseModel

class TranslateRequest(BaseModel):
    text: str
    language: str


class TranslateResponse(BaseModel):
    translated_text: str