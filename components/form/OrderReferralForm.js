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
import { validationSchema } from "./OrderReferralFormValidator";
import SendIcon from "@mui/icons-material/Send";
const TextFieldStyled = styled(TextField)(({ theme }) => ({
  "& .MuiInputLabel-root": {
    color: theme.palette.primary.dark,
  },

  "& .MuiOutlinedInput-root": {
    color: theme.palette.primary.dark,
    borderRadius: 4,

    "& fieldset": {
      backgroundColor: theme.palette.common.white,
      borderColor: theme.palette.primary.dark,
    },
    "&:hover": {
      "& fieldset.MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.primary.main,
      },
    },
    "&.Mui-focused": {
      "& fieldset.MuiOutlinedInput-notchedOutline": {
        borderWidth: "1px",
        borderColor: theme.palette.primary.main,
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
  borderColor: theme.palette.primary.dark,
  fontSize: theme.typography.body1.fontSize,
  fontFamily: theme.typography.body1.fontFamily,
  fontWeight: theme.typography.body1.fontWeight,
  backgroundColor: theme.palette.common.white,
  "&::placeholder": {
    textOverflow: "ellipsis",
    color: theme.palette.primary.dark,
  },
  "&:hover": {
    borderColor: theme.palette.primary.main,
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
    "radial-gradient(100% 100% at 100% 0, #0383C7 0, #2D3663 100%)",
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

const OrderReferralForm = (props) => {
  const {
    choices: { types },
  } = props;

  const initialValues = {
    referrerName: "",
    practiceName: "",
    phone: "",
    type: "",
    contactMessage: "",
  };
  const onSubmit = async (values, { resetForm }) => {
    const { referrerName, practiceName, phone, type, contactMessage } = values;

    try {
      console.log(referrerName, practiceName, phone, type, contactMessage);
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
                <Grid item xxs={12} sm={6}>
                  <FormControl fullWidth>
                    <TextFieldStyled
                      error={
                        touched.referrerName && Boolean(errors.referrerName)
                      }
                      autoComplete="referrerName"
                      name="referrerName"
                      variant="outlined"
                      id="referrerName"
                      label="Referrer Name"
                      type="text"
                      size="small"
                      value={values.referrerName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </FormControl>
                </Grid>
                <Grid item xxs={12} sm={6}>
                  <FormControl fullWidth>
                    <TextFieldStyled
                      error={
                        touched.practiceName && Boolean(errors.practiceName)
                      }
                      autoComplete="practiceName"
                      name="practiceName"
                      variant="outlined"
                      fullWidth
                      type="text"
                      id="practiceName"
                      label="Practice Name"
                      size="small"
                      value={values.practiceName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </FormControl>
                </Grid>
                <Grid item xxs={12} sm={6}>
                  <FormControl fullWidth>
                    <TextFieldStyled
                      error={touched.phone && Boolean(errors.phone)}
                      autoComplete="tel"
                      name="phone"
                      variant="outlined"
                      fullWidth
                      id="phone"
                      type="tel"
                      label="Phone Number"
                      size="small"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </FormControl>
                </Grid>

                <Grid item xxs={12} sm={6}>
                  <FormControl fullWidth>
                    <TextFieldStyled
                      error={touched.type && Boolean(errors.type)}
                      id="type"
                      name="type"
                      select
                      fullWidth
                      label="Select type"
                      value={values.type}
                      onChange={handleChange}
                      variant="outlined"
                      size="small"
                    >
                      {types.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextFieldStyled>
                  </FormControl>
                </Grid>

                <Grid item xxs={12} sm={12}>
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
                <Grid item xxs={12}>
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

// OrderReferralForm.propTypes = {
//   choices: PropTypes.shape({
//     locations: PropTypes.arrayOf(
//       PropTypes.shape({
//         value: PropTypes.string.isRequired,
//         label: PropTypes.string.isRequired,
//       })
//     ).isRequired,
//     services: PropTypes.arrayOf(
//       PropTypes.shape({
//         value: PropTypes.string.isRequired,
//         label: PropTypes.string.isRequired,
//       })
//     ),
//   }).isRequired,
// };

export default OrderReferralForm;
