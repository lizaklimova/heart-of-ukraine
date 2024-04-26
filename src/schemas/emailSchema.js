import * as Yup from "yup";

const emailSchema = Yup.object().shape({
  email: Yup.string()
    .email("validation.email.invalid")
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      "validation.email.invalid"
    )

    .required("validation.required"),
});

export default emailSchema;
