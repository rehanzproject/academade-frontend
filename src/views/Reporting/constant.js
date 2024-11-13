export const getThumbnailCourseContent = (state, userName) => {
  return [
    {
      title: "Name",
      content: state.user.name,
    },
    {
      title: "Email",
      content: state.user.email,
    },
    {
      title: "NIM",
      content: state.user.nim ?? '-',
    },
  ];
};
