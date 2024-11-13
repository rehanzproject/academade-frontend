import React from "react";
import RatingStars from "../../atoms/Rating/Rating.atom";

function FavoriteCourse({ dataCourses }) {
  const sortedData = dataCourses?.data?.sort((a, b) => b.rating - a.rating);
  const slicedData = sortedData?.slice(0, 3);
  return (
    <section className="flex flex-col gap-3 drop-shadow-lg shadow-lg rounded-2xl w-3/12 p-5 bg-light-blue/20">
      <h1 className="font-bold text-xl">Favorite Course</h1>

      {slicedData?.map((item) => (
        <section
          key={item.course_id}
          className="bg-white p-4 rounded-2xl border-2 border-secondary-10"
        >
          <article className="flex justify-between gap-2">
            <h2 className="font-bold text-base">{item.name}</h2>
            <section className="rating rating-sm flex items-center">
              <RatingStars />
              <p className="text-sm">{item.rating ?? 0.0}</p>
            </section>
          </article>

          <section className="text-sm text-center py-1">
            Attendees : {item.member_count ?? 0}
          </section>
        </section>
      ))}
    </section>
  );
}

export default FavoriteCourse;
