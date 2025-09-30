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
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    formik.setFieldValue("thumbnail", selectedFile?.name || "");
    formik.setFieldTouched("thumbnail", true);
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
      toast.success("Upload successful!");
      navigate("/course");
    } catch (error) {
      console.log(error.message);
      toast.error("Upload failed!");
    }
  };
  const handleRefresh = () => {
    formik.resetForm();
    setFile(null);
    formik.setFieldValue("thumbnail", "");
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
            <span className="text-red-500 font-semibold">*</span>
          </div>
          <div className={`w-full h-270 bg-gray-200 flex items-center rounded-xl justify-center rounded-10 border ${
            formik.touched.thumbnail && formik.errors.thumbnail
              ? "border-red-500 border-2"
              : "border-transparent"
          }`}>
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
          {formik.touched.thumbnail && formik.errors.thumbnail && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.thumbnail}</p>
          )}
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
              onBlur={formik.handleBlur}
              name="name"
              className={`w-full h-12 mt-3 bg-gray-200 p-5 rounded-lg border ${
                formik.touched.name && formik.errors.name
                  ? "border-red-500"
                  : "border-gray-500"
              }`}
              placeholder="e.g. 'Capstone Project 11'"
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
            )}
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
              onBlur={formik.handleBlur}
              className={`resize-y w-full h-40 mt-3 bg-gray-200 p-5 rounded-lg border ${
                formik.touched.description && formik.errors.description
                  ? "border-red-500"
                  : "border-gray-500"
              }`}
              placeholder="Type here..."
              rows="5"
            ></textarea>
            {formik.touched.description && formik.errors.description && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.description}</p>
            )}
          </div>
        </div>
      </div>
      <div className="mr-10 flex flex-row items-center gap-4">
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
            onBlur={formik.handleBlur}
            name="price"
            className={`w-full h-12 mt-1 bg-gray-200 p-5 rounded-lg border ${
              formik.touched.price && formik.errors.price
                ? "border-red-500"
                : "border-gray-500"
            }`}
            placeholder="00000"
          />
          {formik.touched.price && formik.errors.price && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.price}</p>
          )}
        </div>
        <div className="flex-1">
          <label htmlFor="coupon">
            <div className="flex items-center">
              <p className="font-semibold">Coupon</p>
            </div>
          </label>
          <input
            type="text"
            id="coupon"
            value={formik.values.coupon}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="coupon"
            className="w-full h-12 mt-1 bg-gray-200 p-5 rounded-lg border border-gray-500"
            placeholder="eg: LETSROCK"
          />
          {formik.touched.coupon && formik.errors.coupon && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.coupon}</p>
          )}
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