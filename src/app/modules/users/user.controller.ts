import { RequestHandler } from 'express'
import { UserService } from './user.service'
import { z } from 'zod'

const createUser: RequestHandler = async (req, res, next) => {
  try {
    // req-validation
    const createUserZodSchema = z.object({
      body: z.object({
        role: z.string({
          required_error: 'role is required',
        }),
        password: z.string().optional(),
      }),
    })

    await createUserZodSchema.parseAsync(req)

    const { user } = req.body
    console.log(user)
    const result = await UserService.createUser(user)
    res.status(200).json({
      success: true,
      message: 'successfully user created',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const UserController = {
  createUser,
}
