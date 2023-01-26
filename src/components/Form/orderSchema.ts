import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

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
  email: yup.string().email().required("Email is required"),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Phone number is required"),
  streetAddress: yup.string().required("Street Addres is required"),
  streetNumber: yup.string().required("Street number is required"),
  city: yup.string().required("City is required"),
  postCode: yup.string().required("Post code is required"),
});
