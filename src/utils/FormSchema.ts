import { number, z } from "zod";

export const signInSchema = z.object({
  username: z.string().nonempty("Email is required").email(),
  password: z.string().nonempty("Password is required."),
});

export type SingInInputs = z.infer<typeof signInSchema>;

export const signUpSchema = z
  .object({
    name: z
      .string()
      .nonempty("Name is required.")
      .min(5, { message: "Must be 5 or more characters long" })
      .max(30, { message: "Name must be less than 30 words" }),
    email: z.string().nonempty("Email is required.").email(),
    password: z
      .string()
      .nonempty("Password is required.")
      .min(6, { message: "Password must be greater than 6 characters" }),
    confirmPassword: z.string().nonempty("Confirm Password is required."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password must match",
    path: ["confirmPassword"],
  });

export type SingUpInputs = z.infer<typeof signUpSchema>;

export const forgotPasswordEmailSchema = z.object({
  email: z.string().nonempty("Email is required.").email(),
});

export type ForgotPasswordEmailInput = z.infer<
  typeof forgotPasswordEmailSchema
>;
