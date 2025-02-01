export const handleUpdateOrCreateChapter = async ({
  createNewChapter,
  values,
  id,
  data,
  link_url,
  postRequest,
  updateRequest,
}) => {
  if (createNewChapter) {
    await postRequest(`/admin/module?id=${id}`, {
      ...values,
      video: link_url,
    });
  }

  await updateRequest(`/admin/module/update?id=${data.module_id}`, {
    ...values,
    video: link_url,
  });
};

const handleUploadImage = async (res, file, uploadImage) => {
  await uploadImage(
    `/admin/upload/thumbnail?id=${res?.data?.course_id || res}`,
    file
  );
  
};

export const handleUpdateOrCreateCourse = async ({
  createNewCourse,
  values,
  postRequest,
  updateRequest,
  id,
  uploadImage,
  file,
}) => {
  if (createNewCourse) {
    const res = await postRequest("/admin/course", values);
    await handleUploadImage(res, file, uploadImage);
  }
  await updateRequest(`/admin/course?id=${id}`, values);
  await handleUploadImage(id, file, uploadImage);
};
