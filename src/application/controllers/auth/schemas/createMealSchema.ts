import z from 'zod';

export const createMealSchema = z.object({
  password: z.string({ message: 'Password should be a string' }).min(8, 'Password should be at least 8 characters long'),
  email: z.email({ message: 'Invalid email' }).min(1, 'Email is required'),
});

export type CreateMealBody = z.infer<typeof createMealSchema>;
