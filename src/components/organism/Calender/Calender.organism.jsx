import React, { useState } from "react";
import Calendar from "react-calendar";
import "./Calender.css";

function Calender() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        defaultActiveStartDate={new Date()}
        className="rounded-lg drop-shadow-lg"
      />
    </div>
  );
}
export default Calender;
