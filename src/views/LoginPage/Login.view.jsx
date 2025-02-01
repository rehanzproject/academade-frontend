import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Navbar from "../../components/templates/Navbar.template";
import useHTTP from "../../utils/hooks/useHTTP";
import sessionSlice from "../../config/redux/Session/sessionSlice/sessionSlice";
function Login(props) {
  const { login } = useHTTP();
  const [showPassword, setShowPassword] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const result = await login(values);
        if (result) {
          toast.dismiss();
          toast.success("Welcome back!", { autoClose: 1000 });
          setLoginSuccess(true);
          dispatch(sessionSlice.actions.updateToken(result));
          navigate("/dashboard");
        } else {
          formik.errors.email = "Incorrect Email !";
          formik.errors.password = "Incorrect Password !";
          toast.error("Incorrect Password/Email !");
        }
      } catch (error) {
        console.log("Login error:", error);
      }
    },
    validate: (values) => {
      const errors = {};

      if (!values.email) {
        errors.email = "Email dibutuhkan!";
      }

      if (!values.password) {
        errors.password = "Password dibutuhkan!";
      }

      return errors;
    },
  });

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div>
      <Navbar isLogged={props.isLogged} />
      <div className="bg-[url('/images/bgLanding.png')] bg-cover min-h-screen">
        <div className="flex justify-center items-center h-screen text-base">
          <div className="bg-white p-6 md:p-10 lg:p-20 rounded-xl shadow-md m-2 w-full max-w-md">
            <form onSubmit={formik.handleSubmit}>
              <label htmlFor="email" className="font-semibold">
                Email:
              </label>
              <input
                type="text"
                placeholder="Email"
                id="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className={`w-full p-2 rounded-md outline-none bg-gray-100 my-3 ${
                  formik.errors.email && formik.touched.email
                    ? "outline-red-500"
                    : "border-gray-300"
                }`}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.email}
                </div>
              )}
              <label htmlFor="password" className="block font-semibold mt-4">
                Password:
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  id="password"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  className={`w-full p-2 rounded-md outline-none bg-gray-100 my-3 ${
                    formik.errors.password && formik.touched.password
                      ? "outline-red-500"
                      : "border-gray-300"
                  }`}
                />
                <span
                  className={`absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer ${
                    showPassword ? "text-black" : "text-black"
                  }`}
                  onClick={handleTogglePassword}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </span>
              </div>
              {formik.touched.password && formik.errors.password && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.password}
                </div>
              )}
              <button
                type="submit"
                className="bg-blue-500 text-white mt-6 py-2 px-4 rounded-lg w-full hover:bg-blue-600 transition duration-300"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;