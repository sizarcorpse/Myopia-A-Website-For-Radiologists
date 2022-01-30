import PropTypes from "prop-types";
import { Formik, Form } from "formik";
import {
  Box,
  styled,
  Grid,
  FormControl,
  TextField,
  TextareaAutosize,
  MenuItem,
  Button,
} from "@mui/material";
import { validationSchema } from "./AppointmentFormValidator";
import SendIcon from "@mui/icons-material/Send";
const TextFieldStyled = styled(TextField)(({ theme }) => ({
  "& .MuiInputLabel-root": {
    color: theme.palette.primary.dark,
  },

  "& .MuiOutlinedInput-root": {
    color: theme.palette.primary.dark,
    borderRadius: 4,

    "& fieldset": {
      backgroundColor: "transparent",
      borderColor: theme.palette.primary.main,
    },
    "&:hover": {
      "& fieldset.MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.primary.dark,
      },
    },
    "&.Mui-focused": {
      "& fieldset.MuiOutlinedInput-notchedOutline": {
        borderWidth: "1px",
        borderColor: theme.palette.primary.dark,
      },
    },
  },
}));

const TextAreaStyled = styled(TextareaAutosize)(({ theme }) => ({
  height: "150px !important",
  maxHeight: 300,
  padding: theme.spacing(1),
  borderRadius: 4,
  outline: "none",
  borderColor: theme.palette.primary.main,
  fontSize: theme.typography.body1.fontSize,
  fontFamily: theme.typography.body1.fontFamily,
  fontWeight: theme.typography.body1.fontWeight,
  backgroundColor: "transparent",
  "&::placeholder": {
    textOverflow: "ellipsis",
    color: theme.palette.primary.dark,
  },
  "&:hover": {
    borderColor: theme.palette.primary.dark,
  },
  "&:focus-visible ": {
    outline: "none",
    borderColor: theme.palette.primary.main,
  },
}));

const MpButtonStyled = styled(Button)(({ theme, variant, isLight }) => ({
  appearance: "none",
  position: "relative",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(1),
  height: theme.spacing(6),
  padding: theme.spacing(0, 2),
  fontSize: "1em !important",
  lineHeight: 1.3,
  fontWeight: 400,
  textAlign: "center",
  textDecoration: "none",
  textTransform: "none",
  color: isLight ? theme.palette.primary.dark : theme.palette.primary.light,
  cursor: "pointer",
  border: 0,
  borderRadius: 6,
  backgroundImage:
    "radial-gradient(100% 100% at 100% 0, #5adaff 0, #0383C7 100%)",
  boxShadow: `rgba(45, 35, 66, .4) 0 2px 4px,rgba(45, 35, 66, .3) 0 7px 13px -3px,rgba(58, 65, 111, .5) 0 -3px 0 inset`,
  transition: `box-shadow .15s,transform .15s`,
  willChange: "box-shadow,transform",

  "&:hover": {
    boxShadow: `rgba(45, 35, 66, .4) 0 4px 8px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #2D3663 0 -3px 0 inset`,
    transform: "translateY(2px)",
  },
  "&:active": {
    boxShadow: `#2D3663 0 3px 7px inset`,
    transform: "translateY(2px)",
  },
  "& svg": {
    fontSize: "1.5em",
  },
}));

const AppointmentForm = (props) => {
  const {
    choices: { locations, services },
  } = props;

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    location: "",
    contactMessage: "",
  };
  const onSubmit = async (values, { resetForm }) => {
    const { firstName, lastName, email, phone, service, location } = values;

    try {
      console.log(firstName, lastName, email, phone, service, location);
    } catch (e) {}
  };
  return (
    <Box>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnChange={false}
        validateOnBlur={true}
      >
        {(props) => {
          const { values, touched, errors, handleChange, handleBlur } = props;
          return (
            <Form>
              <Grid container spacing={3} align="center">
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <TextFieldStyled
                      error={touched.location && Boolean(errors.location)}
                      id="location"
                      name="location"
                      select
                      label="Select Location"
                      value={values.location}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      variant="outlined"
                      size="small"
                    >
                      {locations.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextFieldStyled>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <TextFieldStyled
                      error={touched.firstName && Boolean(errors.firstName)}
                      autoComplete="firstName"
                      name="firstName"
                      variant="outlined"
                      id="firstName"
                      label="First Name"
                      type="text"
                      size="small"
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <TextFieldStyled
                      error={touched.lastName && Boolean(errors.lastName)}
                      autoComplete="lastName"
                      name="lastName"
                      variant="outlined"
                      type="text"
                      id="lastName"
                      label="Last Name"
                      size="small"
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <TextFieldStyled
                      error={touched.email && Boolean(errors.email)}
                      autoComplete="email"
                      name="email"
                      variant="outlined"
                      id="email"
                      type="email"
                      label="Email Address"
                      size="small"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <TextFieldStyled
                      error={touched.phone && Boolean(errors.phone)}
                      autoComplete="tel"
                      name="phone"
                      variant="outlined"
                      id="phone"
                      type="tel"
                      label="Contact Number"
                      placeholder="1 666 333 9999"
                      size="small"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <TextFieldStyled
                      error={touched.service && Boolean(errors.service)}
                      id="service"
                      name="service"
                      select
                      label="Select Service"
                      value={values.service}
                      onChange={handleChange}
                      variant="outlined"
                      size="small"
                    >
                      {services.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextFieldStyled>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl
                    error={
                      touched.contactMessage && Boolean(errors.contactMessage)
                    }
                    fullWidth
                  >
                    <TextAreaStyled
                      variant="outlined"
                      minRows={8}
                      placeholder="Share something about your."
                      name="contactMessage"
                      id="contactMessage"
                      value={values.contactMessage}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <MpButtonStyled
                    variant="text"
                    type="submit"
                    endIcon={<SendIcon />}
                  >
                    Send To Us
                  </MpButtonStyled>
                </Grid>
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};

AppointmentForm.propTypes = {
  choices: PropTypes.shape({
    locations: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      })
    ).isRequired,
    services: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};

export default AppointmentForm;
