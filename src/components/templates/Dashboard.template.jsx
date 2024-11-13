import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import SideBar from "../organism/Sidebar/SideBar.organism";
import ProfileSideBar from "../organism/ProfileSideBar/ProfileSideBar.organism";
import NavigationBar from "../organism/Navbar/NavigationBar.organism";

function DashboardTemplate() {
  const location = useLocation();
  return (
    <>
      <NavigationBar />
      {location.pathname.includes("profile") ? <ProfileSideBar /> : <SideBar />}
      <div className="relative pl-80 my-6">
        <Outlet />
      </div>
    </>
  );
}

export default DashboardTemplate;
