import * as Yup from "yup";

const contactValidator = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  firstName: Yup.string()
    .required("First name is required")
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be at most 50 characters"),
  lastName: Yup.string()
    .required("Last name is required")
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must be at most 50 characters"),
  middleName: Yup.string()
    .optional()
    .max(50, "Middle name must be at most 50 characters"),
  phoneNumber: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9]+$/, "Phone number must only contain numbers")
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be at most 15 digits"),
  country: Yup.string()
    .required("Country is required")
    .min(2, "Country name must be at least 2 characters")
    .max(50, "Country name must be at most 50 characters"),
  location: Yup.string()
    .required("Location is required")
    .min(2, "Location must be at least 2 characters")
    .max(100, "Location must be at most 100 characters"),
  contactType: Yup.string()
    .required("Contact type is required")
    .oneOf(
      ["gold", "silver"],
      "Contact type must be either personal or business"
    ),
});

export default contactValidator;
