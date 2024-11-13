import React from "react";
import { useLocation } from "react-router-dom";
import NewChapterForm from "../../components/organism/NewChapterForm/NewChapter.organism";

function NewChapter() {
  const { state } = useLocation();
  return <NewChapterForm {...state} />;
}

export default NewChapter;
