import * as Yup from "yup";
export const validationSchema = Yup.object({
  referrerName: Yup.string()
    .matches(/^[a-zA-Z]+$/, "Enter a Valid Name")
    .trim()
    .min(2, "First Name is Too Short")
    .max(30, "First Name is Too Long")
    .required(),
  practiceName: Yup.string()
    .matches(/^[a-zA-Z]+$/, "Enter a Valid Name")
    .trim()
    .min(3, "Last Name is Too Short")
    .max(30, "Last Name is Too Long")
    .required(),
  phone: Yup.string().matches(
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
    "Phone number is not valid"
  ),
  type: Yup.string()
    .matches(
      /(A4 General|A5 General|Chiropractic|Physiotherapy|Dental|Podiatry)/,
      "Do what it says"
    )
    .required("You Must Have Sector"),
  contactMessage: Yup.string()
    .min(5, "Please Enter A Valid Email")
    .max(500, "Eamil is Too Large"),
});
