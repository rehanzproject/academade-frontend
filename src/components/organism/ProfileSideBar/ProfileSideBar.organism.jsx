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

function ProfileSideBar() {
  const { getRequest } = useHTTP();
  const { data } = useSWR("/api/v1/user/info", getRequest);
  const date = transformDate(data?.data?.bod || "2023-06-10");
  return (
    <div className="fixed block inset-x-0 top-0 py-24 bg-primary-30 w-72 h-screen">
      <div className="text-center px-10 flex-row">
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
  );
}

export default ProfileSideBar;
