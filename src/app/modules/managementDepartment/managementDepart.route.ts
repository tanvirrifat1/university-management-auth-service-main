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

export const ManagementDepartmentRoutes = router;
