import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { academicDepartmentController } from './academicDepartment.controller';
import { AcademicDepartmentValidation } from './academicDepartment.validation';

const router = express.Router();

router.post(
  '/create-department',
  validateRequest(
    AcademicDepartmentValidation.createAcademicDepartmentZodSchema
  ),
  academicDepartmentController.createDepartment
);

router.get('/:id', academicDepartmentController.getSingleDepartment);

router.patch(
  '/:id',
  validateRequest(
    AcademicDepartmentValidation.updateAcademicDepartmentZodSchema
  ),
  academicDepartmentController.updatedDepartment
);

router.delete('/:id', academicDepartmentController.deleteDepartment);

router.get('/', academicDepartmentController.getAllDepartments);

export const AcademicDepartmentRoutes = router;
