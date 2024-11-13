import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
};

const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    updateToken: (state, action) => ({
      ...state,
      token: action.payload,
    }),
    removeToken: (state, action) => ({
      ...state,
      token: "",
    }),
  },
});

export default sessionSlice;
