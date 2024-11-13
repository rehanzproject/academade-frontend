import React from "react";
import ListCourse from "../../components/organism/ListCourse/ListCourse.organism";
import useSWR from "swr";
import useHTTP from "../../utils/hooks/useHTTP";

function ProfileMyCourse() {
  const { getRequest } = useHTTP();
  const { data, isLoading } = useSWR(
    "/api/v1/admin/course?size=10&page=1",
    getRequest
  );

  return (
    <div>
      <h1 className="text-lg py-4">My Course</h1>
      <div className="h-[32rem] mx-2 overflow-y-auto">
        {isLoading ? <p>Loading Course...</p> : <ListCourse allCourse={data} />}
      </div>
    </div>
  );
}

export default ProfileMyCourse;
