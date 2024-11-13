import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import RootRouter from "./config/router/index";
import store from "./config/redux/store";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Provider store={store}>
      <RootRouter />
      <ToastContainer position="top-center" />
    </Provider>
  );
}

export default App;
