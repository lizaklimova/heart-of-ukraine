import * as Yup from "yup";

const changeSchema = Yup.object({
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
  region: Yup.string()
    .max(50, "validation.reg.max")
    .matches(
      /^[^\d!@#$%^&*()_+=\-[\]{};:"\\|,.<>/?]+$/,
      "validation.reg.matches"
    )
    .nullable(),
  organization: Yup.string().max(200, "validation.organization.max").nullable(),
  comment: Yup.string().max(500, "validation.about.max").nullable(),
});

export default changeSchema;
