import React, { useMemo } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { getThumbnailCourseContent } from "./constant";
import ChapterCard from "../../components/organism/ChapterCard";
import UserProfileThumbnailCard from "../../components/organism/UserProfileThumbnailCard";
import useSWR from "swr";
import useHTTP from "../../utils/hooks/useHTTP";

function ReportingSummary() {
  const { getRequest } = useHTTP();
  const { detail_user } = useParams();
  const { state } = useLocation();
  const { data: rawData, isLoading } = useSWR(
    `/api/v1/admin/course/resume?name=${detail_user}&id=${state.course_id}`,
    getRequest
  );

  const thumbnailCourseContent = useMemo(
    () => getThumbnailCourseContent(state, rawData),
    [state, rawData]
  );

  // Calculate the average score
  const averageScore = useMemo(() => {
    if (!rawData?.data) return 0;

    const scores = rawData.data.map(item => item.score);
    const totalScore = scores.reduce((acc, score) => acc + score, 0);
    return scores.length ? (totalScore / scores.length) : 0;
  }, [rawData]);

  let finalData;
  if (!isLoading && rawData) {
    finalData = rawData?.data?.find(
      item =>
        item.user.email === state.user.email &&
        item.report.course.id === state.course_id
    );
  }
  return (
    <section className="flex flex-col gap-5 me-8 min-h-screen">
      <p className="text-3xl">{detail_user}</p>

      <section className="relative p-10 rounded-2xl bg-light-blue-10 h-48">
        <UserProfileThumbnailCard
          data={thumbnailCourseContent}
          avatar={state.user.image}
        />

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <section className="flex flex-col gap-20 pl-8 float-right w-[65%]">
            <section className="flex flex-col gap-3">
              <h2 className="font-bold text-3xl">Summary All Material</h2>

              <section className="flex justify-between">
                <section className="flex gap-3 items-center font-semibold">
                  <h3>Nilai Akhir</h3>
                  <p
                    className={`border-2 border-secondary-10 rounded-md p-2 py-1 ${
                      averageScore ? "text-success-30" : "text-danger-30"
                    }`}
                  >
                    {averageScore ?? 0}
                  </p>
                </section>

                {finalData?.document && (
                  <Link
                    to={finalData.document}
                    target="_blank"
                    download
                    className="bg-danger-10 hover:bg-danger-30 duration-500 p-4 py-2 rounded-lg font-semibold"
                  >
                    Download
                  </Link>
                )}
              </section>

              <p className="text-sm font-medium text-secondary-50">
                Nilai akhir merupakan rata-rata dari kuis yang telah dikerjakan
                pada setiap chapternya
              </p>
            </section>

            <section className="flex flex-col gap-2">
              <h3 className="font-medium text-xl">Nilai Chapter</h3>

              <section className="h-96 overflow-y-auto mb-4">
                <section className="flex flex-col gap-3 px-2 py-3">
                  {rawData?.data?.length > 0 &&
                    rawData.data.map(({ module, score }) => (
                      <ChapterCard
                        score={score}
                        key={module.module_id}
                        name={module.name}
                        isReporting
                      />
                    ))}
                </section>
              </section>
            </section>
          </section>
        )}
      </section>
    </section>
  );
}

export default ReportingSummary;
