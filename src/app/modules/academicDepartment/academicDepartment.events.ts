import { RedisClient } from '../../../shared/redis';
import { EVENT_ACADEMIC_DEPARTMENT_CREATED } from './academicDepartment.constants';
import { AcademicDepartmentCreatedEvent } from './academicDepartment.interface';
import { AcademicDepartmentService } from './academicDepartment.service';

const intoAcademicDepartmentEvents = () => {
  RedisClient.subscribe(
    EVENT_ACADEMIC_DEPARTMENT_CREATED,
    async (e: string) => {
      const data: AcademicDepartmentCreatedEvent = JSON.parse(e);
      console.log(data);

      await AcademicDepartmentService.insertIntoFromEvent(data);
    }
  );
};

export default intoAcademicDepartmentEvents;
