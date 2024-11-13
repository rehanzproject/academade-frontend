import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import UserListCourseCard from "../../components/organism/UserListCourseCard/UserListCourseCard.organism";
import useSWR from "swr";
import useHTTP from "../../utils/hooks/useHTTP";

function ReportingUserView() {
  const { getRequest } = useHTTP();
  const { course_name } = useParams();
  const { data, isLoading } = useSWR(
    `/api/v1/admin/who/enrolled/course?name=${course_name}`,
    getRequest
  );
  const { state } = useLocation();
  return (
    <div>
      <h1 className="py-4 text-xl">{course_name}</h1>
      <div className="grid grid-cols-2 p-1 mr-9 px-4 rounded-lg bg-light-blue/20 border">
        <p>Name</p>
        <p>Aktivitas</p>
      </div>
      {isLoading ? (
        <p>Loading users...</p>
      ) : (
        data?.data?.map((user) => (
          <Link
            key={user.user.user_id}
            to={`/reporting/${course_name}/${user.user.name}`}
            state={{ ...user, ...state }}
          >
            <UserListCourseCard {...user.user} />
          </Link>
        ))
      )}
    </div>
  );
}

export default ReportingUserView;
