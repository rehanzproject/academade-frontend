import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { toast } from "react-toastify";
import configureStore from "redux-mock-store";
import Login from "../views/LoginPage/Login.view"; // Ensure this is the correct path to the Login component

jest.mock("../utils/hooks/useHTTP", () => ({
  __esModule: true,
  default: () => ({
    login: jest.fn(async ({ email, password }) => {
      if (email === "test@example.com" && password === "password123") {
        return { token: "mockToken" };
      }
      throw new Error("Invalid credentials");
    }),
  }),
}));

jest.mock("react-toastify", () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
    dismiss: jest.fn(),
  },
}));

const mockStore = configureStore([]);

describe("Login Component", () => {
  let mockReduxStore;

  beforeEach(() => {
    mockReduxStore = mockStore({});
  });

  test("renders Login form correctly", () => {
    render(
      <Provider store={mockReduxStore}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  test("shows validation errors on empty submit", async () => {
    render(
      <Provider store={mockReduxStore}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );

    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    expect(await screen.findByText(/Email dibutuhkan!/i)).toBeInTheDocument();
    expect(
      await screen.findByText(/Password dibutuhkan!/i)
    ).toBeInTheDocument();
  });

  test("handles successful login", async () => {
    render(
      <Provider store={mockReduxStore}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );

    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: "password123" },
    });

    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    expect(await toast.success).toHaveBeenCalledWith(
      "Welcome back!",
      expect.any(Object)
    );
  });

  test("shows error on invalid login", async () => {
    render(
      <Provider store={mockReduxStore}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );

    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "wrong@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: "wrongpassword" },
    });

    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    expect(await toast.error).toHaveBeenCalledWith(
      "Incorrect Password/Email !"
    );
  });
});
