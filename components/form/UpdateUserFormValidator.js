import * as Yup from "yup";
export const validationSchema = Yup.object({
  name: Yup.string()
    .required("Please enter your name.")
    .trim()
    .min(3, "Please enter a valid name.")
    .max(30, "Please enter a valid name."),
  username: Yup.string()
    .matches(/^[a-z0-9_.]+$/, "Enter a valid username. (a-z0-9_)")
    .trim()
    .min(4, "Username is too short.")
    .max(30, "Username is Too long.")
    .lowercase("Please lowercase your username.")
    .required("Please enter a username."),
  email: Yup.string()
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
    .required(),
  bio: Yup.string().max(500, "Bio is too long.(limit 500 characters.)"),
  occupation: Yup.string().max(30, "Please enter a valid occupation."),
  location: Yup.string().max(30, "Please enter a valid location."),
  website: Yup.string().matches(
    /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm,
    "Please enter a valid website."
  ),
});
