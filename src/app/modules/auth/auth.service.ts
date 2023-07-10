import httpStatus from 'http-status';
import ApiError from '../../../Error/ApiError';
import { User } from '../users/user.model';
import { ILoginUser } from './auth.interface';
import jwt, { Secret } from 'jsonwebtoken';
import config from '../../../config';

const loginUser = async (payload: ILoginUser) => {
  const { id, password } = payload;

  const isUserExist = await User.isUserExist(id);

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist');
  }

  if (
    isUserExist.password &&
    !(await User.isPasswordMatched(password, isUserExist.password))
  ) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect');
  }

  //   create access token & refresh token

  const accessToken = jwt.sign(
    {
      id: isUserExist?.id,
      role: isUserExist.role,
    },
    config.jwt.secret as Secret,
    { expiresIn: config.jwt.refresh_expires_in }
  );

  return {};
};

export const AuthService = {
  loginUser,
};
