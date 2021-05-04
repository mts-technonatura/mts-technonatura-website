import { GetServerSidePropsContext } from 'next';
import axios from 'axios';
import { ssr } from '@/ts/index';

export default async function serverAuth(
  ctx: GetServerSidePropsContext,
): Promise<Partial<ssr>> {
  const tokenCookieKey =
    process.env.NEXT_PUBLIC_JWT_AUTH_TOKEN || 'jwtAuthToken';
  const token = ctx.req.cookies[tokenCookieKey];

  if (token) {
    try {
      const user = await axios.post<ssr>(
        process.env.NEXT_PUBLIC_CHECKJWT ||
          'http://localhost:3030/auth/checkJWT',
        {
          token: token,
        },
      );

      return {
        ...user.data,
        token: token,
      };
    } catch (err) {
      return {
        message: 'server error',
      };
    }
  }

  return {
    message: 'no token',
  };
}
