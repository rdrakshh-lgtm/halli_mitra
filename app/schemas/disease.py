from pydantic import BaseModel


class DiseaseResponse(BaseModel):
    disease: str
    treatment: str
    confidence: str