import { z } from "zod";

export const bodySchema = z.object({
  prompt: z.string(),
  pastPrompts: z.array(
    z.object({
      role: z.enum(["user", "assistant", "system"]),
      content: z.string(),
    }),
  ),
  crimeCase: z.object({
    name: z.string(),
    defendant: z.string(),
  }),
});

export type BodySchema = z.infer<typeof bodySchema>;
