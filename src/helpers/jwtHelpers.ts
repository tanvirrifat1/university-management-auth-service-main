import jwt, { Secret } from 'jsonwebtoken';

const createToken = (
  payload: Record<string, unknown>,
  secret: Secret,
  options: Record<string, unknown>
): string => {
  const result = jwt.sign(payload, secret, options);
  return result;
};

export const jwtHelpers = {
  createToken,
};
