import React, { useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PlusIcon from "../../components/atoms/Icons/PlusIcon.atom";
import ChapterCard from "../../components/organism/ChapterCard";
import CourseThumbnailCard from "../../components/organism/CourseThumbnailCard";
import useSWR from "swr";
import useHTTP from "../../utils/hooks/useHTTP";

function DetailCourseView() {
  const { getRequest } = useHTTP();
  const { id_course } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useSWR(
    `/api/v1/admin/course/detail?id=${id_course}`,
    getRequest
  );
  const handleAddChapter = useCallback(() => {
    navigate(`/course/${id_course}/new-chapter`, {
      state: { createNewChapter: true, id: id_course },
    });
  }, []);

  const handleChapterClick = useCallback((item) => {
    navigate(`/course/${id_course}/chapter/${item.module_id}`, {
      state: {
        data: item,
      },
    });
  }, []);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <section className="flex flex-col gap-5 me-8 min-h-screen">
      <p className="text-xl">My Course</p>

      <section className="relative p-10 rounded-2xl bg-warning-10 h-48">
        <CourseThumbnailCard data={data?.data} />

        <section className="flex flex-col gap-8 px-4 float-right w-[65%]">
          <section className="flex flex-col gap-2">
            <h2 className="font-bold text-3xl">{data?.data?.name}</h2>
            <p className="text-sm h-24">{data?.data?.description}</p>
          </section>

          <section className="flex flex-col gap-3">
            <section className="flex justify-between">
              <h3 className="font-bold text-2xl">Chapter</h3>
              <PlusIcon width={30} height={30} onClick={handleAddChapter} />
            </section>

            <section className="h-96 overflow-y-auto mb-4">
              <section className="flex flex-col gap-3 px-2 py-3">
                {data?.data?.modules?.length ? (
                  data.data.modules.map((item , index) => {
                    return (
                      <ChapterCard
                        {...item}
                        key={index}
                        courseId={id_course}
                        onClick={() => handleChapterClick(item)}
                      />
                    );
                  })
                ) : (
                  <p className="text-light-90 text-center">
                    Create a new chapter if there is no material chapter
                  </p>
                )}
              </section>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}

export default DetailCourseView;
