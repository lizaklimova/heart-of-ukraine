import * as Yup from "yup";

const passwordSchema = Yup.object().shape({
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
});

export default passwordSchema;
