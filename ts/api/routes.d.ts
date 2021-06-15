export const auth_route = {
  SIGNUP_API:
    process.env.SIGNUP_API ||
    process.env.NEXT_PUBLIC_SIGNUP_API ||
    'http://localhost:3030/auth/signup',
  checkJWT:
    process.env.NEXT_PUBLIC_CHECKJWT || 'http://localhost:3030/auth/checkJWT',
};
