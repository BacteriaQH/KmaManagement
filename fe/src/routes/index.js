import Home from '../pages/Home';
//      student
//  profile
import StudentProfile from '../pages/StudentManagement/Profile';
import AddStudent from '../pages/StudentManagement/Profile/Add';
import EditStudent from '../pages/StudentManagement/Profile/Edit';
import ListStudent from '../pages/StudentManagement/Profile/List';

//  report
import Report2 from '../pages/StudentManagement/Report/Report2';

//      teacher
//  profile
import AddTeacher from '../pages/EducationManagement/TeacherManagement/Add';
import EditTeacher from '../pages/EducationManagement/TeacherManagement/Edit';
import ListTeacher from '../pages/EducationManagement/TeacherManagement/List';
import TeacherProfile from '../pages/EducationManagement/TeacherManagement';

//      grade
import AddGrade from '../pages/EducationManagement/GradeManagement/Add';
import FindGrade from '../pages/EducationManagement/GradeManagement/Find';
import GradeManagement from '../pages/EducationManagement/GradeManagement';
import Report from '../pages/StudentManagement/Report';

//      subject
import AddSubject from '../pages/EducationManagement/SubjectManagement/Add';
import ListSubject from '../pages/EducationManagement/SubjectManagement/List';
import SubjectManagement from '../pages/EducationManagement/SubjectManagement';
import Login from '../pages/Login';
import ManagementClass from '../pages/EducationManagement/ClassManagement/Management';
import ScheduleManagement from '../pages/EducationManagement/ScheduleManagement';
import AddSchedule from '../pages/EducationManagement/ScheduleManagement/AddSchedule';
import AddTeacherToSchedule from '../pages/EducationManagement/ScheduleManagement/AddTeacherToSchedule';
import EditSubject from '../pages/EducationManagement/SubjectManagement/Edit';
import AddClassroom from '../pages/EducationManagement/ScheduleManagement/AddClassroom';
import Description from '../pages/Description';
import Authorization from '../pages/Others/Authorization';
import Others from '../pages/Others';
import FindGradeStudent from '../pages/EducationManagement/GradeManagement/FindGradeStudent';

const adminRoutes = [
    { path: '/login', component: Login, defaultLayout: false },
    { path: '/home', component: Home, defaultLayout: true },
    { path: '/', component: Description },
    { path: '/students/profile', component: StudentProfile, defaultLayout: true },
    { path: '/students/profile/add', component: AddStudent, defaultLayout: true },
    { path: '/students/profile/edit/:id', component: EditStudent, defaultLayout: true },
    { path: '/students/profile/list', component: ListStudent, defaultLayout: true },

    { path: '/students/report', component: Report, defaultLayout: true }, // no
    { path: '/students/report/report2', component: Report2, defaultLayout: true }, //no

    { path: '/teachers/profile', component: TeacherProfile, defaultLayout: true },
    { path: '/teachers/profile/add', component: AddTeacher, defaultLayout: true },
    { path: '/teachers/profile/edit/:id', component: EditTeacher, defaultLayout: true },
    { path: '/teachers/profile/list', component: ListTeacher, defaultLayout: true },

    { path: '/grades', component: GradeManagement, defaultLayout: true },
    { path: '/grades/add', component: AddGrade, defaultLayout: true },
    { path: '/grades/find', component: FindGrade, defaultLayout: true },
    { path: '/grades/find/:id', component: FindGradeStudent, defaultLayout: true },

    { path: '/subjects', component: SubjectManagement, defaultLayout: true },
    { path: '/subjects/add', component: AddSubject, defaultLayout: true },
    { path: '/subjects/edit/:id', component: EditSubject, defaultLayout: true },
    { path: '/subjects/list', component: ListSubject, defaultLayout: true },

    { path: '/class', component: ManagementClass, defaultLayout: true },

    { path: '/schedule', component: ScheduleManagement, defaultLayout: true },
    { path: '/schedule/add', component: AddSchedule, defaultLayout: true },
    { path: '/schedule/add-teachers-to-schedule', component: AddTeacherToSchedule, defaultLayout: true },
    { path: '/schedule/add-classroom', component: AddClassroom, defaultLayout: true },

    { path: '/others', component: Others, defaultLayout: true },
    { path: '/others/authorization', component: Authorization, defaultLayout: true },
];

//Học viên
const studentRoutes = [
    { path: '/', component: Description },
    { path: '/login', component: Login, defaultLayout: false },
    { path: '/home', component: Home, defaultLayout: true },

    { path: '/students/profile', component: StudentProfile, defaultLayout: true },
    { path: '/students/profile/edit/:id', component: EditStudent, defaultLayout: true },

    { path: '/grades', component: GradeManagement, defaultLayout: true },
    { path: '/grades/find/:id', component: FindGradeStudent, defaultLayout: true },
];

//Giảng viên
const teacherRoutes = [
    { path: '/', component: Description },
    { path: '/login', component: Login, defaultLayout: false },
    { path: '/home', component: Home, defaultLayout: true },

    { path: '/teachers/profile/edit/:id', component: EditTeacher, defaultLayout: true },
    { path: '/teachers/profile', component: TeacherProfile, defaultLayout: true },

    { path: '/grades', component: GradeManagement, defaultLayout: true },
    { path: '/grades/add', component: AddGrade, defaultLayout: true },
];

//Khảo thí
const department1 = [
    { path: '/', component: Description },
    { path: '/login', component: Login, defaultLayout: false },
    { path: '/home', component: Home, defaultLayout: true },

    { path: '/grades', component: GradeManagement, defaultLayout: true },
    { path: '/grades/add', component: AddGrade, defaultLayout: true },
    { path: '/grades/find', component: FindGrade, defaultLayout: true },
    { path: '/grades/find/:id', component: FindGradeStudent, defaultLayout: true },
];

//Hệ QLSV
const department2 = [
    { path: '/', component: Description },
    { path: '/login', component: Login, defaultLayout: false },
    { path: '/home', component: Home, defaultLayout: true },

    { path: '/students/profile', component: StudentProfile, defaultLayout: true },
    { path: '/students/profile/add', component: AddStudent, defaultLayout: true },
    { path: '/students/profile/edit/:id', component: EditStudent, defaultLayout: true },
    { path: '/students/profile/list', component: ListStudent, defaultLayout: true },
];

//Đào tạo
const department3 = [
    { path: '/', component: Description },
    { path: '/login', component: Login, defaultLayout: false },
    { path: '/home', component: Home, defaultLayout: true },

    { path: '/class', component: ManagementClass, defaultLayout: true },

    { path: '/subjects', component: SubjectManagement, defaultLayout: true },
    { path: '/subjects/add', component: AddSubject, defaultLayout: true },
    { path: '/subjects/edit/:id', component: EditSubject, defaultLayout: true },
    { path: '/subjects/list', component: ListSubject, defaultLayout: true },

    { path: '/schedule', component: ScheduleManagement, defaultLayout: true },
    { path: '/schedule/add', component: AddSchedule, defaultLayout: true },
    { path: '/schedule/add-teachers-to-schedule', component: AddTeacherToSchedule, defaultLayout: true },
    { path: '/schedule/add-classroom', component: AddClassroom, defaultLayout: true },
];

const routes = {
    adminRoutes,
    studentRoutes,
    teacherRoutes,
    department1,
    department2,
    department3,
};
export default routes;
