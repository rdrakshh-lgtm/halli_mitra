from google import genai

from app.core.config import settings

client = genai.Client(api_key=settings.GEMINI_API_KEY)


def translate_text(text: str, language: str) -> str:
    prompt = f"""
You are a professional translator.

Translate the following text into {language}.

Rules:
- Return ONLY the translated text.
- Do not add explanations.
- Preserve the meaning and formatting.
- If the text is already in {language}, return it unchanged.

Text:
{text}
"""

    try:
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt,
        )

        return response.text.strip()

    except Exception as e:
        return f"Translation Error: {str(e)}"