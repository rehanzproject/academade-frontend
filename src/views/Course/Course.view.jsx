import React from "react";
import AllCourse from "../../components/organism/AllCourse/AllCourse.organism";
import useSWR from "swr";
import useHTTP from "../../utils/hooks/useHTTP";

function CourseView() {
  const { getRequest } = useHTTP();
  const { data, isLoading } = useSWR(
    "/api/v1/admin/course?size=20&page=1",
    getRequest,
  );
  return isLoading ? <div>Loading Course...</div> : <AllCourse {...data} />;
}

export default CourseView;
