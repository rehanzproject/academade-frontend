import { Link, useLocation } from "react-router-dom";
import DashboardIcon from "../../atoms/Icons/DashboardIcon.atom";
import CourseIcon from "../../atoms/Icons/CourseIcon.atom";
import ReportingIcon from "../../atoms/Icons/ReportingIcon.atom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function SideBar({ isOpen, onClose }) {
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

  const toggleSidebar = () => {
    onClose(); // Use the parent's toggle function
  };

  return (
    <>
      {/* Backdrop for Mobile (Visible when sidebar is open on small screens) */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 bg-primary-30 min-h-screen transition-all duration-300 ease-in-out ${
          isOpen ? "w-64 sm:w-72" : "w-0 lg:w-20"
        } overflow-hidden`}
      >
        <nav className="pt-20 px-4">
          {nav.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center px-4 py-3 mb-2 rounded-lg transition-all duration-200 ease-in-out ${
                location.pathname.includes(item.href.slice(1))
                  ? "bg-white font-bold shadow-md"
                  : "hover:bg-primary-50/50"
              } ${!isOpen ? "lg:justify-center" : ""}`}
              onClick={() => {
                // Close sidebar on mobile after clicking
                if (window.innerWidth < 1024) {
                  toggleSidebar();
                }
              }}
              title={!isOpen ? item.name : ""}
            >
              <div className="flex-shrink-0">{item.icon}</div>
              <span
                className={`ml-4 text-lg whitespace-nowrap transition-opacity duration-300 ${
                  isOpen ? "opacity-100" : "lg:opacity-0 lg:w-0 lg:ml-0"
                }`}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Toggle Button (Center of Sidebar Edge) */}
      <button
        onClick={toggleSidebar}
        className={`fixed top-1/2 -translate-y-1/2 z-50 p-2 bg-primary-30 rounded-r-lg shadow-lg transition-all duration-300 ease-in-out hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-50 ${
          isOpen ? "left-64 sm:left-72" : "left-0 lg:left-20"
        }`}
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
      >
        {isOpen ? (
          <FaChevronLeft size={20} />
        ) : (
          <FaChevronRight size={20} />
        )}
      </button>
    </>
  );
}

export default SideBar;