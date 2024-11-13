import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gambarSoal: null,
  quizzes: [
    {
      question: "",
      choices: [
        {
          text: "",
          valid: false,
        },
      ],
    },
  ],
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setGambarSoal: (state, action) => ({
      ...state,
      gambarSoal: action.payload,
    }),

    setForms: (state, action) => ({
      ...state,
      quizzes: action.payload,
    }),
  },
});

export default quizSlice;
