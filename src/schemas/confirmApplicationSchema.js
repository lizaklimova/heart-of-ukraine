import * as Yup from "yup";

const confirmApplicationSchema = Yup.object({
  firstName: Yup.string()
    .min(2, "validation.name.min")
    .max(50, "validation.name.max")
    .matches(
      /^[^\d!@#$%^&*()_+=\-[\]{};:"\\|,.<>/?]+$/,
      "validation.name.matches"
    )
    .required("validation.required"),
  lastName: Yup.string()
    .max(50, "validation.name.max")
    .matches(
      /^[^\d!@#$%^&*()_+=\-[\]{};:"\\|,.<>/?]*$/,
      "validation.name.matches"
    )
    .min(2, "validation.name.min")
    .nullable(),
  phoneNumber: Yup.string()
    .matches(/^\+380\d{9}$/, "validation.phone.invalid")
    .required("validation.required"),
  region: Yup.string().required("validation.required"),
  comment: Yup.string().max(9000),
  agreement: Yup.boolean().oneOf([true]).required(),
});

export default confirmApplicationSchema;
