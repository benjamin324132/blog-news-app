import * as z from "zod";

export const postschema = z.object({
  title: z
    .string()
    .min(5, { message: "Title must be larger than 5 characters" })
    .max(150, { message: "Title must be smaller than 150 characters" }),
  slug: z.string().regex(/^[a-z](-?[a-z])*$/,{message: "Please enter a valid slug"}).nonempty(),
  shortDescription: z
    .string()
    .min(20, { message: "Short description must be larger than 20 characters" })
    .max(250, {
      message: "Short description must be smaller than 250 characters",
    }),
  category: z.string().nonempty(),
  content: z.string().nonempty({message: "Content should not be empty"}),
  img: z.string().url().nonempty(),
});

export const categorySchema = z.object({
  title: z.string().nonempty(),
  slug: z.string().regex(/^[a-z](-?[a-z])*$/,{message: "Please enter a valid slug"}).nonempty(),
  img: z.string().url().nonempty(),
});

export const signInSchema = z.object({
  email: z.string().email({message: "Please enter a valid email"}),
  password: z.string().min(6, { message: "Please enter at least 6 characters password"}).max(20, {message: "Please enter less than 20 characters password"})
});

export const signUpSchema = z.object({
  name: z.string().min(3, { message: "Please enter at least 3 characters name"}).max(40, {message: "Please enter less than 40 characters name"}),
  email: z.string().email({message: "Please enter a valid email"}),
  password: z.string().min(6, { message: "Please enter at least 6 characters password"}).max(20, {message: "Please enter less than 20 characters password"})
});
