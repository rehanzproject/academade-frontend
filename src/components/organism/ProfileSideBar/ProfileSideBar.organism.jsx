import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Earning from "../../molecules/Earning/Earning.molecul";
import ProfileAccount from "../../molecules/ProfileAccount/ProfileAccount.molecul";
import EmailDash from "../../molecules/ProfileDashSidebar/EmailDash.molecule";
import PhoneDash from "../../molecules/ProfileDashSidebar/PhoneDash.molecule";
import DateOfBirthDash from "../../molecules/ProfileDashSidebar/DateOfBirth.molecule";
import WebsiteDash from "../../molecules/ProfileDashSidebar/WebsiteDash.molecule";
import NIPDash from "../../molecules/ProfileDashSidebar/GenderDash.molecule";
import useSWR from "swr";
import useHTTP from "../../../utils/hooks/useHTTP";
import { transformDate } from "../../../utils/helper/helperMethod";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function ProfileSideBar({ isOpen, onClose }) {
  const { getRequest } = useHTTP();
  const { data } = useSWR("/user/info", getRequest);
  const date = transformDate(data?.data?.bod || "2023-06-10");

  const toggleSidebar = () => {
    onClose();
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

      {/* Profile Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 bg-primary-30 min-h-screen transition-all duration-300 ease-in-out ${
          isOpen ? "w-64 sm:w-72" : "w-0 lg:w-20"
        } overflow-hidden`}
      >
        <div className="px-6 pt-20 overflow-y-auto h-full">
          {/* Profile Account Section */}
          <div className={`transition-opacity duration-300 ${isOpen ? "opacity-100" : "lg:opacity-0"}`}>
            <ProfileAccount {...data?.data} />
          </div>

          {/* Contact Information Section */}
          <div className={`flex flex-col items-start my-6 transition-opacity duration-300 ${isOpen ? "opacity-100" : "lg:opacity-0"}`}>
            <h1 className="font-bold text-sm py-2 mb-2">Contact Information</h1>
            <div className="space-y-3 w-full">
              <EmailDash text={data?.data?.email} />
              <DateOfBirthDash birthDate={date} />
              <NIPDash nip={data?.data?.nip} />
              <WebsiteDash website={"www.asia.ac.id"} />
            </div>
          </div>

          {/* Icon-only view when collapsed (Desktop) */}
          {!isOpen && (
            <div className="hidden lg:flex flex-col items-center justify-center pt-8 space-y-6">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xl">👤</span>
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xl">📧</span>
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xl">📅</span>
              </div>
            </div>
          )}
        </div>
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

export default ProfileSideBar;