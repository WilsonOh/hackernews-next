import { z } from "zod";

export const ItemSchema = z.object({
  id: z.number(),
  deleted: z.boolean().optional(),
  type: z.enum(["job", "story", "comment", "poll", "pollopt"]),
  by: z.string().optional(),
  time: z.number(),
  text: z.string().optional(),
  dead: z.boolean().optional(),
  parent: z.number().optional(),
  poll: z.number().optional(),
  kids: z.array(z.number()).optional(),
  url: z.string().url().optional(),
  score: z.number().optional(),
  title: z.string().optional(),
  parts: z.array(z.number()).optional(),
  descendants: z.number().optional(),
});

export const UserSchema = z.object({
  id: z.string(),
  created: z.number(),
  karma: z.number(),
  about: z.string().optional(),
  submitted: z.array(z.number()),
});

export type Item = z.infer<typeof ItemSchema>;
export type User = z.infer<typeof UserSchema>;
