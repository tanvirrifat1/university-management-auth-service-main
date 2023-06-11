import express from 'express';
// import { UserController } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterValidation } from './academicSemester.Validition';
// import { UserValidation } from './user.validation';
const router = express.Router();

router.post(
  '/create-user',
  validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema)
);

export const UserRoutes = router;
