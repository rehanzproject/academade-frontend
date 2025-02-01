import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DashboardIcon from "../../atoms/Icons/DashboardIcon.atom";
import CourseIcon from "../../atoms/Icons/CourseIcon.atom";
import ReportingIcon from "../../atoms/Icons/ReportingIcon.atom";
import { FaBars, FaTimes } from "react-icons/fa"; // Import hamburger and close icons

function SideBar() {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to manage sidebar visibility

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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      {/* Hamburger Menu Button (Visible on Small Screens) */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-20 p-2 bg-primary-30 rounded-lg md:hidden"
      >
        {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Backdrop for Mobile (Visible when sidebar is open) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-10 bg-black bg-opacity-50 md:hidden"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <section
        className={`fixed top-0 z-20 bg-primary-30 w-72 min-h-screen transition-all duration-300 ease-in-out transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <section className="text-center items-center flex-row">
          {nav.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`inline-flex relative px-4 w-64 mx-8 top-40 my-2 py-2 rounded-lg ${
                location.pathname.includes(item.href.slice(1))
                  ? "bg-white font-bold"
                  : "hover:bg-primary-50/50"
              } transition-all duration-200 ease-in-out`}
              onClick={closeSidebar} // Close sidebar on link click
            >
              <div className="flex items-center justify-start">
                {item.icon}
                <h1 className="mx-4 text-xl">{item.name}</h1>
              </div>
            </Link>
          ))}
        </section>
      </section>
    </>
  );
}

export default SideBar;