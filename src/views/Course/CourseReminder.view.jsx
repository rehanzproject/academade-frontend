import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import useHTTP from "../../utils/hooks/useHTTP";
import { toast } from "react-toastify";

function CourseReminder() {
  const { postRequest } = useHTTP();
  const { name_course } = useParams();
  const { state } = useLocation();
  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    messages: Yup.string().required("Messages is required"),
  });
  const navigate = useNavigate();
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const result = await postRequest(
        `/api/v1/admin/course/reminder?id=${state.course_id}`,
        values
      );
      if (result.success) {
        toast.success("Berhasil Memberikan pengingat!");
        navigate(-1);
      }
    } catch (error) {
      console.error("Failed to set reminder:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="flex flex-col gap-5 me-8 ">
      <p className="text-xl">Pengingat Course: {name_course}</p>

      <Formik
        initialValues={{
          title: "",
          messages: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-3">
           
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Judul
              </label>
              <Field
                type="text"
                id="title"
                name="title"
                className="mt-1 p-4 block w-full border rounded-md shadow-sm"
              />
              <ErrorMessage
                name="title"
                component="div"
                className="text-red-600 text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="messages"
                className="block text-sm font-medium text-gray-700"
              >
                Isi
              </label>
              <Field
                type="text"
                id="messages"
                name="messages"
                className="mt-1 py-10 px-4 block w-full border rounded-md shadow-sm"
              />
              <ErrorMessage
                name="messages"
                component="div"
                className="text-red-600 text-sm"
              />
            </div>
            <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Atur Pengingat
            </button>

            </div>
            
          </Form>
        )}
      </Formik>
    </section>
  );
}

export default CourseReminder;
