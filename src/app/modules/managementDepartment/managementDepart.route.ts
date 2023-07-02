import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ManagementDepartmentValidation } from './managemantDepartment.validation';
import { ManagementDepartmentController } from './managementDepart.controller';

const router = express.Router();

router.post(
  '/create-department',
  validateRequest(
    ManagementDepartmentValidation.createManagementDepartmentZodSchema
  ),
  ManagementDepartmentController.createDepartment
);

router.patch(
  '/:id',
  validateRequest(
    ManagementDepartmentValidation.updateManagementDepartmentZodSchema
  ),
  ManagementDepartmentController.updateDepartment
);

router.get('/:id', ManagementDepartmentController.getSingleDepartment);

router.get('/', ManagementDepartmentController.getAllDepartments);

router.delete('/:id', ManagementDepartmentController.deleteDepartment);

export const ManagementDepartmentRoutes = router;
