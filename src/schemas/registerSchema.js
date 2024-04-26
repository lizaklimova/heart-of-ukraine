import * as Yup from "yup";

const registerSchema = Yup.object({
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
  email: Yup.string()
    .email("validation.email.invalid")
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      "validation.email.invalid"
    )
    .required("validation.required"),
  password: Yup.string()
    .min(8, "validation.password.length")
    .max(100, "validation.password.length")
    .matches(/[A-Z]/, "validation.password.uppercase")
    .matches(/[a-z]/, "validation.password.lowercase")
    .matches(/[0-9]/, "validation.password.digit")
    .matches(/^[a-zA-Z0-9]+$/, "validation.password.specialSym")
    .required("validation.required"),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref("password")], "validation.password.confirm")
    .required("validation.required"),
  agreement: Yup.boolean().oneOf([true]).required(),
});

export default registerSchema;
