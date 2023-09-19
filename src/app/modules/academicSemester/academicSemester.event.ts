import { RedisClient } from '../../../shared/redis';
import {
  EVENT_ACADEMIC_SEMESTER_CREATED,
  EVENT_ACADEMIC_SEMESTER_DELETED,
  EVENT_ACADEMIC_SEMESTER_UPDATED,
} from './academicSemester.constant';
import { IAcademicSemesterCreatedEvent } from './academicSemester.interface';
import { AcademicSemesterService } from './academicSemester.service';

const initAcademicSemesterEvents = () => {
  RedisClient.subscribe(EVENT_ACADEMIC_SEMESTER_CREATED, async (e: string) => {
    const data: IAcademicSemesterCreatedEvent = JSON.parse(e);
    console.log(data);
    AcademicSemesterService.createSemesterFromEvent(data);
  });

  RedisClient.subscribe(EVENT_ACADEMIC_SEMESTER_UPDATED, async (e: string) => {
    const data = JSON.parse(e);

    AcademicSemesterService.updatedFromEvent(data);
  });

  RedisClient.subscribe(EVENT_ACADEMIC_SEMESTER_DELETED, async (e: string) => {
    const data = JSON.parse(e);

    await AcademicSemesterService.deleteOneFromDBFromEvent(data.id);
  });
};

export default initAcademicSemesterEvents;
