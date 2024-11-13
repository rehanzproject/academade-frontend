import React from "react";
import { Link } from "react-router-dom";
import { getRandomBorderColor } from "../../../utils/helper/helperMethod";
import CourseCard from "../CourseCard";

function AllCourseCard({ data }) {
  const randomColorBorder = getRandomBorderColor();
  const { course_id, name, categories, user_count,finished, member_count } = data;
  return (
    <div className={`p-5 rounded-xl border-l-4 ${randomColorBorder} shadow-lg`}>
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">{name}</h1>
        <CourseCard {...data} />
      </div>
      <div className="flex flex-row gap-2 py-4 pb-14">
        <h1>Category :</h1>
        <p className="font-bold">{categories?.toString()}</p>
      </div>
      <div className="gap-5 flex items-start justify-start border-r">
        <div className="mx-1 text-center">
          <p>{user_count}</p>
          <p>Attendees</p>
        </div>
        <div className="px-10 mx-6 text-center border-l border-black">
          <p>{member_count} </p>
          <p>views</p>
        </div>
        <div className="flex ml-auto">
          <Link
            to={`/course/${course_id}`}
            className="bg-success-10 p-2 rounded-lg px-4"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AllCourseCard;
