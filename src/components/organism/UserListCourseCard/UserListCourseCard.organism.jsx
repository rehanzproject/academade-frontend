import React from "react";

function UserListCourseCard({ name, email, activity }) {
  return (
    <div className="p-4 my-4 mr-9 rounded-lg shadow-lg text-sm">
      <div className="py-2 grid grid-cols-2">
        <p>{name}</p>
        <p className="px-2 text-success-50 font-bold">
          {!activity ? "Aktif" : "Tidak Aktif"}
        </p>
      </div>
      <p className="italic text-primary-50">{email}</p>
    </div>
  );
}

export default UserListCourseCard;
