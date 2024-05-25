import OpenAI from "openai";

const apiOpenAi = process.env.EXPO_PUBLIC_API_OPENAI;

const openai = new OpenAI({
  apiKey: apiOpenAi
});

export async function GPT() {
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "user",
        content: "Give me the name of the laboratory tests along with their Reference Range"
      },
    ],
  });
  return response.choices[0].message.content;
}
GPT();