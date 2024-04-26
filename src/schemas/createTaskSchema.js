import * as Yup from "yup";

const createTaskSchema = Yup.object({
  title: Yup.string()
    .min(5, "createTask.validation.titleMin")
    .max(100, "createTask.validation.titleMax")
    .required("createTask.validation.enterData"),
  description: Yup.string()
    .min(40, "createTask.validation.descrMin")
    .max(9000)
    .required("createTask.validation.enterData"),
  comment: Yup.string().max(9000),
});

export default createTaskSchema;
