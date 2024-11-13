export const optionCourse = ["Update", "Delete", "Pengingat"];

export const getColor = (key) =>
  key === "Update"
    ? key === "Pengingat"
      ? "bg-primary-70"
      : "bg-success-70"
    : "bg-danger-70";
