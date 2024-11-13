import { combineReducers } from "redux";
import quizSlice from "./Quiz/quizSlice";
import sessionSlice from "./Session/sessionSlice/sessionSlice";

const reducer = combineReducers({
  quiz: quizSlice.reducer,
  session: sessionSlice.reducer,
});

export default reducer;
