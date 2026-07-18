from google import genai

from app.core.config import settings
from app.services.translator_service import translate_text

client = genai.Client(api_key=settings.GEMINI_API_KEY)


def get_ai_response(question: str, language: str = "English") -> str:
    try:
        # Step 1: Translate user's question to English
        english_question = translate_text(question, "English")

        # Step 2: Generate AI response
        prompt = f"""
You are Halli Mitra AI, an intelligent agriculture assistant.

Guidelines:
- Give practical advice for farmers.
- Keep the answer simple and easy to understand.
- If appropriate, suggest preventive measures.
- Do not provide unsafe or harmful advice.

Farmer Question:
{english_question}
"""

        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt,
        )

        english_answer = response.text.strip()

        # Step 3: Translate AI response back to the selected language
        final_answer = translate_text(english_answer, language)

        return final_answer

    except Exception as e:
        return f"AI Error: {str(e)}"