export const option = ["Update", "Quiz", "Delete"];

export const getBgColor = (key) => {
  if (key === "Update") {
    return "bg-success-70";
  }
  if (key === "Quiz") {
    return "bg-primary-70";
  }
  if (key === "Delete") {
    return "bg-danger-70";
  }
};
