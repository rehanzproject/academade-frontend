import React, { useMemo } from "react";
import { getDetailCardInfoContent } from "./constant";
import DetailCardInfo from "../../molecules/DetailCardInfo";

function CourseThumbnailCard({ data }) {
  const detailCardInfoContent = useMemo(
    () => getDetailCardInfoContent(data),
    []
  );

  return (
    <section className="absolute flex flex-col gap-3 w-80 bg-white h-[500px] rounded-t-2xl">
      <img src={data?.thumbnail} className="h-[10rem]" alt="course thumbnail" />

      <section className="flex flex-col gap-5 p-3 pb-10 rounded-2xl shadow-lg">
        {detailCardInfoContent.map((item) => (
          <DetailCardInfo key={item.title} {...item} fromCourse />
        ))}
      </section>
    </section>
  );
}

export default CourseThumbnailCard;
