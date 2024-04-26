import * as Yup from "yup";

const changePasswordSchema = Yup.object().shape({
  oldPassword: Yup.string().required("validation.required"),
  newPassword: Yup.string()
    .min(8, "validation.password.length")
    .max(100, "validation.password.length")
    .matches(/[A-Z]/, "validation.password.uppercase")
    .matches(/[a-z]/, "validation.password.lowercase")
    .matches(/[0-9]/, "validation.password.digit")
    .matches(/^[a-zA-Z0-9]+$/, "validation.password.specialSym")
    .required("validation.required"),
  repeatNewPassword: Yup.string()
    .oneOf([Yup.ref("newPassword")], "validation.password.confirm")
    .required("validation.required"),
});

export default changePasswordSchema;
