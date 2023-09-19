import intoAcademicDepartmentEvents from '../modules/academicDepartment/academicDepartment.events';
import initAcademicFacultyEvents from '../modules/academicFaculty/academicFaculty.events';
import initAcademicSemesterEvents from '../modules/academicSemester/academicSemester.event';

const subscribeToEvents = () => {
  initAcademicSemesterEvents();
  initAcademicFacultyEvents();
  intoAcademicDepartmentEvents();
};

export default subscribeToEvents;
