import z from 'zod';

export const forgotPasswordSchema = z.object({
  email: z.email({ message: 'Invalid email' }).min(1, 'Email is required'),
});

export type ForgotPasswordBody = z.infer<typeof forgotPasswordSchema>;
