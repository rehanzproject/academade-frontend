import React from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";

function DetailChapter() {
  const { state } = useLocation();

  const data = state?.data || {};

  const renderDescription = (description) => {
    return { __html: description };
  };

  return (
    <section className="flex flex-col gap-5 me-8">
      <h2 className="text-xl">My Chapter</h2>

      <section className="bg-warning-10 font-bold text-3xl p-4 rounded-xl">
        <h1 className="px-4">{data?.name}</h1>
      </section>

      <section className="flex flex-col gap-2">
        <h1 className="font-semibold text-xl">Deskripsi</h1>
        <div className="ml-4" dangerouslySetInnerHTML={data?.description ? renderDescription(data.description) : { __html: '' }} />
      </section>

      <section className="flex flex-col gap-2">
        <h1 className="font-semibold text-xl">Video</h1>
        {data?.video ? (
          <ReactPlayer controls url={data.video} />
        ) : (
          <p className="ml-4">Belum ada video saat ini</p>
        )}
      </section>
    </section>
  );
}

export default DetailChapter;
