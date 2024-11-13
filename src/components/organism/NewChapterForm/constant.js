import * as Yup from "yup";

export const initCreateNewChapterValue = {
  name: "",
  description: "",
};

export const validationCreateNewChapter = Yup.object().shape({
  name: Yup.string().required(),
  description: Yup.string().required(),
});
