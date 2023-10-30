import axios from "axios";

type Description = {
  prompt: string;
  imageCount: Number;
};

export const generateImageAPI = async ({ prompt, imageCount }: Description) => {
  const path =
    "https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image";

  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_STABILITY_API_KEY}`,
  };
  const body = {
    steps: 35,
    width: 1024,
    height: 1024,
    seed: 0,
    cfg_scale: 7,
    samples: imageCount,
    text_prompts: [
      {
        text: `${prompt} (extremely detailed 8k photograph),(masterpiece), (best quality), (ultra-detailed), (best shadow), sony A7, 35mm`,
        weight: 1,
      },
      {
        text: "blurry, bad, lowresolution, bad anatomy, bad hands, mutated hand, text, error, missing fingers, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry, artist name, out of focus, (wedding ring:1.1), 2girls, 3girls, (((multiple views))), (((bad proportions))), (((multiple legs))), (((multiple arms))), (monotone). 3D. low quality lowres multiple breasts, bad fingers, ((gaping anus)), ((gaping pussy)), jewelry, ((vertical letterboxing)), ((letterboxing)), dark skin",
        weight: -1,
      },
    ],
  };
  try {
    const res = await axios.post(path, body, {
      headers: headers,
    });
    return res;
  } catch (e: any) {
    console.log(e);
  }
};
