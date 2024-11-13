import React from "react";
import { Link } from "react-router-dom";
import AllCourseCard from "../AllCourseCard/AllCourseCard.organism";

function AllCourse({ data }) {
  return (
    <div className="text-center">
      <div className="flex items-center gap-4">
        <p className="text-2xl">All Course</p>
        <Link
          to="/course/new-course"
          state={{ createNewCourse: true }}
          className="bg-primary-50 hover:bg-primary-70 duration-500 inline-flex text-white py-2 px-6 rounded-lg text-sm"
        >
          New Course
        </Link>
      </div>
      {data?.length ? (
        <div className="grid grid-cols-2 gap-7 h-[28rem] mt-8 pr-12 bottom-0 pb-10 mr-8 justify-center overflow-y-auto">
          {data?.map((list, index) => (
            <AllCourseCard key={index} data={list} />
          ))}
        </div>
      ) : (
        <p className="text-center mt-12 text-gray-500">
          create a new course if you don't have a course yet
        </p>
      )}
    </div>
  );
}

export default AllCourse;
