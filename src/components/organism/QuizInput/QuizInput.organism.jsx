import React from "react";
import { Field } from "formik";
import Trashcan from "../../atoms/Icons/Trashcan.atom";
import PlusIcon from "../../atoms/Icons/PlusIcon.atom";

function QuizInput({ arrayHelpers, values }) {
  return (
    <div className="w-full max-h-fit overflow-y-auto">
      {values.quizzes &&
        values.quizzes.length > 0 &&
        values.quizzes.map((_, index) => (
          <div
            key={index}
            className={`flex py-5 ${
              (values.quizzes.length > 1 &&
                index !== values.quizzes.length - 1) ||
              index !== values.quizzes.length - 1
                ? `border-b-2 border-secondary-10`
                : null
            }`}
          >
            <div className="flex flex-col w-5/6">
              <div className="flex flex-col ms-5 me-96">
                <div className="flex py-5">
                  <Field
                    name={`quizzes[${index}].question`}
                    className="border-b-2 border-gray-600 h-12 bg-gray-100 w-11/12 outline-none px-2"
                    placeholder="Ketik Soal disini"
                  />
                </div>
                <div className="flex flex-col items-start gap-3 py-4 px-5">
                  <div className="flex justify-items-center gap-4">
                    <Field
                      name={`quizzes[${index}].valid`}
                      type="radio"
                      value={values.quizzes[index].text1}
                      className="w-5"
                      checked={
                        values.quizzes[index].text1 ===
                        values.quizzes[index].valid
                      }
                    />
                    <Field
                      name={`quizzes[${index}].text1`}
                      className="px-2 py-1 outline-none"
                      placeholder="Ketik jawaban disini"
                    />
                  </div>
                  <div className="flex justify-items-center gap-4">
                    <Field
                      name={`quizzes[${index}].valid`}
                      type="radio"
                      value={values.quizzes[index].text2}
                      className="w-5"
                      checked={
                        values.quizzes[index].text2 ===
                        values.quizzes[index].valid
                      }
                    />
                    <Field
                      name={`quizzes[${index}].text2`}
                      className="px-2 py-1 outline-none"
                      placeholder="Ketik jawaban disini"
                    />
                  </div>
                  <div className="flex justify-items-center gap-4">
                    <Field
                      name={`quizzes[${index}].valid`}
                      type="radio"
                      value={values.quizzes[index].text3}
                      className="w-5"
                      checked={
                        values.quizzes[index].text3 ===
                        values.quizzes[index].valid
                      }
                    />
                    <Field
                      name={`quizzes[${index}].text3`}
                      className="px-2 py-1 outline-none"
                      placeholder="Ketik jawaban disini"
                    />
                  </div>
                  <div className="flex justify-items-center gap-4">
                    <Field
                      name={`quizzes[${index}].valid`}
                      type="radio"
                      value={values.quizzes[index].text4}
                      className="w-5"
                      checked={
                        values.quizzes[index].text4 ===
                        values.quizzes[index].valid
                      }
                    />
                    <Field
                      name={`quizzes[${index}].text4`}
                      className="px-2 py-1 outline-none"
                      placeholder="Ketik jawaban disini"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col border-l-2 border-secondary-10 gap-4 px-4 py-8 w-1/6">
              <button
                type="button"
                onClick={() => arrayHelpers.remove(index)} // remove a quizzes from the list
              >
                <Trashcan width={24} height={24} />
              </button>
              <button
                type="button"
                onClick={() =>
                  arrayHelpers.push({
                    question: "",
                    text1: "",
                    text2: "",
                    text3: "",
                    text4: "",
                    valid: false,
                  })
                }
              >
                <PlusIcon width={24} height={26} />
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default QuizInput;
