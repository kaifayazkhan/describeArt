import axios from "axios";

type Description = {
  prompt: string;
  imageCount: string;
};

export const generateImageAPI = async ({ prompt, imageCount }: Description) => {
  const token = localStorage.getItem("token");
  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  };
  const body = {
    prompt,
    imageCount: parseInt(imageCount),
  };
  try {
    const res = await axios.post("/api/generate", body, {
      headers: headers,
    });
    return res;
  } catch (e: any) {
    throw new Error("Image not generated", e);
  }
};
