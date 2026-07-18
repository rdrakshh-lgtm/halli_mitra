from fastapi import APIRouter

from app.schemas.translator import TranslateRequest, TranslateResponse
from app.services.translator_service import translate_text

router = APIRouter(
    prefix="/translator",
    tags=["Translator"]
)


@router.post("/", response_model=TranslateResponse)
def translate(request: TranslateRequest):

    translated = translate_text(
        request.text,
        request.language
    )

    return TranslateResponse(
        translated_text=translated
    )