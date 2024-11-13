import React from "react";
import CalendarIcon from "../../atoms/Icons/CalendarIcon.atom";
import TodaysEventCard from "../../molecules/TodaysEventCard/TodaysEventCard.molecul";
import { listEvent } from "./dummyData";

function TodaysEvent() {
  return (
    <div className="py-4 shadow-lg bg-light-blue/20 rounded-xl">
      <div className="flex justify-center">
        <CalendarIcon />
        <h1 className="font-bold pb-4 px-10">Today`s Event</h1>
      </div>
      {listEvent.map((list) => (
        <TodaysEventCard key={list.id} {...list} />
      ))}
    </div>
  );
}

export default TodaysEvent;
