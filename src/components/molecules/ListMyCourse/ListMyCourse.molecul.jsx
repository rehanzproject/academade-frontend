import React from "react";
import { makeRupiahValue } from "../../../utils/helper/helperMethod";

function ListMyCourse({ course }) {
  const price = makeRupiahValue(course.price);

  return (
    <div className="border border-black rounded-xl text-xs px-7 py-2 my-4">
      <div className="flex justify-between items-center my-auto">
        <p className="font-medium text-sm">{course?.name}</p>
        <p className="font-bold text-base mt-3">{price}</p>
      </div>
      <div className="flex gap-3 text-gray-400">
        <p>{course?.modules?.length} Material</p>
        <p>{course?.modules?.length} Course</p>
      </div>
    </div>
  );
}

export default ListMyCourse;
