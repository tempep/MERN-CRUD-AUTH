import { z } from "zod";

export const taskSchema = z.object({
  title: z.string({
    required_error: "Title is required",
    invalid_type_error: "Title must be a string",
  }),
  description: z.string({
    required_error: "Description is required",
    invalid_type_error: "Descripcion must be a string",
  }),
  date: z.string().datetime().optional(),
});
