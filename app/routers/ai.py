from fastapi import APIRouter

from app.schemas.ai import AIRequest, AIResponse
from app.services.ai_service import get_ai_response

router = APIRouter(
    prefix="/ai",
    tags=["AI Assistant"]
)


@router.post("/chat", response_model=AIResponse)
def chat(request: AIRequest):
    answer = get_ai_response(
    request.question,
    request.language,
)
    return AIResponse(answer=answer)