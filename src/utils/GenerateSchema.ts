import { z } from "zod";

export const GenerateSchema = z.object({
  prompt: z.string().nonempty("Prompt is required"),
  imageCount,
});
