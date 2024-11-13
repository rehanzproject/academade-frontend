import React from "react";
import MyCourse from "../../components/organism/MyCourse/MyCourse.organism";
import RatingCourse from "../../components/organism/RatingCourse/RatingCourse.organism";
import HeaderProfile from "../../components/organism/HeaderProfile/HeaderProfile.molecul";
import Calendar from "../../components/organism/Calender/Calender.organism";
import TodaysEvent from "../../components/organism/TodaysEvent/TodaysEvent.organism";
import useSWR from "swr";
import useHTTP from "../../utils/hooks/useHTTP";

function ContentProfile() {
  const { getRequest } = useHTTP();
  const { data: course, isLoading: courseLoading } = useSWR(
    "/api/v1/admin/course?size=3&page=1",
    getRequest
  );
  const { data: profile, isLoading: profileLoading } = useSWR(
    "/api/v1/admin/info",
    getRequest
  );
  const { data: comment, isLoading: commentLoading } = useSWR(
    "/api/v1/admin/course/reviews?size=6&page=1",
    getRequest
  );
  return (
    <div className="py-4 mr-4">
      {profileLoading ? (
        <p>Loading Profile...</p>
      ) : (
        <HeaderProfile {...profile?.data} />
      )}
      <div className="grid grid-cols-2 gap-8 px-2 py-6 mr-4">
        <div>
          {courseLoading ? (
            <p>Loading Course...</p>
          ) : (
            <MyCourse course={course} />
          )}
        </div>
        {commentLoading ? (
          <p>Loading Comment...</p>
        ) : (
          <RatingCourse comment={comment?.data} />
        )}
      </div>
      <div className="grid grid-cols-4 absolute bottom-0 pb-10 px-2 gap-4 mr-10">
        <Calendar />
        <TodaysEvent />
      </div>
    </div>
  );
}

export default ContentProfile;
