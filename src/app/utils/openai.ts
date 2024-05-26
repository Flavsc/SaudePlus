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
        content: [
          { type: "text", text: "Give me the name of the laboratory tests along with their reference range for each line read in this structure, testName : referenceRange"},
          {
            type: "image_url",
            image_url: {
              "url": "https://i.ibb.co/pf6f2dm/Exames-1.png",
              detail: "high"
            },
          },
        ],
      },
    ],
  });
  return response.choices[0].message.content;
}
GPT();