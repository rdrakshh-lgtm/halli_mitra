from google import genai
from google.genai import types

from app.core.config import settings

client = genai.Client(api_key=settings.GEMINI_API_KEY)


def detect_disease(image_path: str):

    prompt = """
You are an expert agricultural scientist.

Analyze the uploaded crop leaf image.

Return in this format:

Disease:
Confidence:
Treatment:
"""

    with open(image_path, "rb") as f:
        image_bytes = f.read()

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=[
            prompt,
            types.Part.from_bytes(
                data=image_bytes,
                mime_type="image/jpeg",
            ),
        ],
    )

    return response.text