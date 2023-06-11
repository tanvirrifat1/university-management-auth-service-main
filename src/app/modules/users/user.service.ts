import ApiError from '../../../Error/ApiError';
import config from '../../../config/index';
import { IUser } from './user.interface';
import { User } from './user.model';
import { generateUserId } from './user.ultis';

const createUser = async (user: IUser): Promise<IUser | null> => {
  // auto generated incremental id
  const id = await generateUserId();
  user.id = id;
  // default password
  if (!user.password) {
    user.password = config.default_user_pass as string;
  }

  const createdUser = await User.create(user);

  if (!createUser) {
    throw new ApiError(404, 'Failed to create user!');
  }
  return createdUser;
};

export const UserService = {
  createUser,
};
