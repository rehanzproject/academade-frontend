import React from "react";
import { useLocation } from "react-router-dom";
import NewCourseForm from "../../components/organism/NewCourseForm/NewCourse.organism";

function NewCourse() {
  const { state } = useLocation();
  return <NewCourseForm {...state} />;
}

export default NewCourse;
