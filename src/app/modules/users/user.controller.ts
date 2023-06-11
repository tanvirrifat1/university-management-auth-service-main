import { RequestHandler } from 'express';
import { UserService } from './user.service';

const createUser: RequestHandler = async (req, res, next) => {
  try {
    const { user } = req.body;
    console.log(user);
    const result = await UserService.createUser(user);
    res.status(200).json({
      success: true,
      message: 'successfully user created',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const UserController = {
  createUser,
};
