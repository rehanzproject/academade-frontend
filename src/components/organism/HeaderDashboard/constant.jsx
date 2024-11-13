import NewStudentIconDash from "../../atoms/Icons/NewStudentIconDash.atom";
import StudentIcon from "../../atoms/Icons/StudentIconDash.atom";
import CourseIcon from "../../atoms/Icons/CourseIconDash.atom";
import GraduateIcon from "../../atoms/Icons/GraduateIconDash.atom";

function DatasHeader({ dataStats }) {
  const headerDashboardData = [
    {
      title: "New Student",
      num: dataStats?.data?.student,
      icon: <NewStudentIconDash />,
    },
    {
      title: "Student",
      num: dataStats?.data?.student,
      icon: <StudentIcon />,
    },
    {
      title: "Course",
      num: dataStats?.data?.course,
      icon: <CourseIcon />,
    },
    {
      title: "Graduate",
      num: dataStats?.data?.graduate,
      icon: <GraduateIcon />,
    },
  ];
  return headerDashboardData;
}

export default DatasHeader;
