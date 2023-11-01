import axios from "axios";

type Description = {
  prompt: string;
  imageCount: Number;
};

export const generateImageAPI = async ({ prompt, imageCount }: Description) => {
  const headers = {
    Accept: "application/json",
  };
  const body = {
    prompt,
    imageCount,
  };
  try {
    const res = await axios.post("/api/generate", body, {
      headers: headers,
    });
    return res;
  } catch (e: any) {
    console.log(e);
  }
};
