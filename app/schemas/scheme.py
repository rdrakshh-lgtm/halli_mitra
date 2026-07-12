from pydantic import BaseModel


class SchemeCreate(BaseModel):
    scheme_name: str
    description: str
    category: str
    state: str
    eligibility: str
    official_link: str


class SchemeResponse(SchemeCreate):
    id: int

    class Config:
        from_attributes = True