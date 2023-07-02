import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { ManagementDepartmentService } from './managementDepartment.service';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { IManagementDepartment } from './managementDepart.interface';

const createDepartment = catchAsync(async (req: Request, res: Response) => {
  const { ...departmentData } = req.body;
  const result = await ManagementDepartmentService.createDepartment(
    departmentData
  );

  sendResponse<IManagementDepartment>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Management department created successfully',
    data: result,
  });
});

export const ManagementDepartmentController = {
  createDepartment,
};
