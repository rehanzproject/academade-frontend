import { useSelector } from "react-redux";

export const useQuizImage = () => useSelector((state) => state.quiz.gambarSoal);
export const useForms = () => useSelector((state) => state.quiz.forms);
