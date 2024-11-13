import React from "react";
import DetailCardInfo from "../../molecules/DetailCardInfo";
import LocalAvatar from "/images/Avatar.png";

function UserProfileThumbnailCard({ data, avatar }) {
  return (
    <section className="absolute w-80 flex flex-col gap-6 bg-white h-[500px] rounded-t-2xl">
      <h1 className="font-bold bg-primary-10 rounded-t-2xl text-center py-2">
        Profile
      </h1>
      <img
        src={
          avatar
            ? `${import.meta.env.VITE_BASE_URL}/api/v1/public/image/${avatar}`
            : LocalAvatar
        }
        alt="user thumbnail"
        className="w-[8rem] h-[8rem] mx-auto rounded-full scale-110"
      />

      <section className="flex flex-col gap-5 p-3 pb-10 rounded-2xl shadow-lg">
        {data.map((item) => (
          <DetailCardInfo key={item.title} {...item} />
        ))}
      </section>
    </section>
  );
}

export default UserProfileThumbnailCard;
