import React from "react";
import InformationHeader from "../../molecules/InformationHeader";
import ellipse from "/svg/ellipse.svg";
import DatasHeader from "./constant";

function HeaderDashboard({ dataStats }) {
  const data = DatasHeader({ dataStats });
  return (
    <section className="relative grid grid-cols-4 gap-3 py-5 drop-shadow-lg shadow-lg rounded-2xl w-12/12 bg-light-blue/20">
      {data.map((item, idx) => (
        <InformationHeader
          key={item.title}
          {...item}
          isLast={idx + 1 === data.length}
        />
      ))}

      <img
        src={ellipse}
        alt="ellipsis"
        className="absolute bottom-0 w-18 h-12"
      />
    </section>
  );
}

export default HeaderDashboard;
