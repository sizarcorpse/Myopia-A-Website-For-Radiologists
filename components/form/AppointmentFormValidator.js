import * as Yup from "yup";
export const validationSchema = Yup.object({
  firstName: Yup.string()
    .matches(/^[a-zA-Z]+$/, "Enter a Valid Name")
    .trim()
    .min(2, "First Name is Too Short")
    .max(30, "First Name is Too Long")
    .required(),
  lastName: Yup.string()
    .matches(/^[a-zA-Z]+$/, "Enter a Valid Name")
    .trim()
    .min(3, "Last Name is Too Short")
    .max(30, "Last Name is Too Long")
    .required(),
  phone: Yup.string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    )
    .required("Phone number can not be empty"),
  email: Yup.string()
    .email("Email you have entered is not valid")
    .min(8, "Email you have entered is not valid")
    .max(30, "Email you have entered is not valid")
    .lowercase()
    .required("Email can not be empty"),
  service: Yup.string()
    .matches(
      /(General X-Ray|Ultrasound|CT Scan|Interventional Procedures|Dental Imaging|Women's Imaging|Musculoskeletal Imaging|Pregnancy Imaging|Cardiac CT|Shear Wave Elastography|Alcium Scoring|BDM)/,
      "Do what it says"
    )
    .required("You Must Have Sector"),
  location: Yup.string()
    .matches(/(Velen|Novigrad)/, "Do what it says")
    .required("You Must Have Sector"),
  contactMessage: Yup.string()
    .min(5, "Please Enter A Valid Email")
    .max(500, "Email is Too Large"),
});
