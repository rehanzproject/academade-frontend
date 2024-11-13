import React from "react";
import RatingsStars from "../../atoms/Rating/Rating.atom";
import ThreeDotIcon from "../../atoms/Icons/ThreeDotIcon";

function RatingCourseCard({ list }) {
  return (
    <div>
      <div className="flex justify-between p-2 py-3">
        <img
          src={list?.user?.image}
          alt={list?.user?.name}
          className="h-8 w-8 rounded-full inline-flex mt-1"
        />
        <p className="px-4 flex flex-1 text-base items-center">
          {list?.user?.name}
        </p>
        <div className="rating rating-sm flex flex-row justify-between px-1 py-2">
          <RatingsStars />
          <p className="text-sm flex pr-10 mx-5">{list.rating}</p>
          <ThreeDotIcon width={4} />
        </div>
      </div>
      <p className="text-gray-400 text-xs pb-6 px-2 border-black border-b">
        “{list.description}”
      </p>
    </div>
  );
}

export default RatingCourseCard;
