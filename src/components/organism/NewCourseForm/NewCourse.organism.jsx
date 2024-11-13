import React, { useMemo, useState } from "react";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  initCreateNewCourseValue,
  validationCreateNewCourse,
} from "./constant.js";
import CameraIcon from "../../atoms/Icons/CameraIcon.atom.jsx";
import ArrowPathIcon from "../../atoms/Icons/ArrowPathIcon.atom.jsx";
import useHTTP from "../../../utils/hooks/useHTTP.jsx";
import { useNavigate } from "react-router-dom";
import { handleUpdateOrCreateCourse } from "../../../utils/helper/updateOrCreateMethod.js";

const NewCourseForm = ({ createNewCourse, data = {} }) => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const { postRequest, updateRequest, uploadImage } = useHTTP();
  const initData = useMemo(
    () => (createNewCourse ? initCreateNewCourseValue : data),
    []
  );
  const handleImageChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (values) => {
    try {
      await handleUpdateOrCreateCourse({
        createNewCourse,
        values,
        postRequest,
        updateRequest,
        id: initData.course_id,
        uploadImage,
        file,
      });
    } catch (error) {
      console.log(error.message);
    }
    toast.success("Upload successful!");
    navigate("/course");
  };
  const handleRefresh = () => {
    formik.resetForm();
  };
  const formik = useFormik({
    initialValues: initData,
    validationSchema: validationCreateNewCourse,
    onSubmit: (values) => {
      if (values) {
        handleUpload(values);
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-8 flex items-center">
        <p className="text-2xl">New Course</p>

        <div className="ml-2 cursor-pointer" onClick={handleRefresh}>
          <ArrowPathIcon />
        </div>
      </div>
      <div className="w-full flex flex-row gap-6">
        <div className="w-96">
          <div className="mb-2 flex items-center">
            <p className="font-semibold">Course Thumbnail</p>
          </div>
          <div className="w-full h-270 bg-gray-200 flex items-center rounded-xl justify-center rounded-10">
            <div className="image-container">
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    {file || initData?.thumbnail ? (
                      <p className="w-12 overflow-hidden">
                        {file?.name || initData?.thumbnail}
                      </p>
                    ) : (
                      <CameraIcon />
                    )}
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    onChange={handleImageChange}
                    className="hidden"
                    accept="image/png, image/gif, image/jpeg"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="w-5/6 mr-10">
          <div className="mb-2">
            <label htmlFor="name">
              <div className="flex items-center">
                <p className="font-semibold">Course Name</p>
                <span className="text-red-500 font-semibold">*</span>
              </div>
            </label>
            <input
              type="text"
              id="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              name="name"
              className="w-full h-12 mt-3 bg-gray-200 p-5 rounded-lg border border-gray-500"
              placeholder="e.g. “Capstone Project 11”"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description">
              <div className="flex items-center">
                <label className="font-semibold">Create Description</label>
                <span className="text-red-500 font-semibold">*</span>
              </div>
            </label>
            <textarea
              name="description"
              id="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              className="resize-y w-full h-40 mt-3 bg-gray-200 p-5 rounded-lg border border-gray-500"
              placeholder="Type here..."
              rows="5"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="mr-10 flex flex-row items-center gap-4"> {/* Adjusted this div */}
        <div className="flex-1">
          <label htmlFor="price">
            <div className="flex items-center">
              <p className="font-semibold">Course Price</p>
              <span className="text-red-500 font-semibold">*</span>
            </div>
          </label>
          <input
            type="text"
            id="price"
            value={formik.values.price}
            onChange={formik.handleChange}
            name="price"
            className="w-full h-12 mt-1 bg-gray-200 p-5 rounded-lg border border-gray-500"
            placeholder="00000"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="level">
            <div className="flex items-center">
              <p className="font-semibold">Coupon</p>
              <span className="text-red-500 font-semibold">*</span>
            </div>
          </label>
          <input
            type="text"
            id="coupon"
            value={formik.values.coupon}
            onChange={formik.handleChange}
            name="coupon"
            className="w-full h-12 mt-1 bg-gray-200 p-5 rounded-lg border border-gray-500"
            placeholder="eg: LETSROCK"
          />
        </div>
      </div>
      <div className="flex font-semibold mt-6">
        <button
          type="button"
          onClick={() => navigate("/course")}
          className="justify-start bg-warning-10 hover:bg-warning-30 duration-500 text-black py-2 px-6 rounded-lg text-sm fw-bold"
        >
          Back
        </button>
        <button
          type="submit"
          className="justify-end ml-auto mr-10 bg-warning-10 hover:bg-warning-30 duration-500 text-black py-2 px-6 rounded-lg text-sm"
        >
          {createNewCourse ? "Upload" : "Update"}
        </button>
      </div>
      <ToastContainer />
    </form>
  );
};

export default NewCourseForm;
