import React from "react";
import QuizIcon from "../../atoms/Icons/QuizIcon.atom";

function QuizHeader() {
  return (
    <div className="flex items-center gap-4">
      <QuizIcon />
      <h1 className="font-medium text-lg">Create Quiz</h1>
    </div>
  );
}

export default QuizHeader;
