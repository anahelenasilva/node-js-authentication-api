import z from 'zod';

export const refreshTokenSchema = z.object({
  refreshToken: z.string({ message: 'Invalid refresh token' }).min(1, '"refreshToken" is required'),
});

export type RefreshTokenBody = z.infer<typeof refreshTokenSchema>;
