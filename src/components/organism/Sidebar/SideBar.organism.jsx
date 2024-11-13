import { Link, useLocation } from "react-router-dom";
import DashboardIcon from "../../atoms/Icons/DashboardIcon.atom";
import CourseIcon from "../../atoms/Icons/CourseIcon.atom";
import ReportingIcon from "../../atoms/Icons/ReportingIcon.atom";

function SideBar() {
  const location = useLocation();
  const nav = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: <DashboardIcon />,
    },
    {
      name: "Course",
      href: "/course",
      icon: <CourseIcon />,
    },
    {
      name: "Reporting",
      href: "/reporting",
      icon: <ReportingIcon />,
    },
  ];

  return (
    <section className="fixed block top-0 z-10 bg-primary-30 w-72 min-h-screen">
      <section className="text-center items-center flex-row">
        {nav.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={`inline-flex relative px-4 w-64 mx-8 top-40 my-2 py-2 ${
              location.pathname.includes(item.href.slice(1))
                ? "bg-white font-bold"
                : ""
            } `}
          >
            <div>{item.icon}</div>
            <h1 className="mx-4 text-xl">{item.name}</h1>
          </Link>
        ))}
      </section>
    </section>
  );
}

export default SideBar;
