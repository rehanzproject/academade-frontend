import React from "react";
import { Link } from "react-router-dom";

function TodaysEventCard({ hours, activity, hoursActivity }) {
  return (
    <>
      <div className="flex text-sm py-2">
        <Link className="text-primary-50">-{hours}</Link>
        <p className="px-4">{activity}</p>
      </div>
      <div className="text-xs pl-14 text-gray-400">{hoursActivity}</div>
    </>
  );
}

export default TodaysEventCard;
