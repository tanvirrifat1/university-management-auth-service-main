import jwt, { Secret } from 'jsonwebtoken';

const createToken = (
  payload: Record<string, unknown>,
  secret: Secret,
  expireTime: string
): string => {
  const result = jwt.sign(payload, secret, {
    expiresIn: expireTime,
  });
  return result;
};

export const jwtHelpers = {
  createToken,
};
