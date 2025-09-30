import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import SideBar from "../organism/Sidebar/SideBar.organism";
import ProfileSideBar from "../organism/ProfileSideBar/ProfileSideBar.organism";
import NavigationBar from "../organism/Navbar/NavigationBar.organism";

function DashboardTemplate() {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <NavigationBar 
        toggleSidebar={toggleSidebar} 
        isSidebarOpen={isSidebarOpen} 
      />

      {location.pathname.includes("profile") ? (
        <ProfileSideBar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      ) : (
        <SideBar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      )}

      {/* Main Content Area */}
      <main
        className={`min-h-screen pt-24 px-4 md:px-8 transition-all duration-300 ease-in-out ${
          isSidebarOpen 
            ? "ml-0 lg:ml-64" 
            : "ml-0 lg:ml-20"
        }`}
      >
        <Outlet />
      </main>
    </>
  );
}

export default DashboardTemplate;