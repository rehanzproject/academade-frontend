import { useState } from "react";
import Earning from "../../molecules/Earning/Earning.molecul";
import ProfileAccount from "../../molecules/ProfileAccount/ProfileAccount.molecul";
import EmailDash from "../../molecules/ProfileDashSidebar/EmailDash.molecule";
import PhoneDash from "../../molecules/ProfileDashSidebar/PhoneDash.molecule";
import DateOfBirthDash from "../../molecules/ProfileDashSidebar/DateOfBirth.molecule";
import WebsiteDash from "../../molecules/ProfileDashSidebar/WebsiteDash.molecule";
import useSWR from "swr";
import useHTTP from "../../../utils/hooks/useHTTP";
import { transformDate } from "../../../utils/helper/helperMethod";
import NIPDash from "../../molecules/ProfileDashSidebar/GenderDash.molecule";
import { FaTimes } from "react-icons/fa"; // Import close icon

function ProfileSideBar({ isOpen, onClose }) {
  const { getRequest } = useHTTP();
  const { data } = useSWR("/user/info", getRequest);
  const date = transformDate(data?.data?.bod || "2023-06-10");

  return (
    <>
      {/* Backdrop for Mobile (Visible when sidebar is open) */}
      {isOpen && (
        <div
          className="fixed inset-0 z-10 bg-black bg-opacity-50 md:hidden"
          onClick={onClose}
        ></div>
      )}

      {/* Profile Sidebar */}
      <div
        className={`fixed top-0 z-20 bg-primary-30 w-72 min-h-screen transition-all duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        {/* Close Button for Mobile */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-xl md:hidden"
        >
          <FaTimes size={24} />
        </button>

        <div className="text-center px-10 flex-row pt-24">
          <ProfileAccount {...data?.data} />
          <div className="flex flex-col items-start my-4">
            <h1 className="font-bold text-sm py-1">Contact Information</h1>
            <EmailDash text={data?.data?.email} />
            <DateOfBirthDash birthDate={date} />
            <NIPDash nip={data?.data?.nip} />
            <WebsiteDash website={"www.asia.ac.id"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileSideBar;