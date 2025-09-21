import z from 'zod';

export const confirmForgotPasswordSchema = z.object({
  email: z.email({ message: 'Invalid email' }).min(1, '"email" is required'),
  confirmationCode: z.string().min(1, '"confirmationCode" is required'),
  password: z.string({ message: '"password" should be a string' }).min(8, '"password" should be at least 8 characters long'),
});

export type ConfirmForgotPasswordBody = z.infer<typeof confirmForgotPasswordSchema>;
