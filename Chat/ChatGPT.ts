import OpenAI from "openai";

const apiOpenAi = process.env.EXPO_PUBLIC_API_OPENAI;

const openai = new OpenAI({
  apiKey: apiOpenAi
});

export default async function GPT() {
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "user",
        content: [
          { type: "text", text: "Give me the name of the laboratory tests along with their Reference Range" },
          {
            type: "image_url",
            image_url: {
              "url": "https://i.ibb.co/6trJPdk/exame.png", //colocar outra imagem
              detail: "low"
            },
          },
        ],
      },
    ],
  });
  console.log(response.choices[0]);
}
GPT();
