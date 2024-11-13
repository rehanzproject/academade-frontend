import React from "react";
import { Link } from "react-router-dom";
import UserListCard from "../../components/organism/UserListCard/UserListCard.organism";
import useSWR from "swr";
import useHTTP from "../../utils/hooks/useHTTP";

function ReportingView() {
  const { getRequest } = useHTTP();
  const { data: course, isLoading } = useSWR(
    "/api/v1/admin/course?size=20&page=1",
    getRequest
  );

  return (
    <section className="me-8">
      <h1 className="text-xl">My Course</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <section className="mr-4 my-4 h-[32rem] overflow-y-auto">
          {course?.data?.map((list) => (
            <UserListCard {...list} />
          ))}
        </section>
      )}
    </section>
  );
}

export default ReportingView;
