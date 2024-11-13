import React, { useState, useMemo, useCallback } from "react";
import { useFormik } from "formik";
import { storage } from "../../../config/firebase/firebase";
import { getDownloadURL } from "firebase/storage";
import {
  initCreateNewChapterValue,
  validationCreateNewChapter,
} from "./constant";
import { useNavigate } from "react-router-dom";
import { handleUpdateOrCreateChapter } from "../../../utils/helper/updateOrCreateMethod";
import { toast } from "react-toastify";
import ArrowPathIcon from "../../atoms/Icons/ArrowPathIcon.atom";
import useHTTP from "../../../utils/hooks/useHTTP";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

const NewChapterForm = ({ createNewChapter, id, data = {} }) => {
  const { postRequest, updateRequest } = useHTTP();
  const navigate = useNavigate();
  const initData = useMemo(
    () => (createNewChapter ? initCreateNewChapterValue : data),
    [createNewChapter, data]
  );
  const [file, setFile] = useState("");

  const formik = useFormik({
    initialValues: initData,
    validationSchema: validationCreateNewChapter,
    onSubmit: async (values, { resetForm }) => {
      if (values) {
        await handleUpload(values);
        toast.success(
          `Successfully ${
            createNewChapter ? "created new" : "updated"
          } module!`,
          { autoClose: 1000 }
        );
        resetForm();
      }
    },
  });

  const handleRefresh = () => {
    formik.resetForm();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };

  const handleUpload = useCallback(async (values) => {
    try {
      if (file) {
        const snapshot = await storage.ref("/videos/" + file.name).put(file);
        const downloadURL = await getDownloadURL(snapshot.ref);

        await handleUpdateOrCreateChapter({
          createNewChapter,
          values,
          id,
          data,
          link_url: downloadURL,
          postRequest,
          updateRequest,
        });
      } else {
        await handleUpdateOrCreateChapter({
          createNewChapter,
          values,
          id,
          data,
          link_url: undefined,
          postRequest,
          updateRequest,
        });
      }

      navigate(`/course/${data.id_course || id}`);
      formik.resetForm();
    } catch (error) {
      console.error("Error during file upload or chapter update:", error);
    }
  }, [file, createNewChapter, id, data, postRequest, updateRequest, navigate, formik]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-8 flex items-center">
        <p className="text-2xl">New Chapter</p>
        <div
          className="ml-2 transform-origin-center cursor-pointer"
          onClick={handleRefresh}
        >
          <ArrowPathIcon />
        </div>
      </div>
      <div className="w-full flex flex-row gap-6">
        <div className="w-full mr-10">
          <div className="mb-2">
            <label htmlFor="chapterName">
              <div className="flex items-center">
                <p className="font-semibold">Chapter Name</p>
                <span className="text-red-500 font-semibold">*</span>
              </div>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoFocus
              className="w-full h-12 mt-3 bg-gray-200 p-5 rounded-lg border border-gray-500"
              placeholder="e.g. “Capstone Project 11”"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row gap-6">
        <div className="mb-4">
          <label htmlFor="chapterDes">
            <div className="flex items-center">
              <label className="font-semibold">Chapter Description</label>
              <span className="text-red-500 font-semibold">*</span>
            </div>
          </label>
          <ReactQuill
            id="description"
            name="description"
            value={formik.values.description}
            onChange={(value) => formik.setFieldValue("description", value)}
            className="w-[701px] h-[390px] mt-3 bg-gray-200 p-5 rounded-lg border border-gray-500"
            placeholder="Type here..."
          />
        </div>
        <div className="w-80 mr-8">
          <div className="mb-2 flex items-center">
            <p className="font-semibold">Uploaded Videos</p>
          </div>
          <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded-lg">
            <div className="image-container">
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-5">
                    <span className="text-center text-gray-500 truncate ... w-36">
                      {file ? file.name : data.video || "Link"}
                    </span>
                  </div>
                  <input
                    id="video"
                    type="file"
                    value={formik.values.video && ""}
                    onChange={handleFileChange}
                    className="absolute w-48 h-10 overflow-hidden opacity-0"
                    accept="video/*"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex font-semibold mt-6">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="justify-start bg-warning-10 hover:bg-warning-30 text-black py-2 px-6 rounded-lg text-sm fw-bold"
        >
          Back
        </button>
        <button
          type="submit"
          className="justify-end ml-auto mr-8 bg-warning-10 hover:bg-warning-30 text-black py-2 px-6 rounded-lg text-sm"
        >
          {createNewChapter ? "Upload" : "Update"}
        </button>
      </div>
    </form>
  );
};

export default NewChapterForm;
