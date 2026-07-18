import axios from "axios";

const API_URL = "http://127.0.0.1:8000/translator/";

export const translateText = async (text, language) => {
  try {
    const response = await axios.post(API_URL, {
      text,
      language,
    });

    return response.data.translated_text;
  } catch (error) {
    console.error(error);
    return text;
  }
};