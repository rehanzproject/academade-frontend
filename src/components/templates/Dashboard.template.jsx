import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import SideBar from "../organism/Sidebar/SideBar.organism";
import ProfileSideBar from "../organism/ProfileSideBar/ProfileSideBar.organism";
import NavigationBar from "../organism/Navbar/NavigationBar.organism";

function DashboardTemplate() {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to manage sidebar visibility

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Navigation Bar */}
      <NavigationBar toggleSidebar={toggleSidebar} />

      {/* Sidebar (Conditional Rendering) */}
      {location.pathname.includes("profile") ? (
        <ProfileSideBar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      ) : (
        <SideBar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      )}

      {/* Main Content */}
      <div
        className={`relative pt-16 transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "pl-72" : "pl-0"
        } md:pl-72 my-6`}
      >
        <Outlet />
      </div>
    </>
  );
}

export default DashboardTemplate;