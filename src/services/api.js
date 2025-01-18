import axios from "axios";

const API_KEY = import.meta.env.REACT_APP_OPENAI_API_KEY;

export const analyzeCodeFromOpenAI = async (code) => {
  const prompt = `Analise o seguinte código e determine se ele é malicioso. Explique por quê:\n${code}`;

  const response = await axios.post(
    "https://api.openai.com/v1/completions",
    {
      model: "text-davinci-003",
      prompt,
      max_tokens: 300,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    }
  );

  return response.data.choices[0].text.trim();
};
