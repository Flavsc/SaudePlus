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
          { type: "text", text: "Give me the name of the laboratory tests along with their reference range described in this framework laboratory test: Place laboratory tests here, reference range: reference ranges here, in the image provided"},
          {
            type: "image_url",
            image_url: {
              "url": "https://i.ibb.co/6trJPdk/exame.png",
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