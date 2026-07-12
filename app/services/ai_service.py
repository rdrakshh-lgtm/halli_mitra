from google import genai

from app.core.config import settings

client = genai.Client(api_key=settings.GEMINI_API_KEY)


def get_ai_response(question: str) -> str:
    prompt = f"""
You are Halli Mitra AI, an intelligent agriculture assistant.

Answer the farmer's question clearly and simply.

Farmer Question:
{question}
"""

    try:
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt,
        )

        return response.text

    except Exception as e:
        return f"AI Error: {str(e)}"