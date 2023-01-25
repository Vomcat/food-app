import * as yup from "yup";

export const orderSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(30, "Name must not exceed 30 characters"),
  lastName: yup
    .string()
    .required("Last Name is required")
    .min(2, "Last Name must be at least 2 characters")
    .max(30, "Last Name must not exceed 30 characters"),
  email: yup.string().required("Fullname is required"),
  phoneNumber: yup.string().required("Fullname is required"),
  streetAddress: yup.string().required("Fullname is required"),
  streetNumber: yup.string().required("Fullname is required"),
  city: yup.string().required("Fullname is required"),
  postCode: yup.string().required("Fullname is required"),
});
