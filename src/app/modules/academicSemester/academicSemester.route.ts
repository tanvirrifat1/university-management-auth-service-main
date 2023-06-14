import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterValidation } from './academicSemester.Validition';
import { AcademicSemesterController } from './academicSemester.controller';

const router = express.Router();

router.post(
  '/semester',
  validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema),
  AcademicSemesterController.createSemester
);

router.get('/:id', AcademicSemesterController.getSingleSemester);

router.patch(
  '/:id',
  validateRequest(AcademicSemesterValidation.UpdatedAcademicSemesterZodSchema),
  AcademicSemesterController.updateSemester
);

router.get('/', AcademicSemesterController.getAllSemesters);

export const AcademicSemesterRoutes = router;
