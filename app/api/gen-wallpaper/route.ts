import { getOpenAIClient } from "@/service/openai";

export async function POST(req: Request) {
  const { description } = await req.json();

  console.log("description", description);

  const client = getOpenAIClient();

  const result = await client.images.generate({
    prompt: `generate a desktop wallpaper about: ${description}`,
    model: "dall-e-3",
    n: 1,
    quality: "hd",
    response_format: "url",
    size: "1792x1024",
    style: "natural",
  });

  console.log("generate wallpaper result: ", result);

  return Response.json({
    code: 0,
    message: "ok",
    data: {
      img_description: description,
      img_url: result.data[0].url,
      img_size: "1792x1024",
      user_nickname: "idoubi",
      user_avatar:
        "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yYWhrVVJkNDRVTkQ1YU10SVJyeFJSZjc4OTQifQ",
    },
  });
}
