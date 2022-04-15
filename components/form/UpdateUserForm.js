import { useState } from "react";
import PropTypes from "prop-types";
import { Formik, Form } from "formik";
import {
  Box,
  styled,
  Grid,
  FormControl,
  TextField,
  TextareaAutosize,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";
import { validationSchema } from "./UpdateUserFormValidator";
import SendIcon from "@mui/icons-material/Send";
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginFileValidateSize from "filepond-plugin-file-validate-size";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";

import { useSession } from "next-auth/react";
import { useSnackbar } from "notistack";
import isEmpty from "lodash/isEmpty";
registerPlugin(
  FilePondPluginImagePreview,
  FilePondPluginFileValidateSize,
  FilePondPluginFileValidateType
);

const UpdateUserFormStyled = styled(Box)(({ theme }) => ({
  maxWidth: "600px",
  margin: "0 auto",
}));

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

const MpButtonStyled = styled(Button)(({ theme, isLight }) => ({
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

const CircularProgressStyled = styled(CircularProgress)(({ theme }) => ({
  color: theme.palette.primary.light,
  maxWidth: "20px",
  maxHeight: "20px",
}));

const UpdateUserForm = (props) => {
  const { updateForm, mutate } = props;
  const [tempFile, setTempFile] = useState(null);
  const [files, setFiles] = useState([
    {
      source: updateForm.image,
      options: {
        type: "local",
      },
    },
  ]);
  const [loading, setLoading] = useState(false);
  const { data: session, status } = useSession();
  const { enqueueSnackbar } = useSnackbar();

  const initialValues = {
    name: updateForm.name,
    username: updateForm.username,
    email: updateForm.email,
    bio: updateForm.bio,
    occupation: updateForm.occupation,
    location: updateForm.location,
    website: updateForm.website,
  };

  const handlePhotoUpload = async () => {
    if (
      tempFile.size === files[0].file.size &&
      tempFile.type === files[0].file.type
    ) {
      return updateForm.image;
    } else {
      const file = new FormData();
      file.append("file", files[0].file);
      file.append("upload_preset", "myopia-upload");

      const r = await fetch(
        `https://api.cloudinary.com/v1_1/dvgqaevma/image/upload`,
        {
          method: "POST",
          body: file,
        }
      );

      const { url } = await r.json();

      return url;
    }
  };

  const updateUserProfile = async ({
    name,
    username,
    bio,
    location,
    website,
    occupation,
  }) => {
    try {
      setLoading(true);

      const image = await handlePhotoUpload();

      const updateUserData = {
        name,
        image,
        username,
        bio,
        location,
        website,
        occupation,
      };

      const r = await fetch(`/api/user/${session.user.username}`, {
        method: "PATCH",
        body: JSON.stringify(updateUserData),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const rd = await r.json();
      if (rd.status === "success") {
        setLoading(false);
        enqueueSnackbar("Profile updated successfully", { variant: "success" });
        mutate();
      } else {
        setLoading(false);
        enqueueSnackbar("Profile update failed", { variant: "error" });
      }
    } catch (e) {
      setLoading(false);
      enqueueSnackbar("Profile update failed", { variant: "error" });
    }
  };

  const onSubmit = async (values, { resetForm }) => {
    try {
      await updateUserProfile(values);
    } catch (e) {
      enqueueSnackbar("Profile update failed", { variant: "error" });
    }
  };

  const handleHelperText = (error) => (
    <Typography variant="body2" component="span">
      {error}
    </Typography>
  );

  return (
    <UpdateUserFormStyled>
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
                <Grid item xxs={12} sm={12}>
                  <Box sx={{ maxWidth: "100%" }}>
                    <FilePond
                      files={files}
                      onupdatefiles={setFiles}
                      allowMultiple={true}
                      maxFiles={1}
                      name="file"
                      labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                      maxFileSize={200000}
                      labelMaxFileSizeExceeded={"File is too large. Max 200Kb"}
                      acceptedFileTypes={["image/*"]}
                      server={{
                        load: (source, load) => {
                          fetch(source)
                            .then((response) => response.blob())
                            .then((blob) => {
                              load(blob), setTempFile(blob);
                            });
                        },
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xxs={12} sm={6}>
                  <FormControl fullWidth>
                    <TextFieldStyled
                      error={touched.name && Boolean(errors.name)}
                      autoComplete="name"
                      name="name"
                      variant="outlined"
                      id="name"
                      label="Name"
                      type="text"
                      size="small"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={handleHelperText(errors.name)}
                    />
                  </FormControl>
                </Grid>
                <Grid item xxs={12} sm={6}>
                  <FormControl fullWidth>
                    <TextFieldStyled
                      error={touched.username && Boolean(errors.username)}
                      autoComplete="username"
                      name="username"
                      variant="outlined"
                      id="username"
                      label="Username"
                      type="text"
                      size="small"
                      value={values.username}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={handleHelperText(errors.username)}
                    />
                  </FormControl>
                </Grid>
                <Grid item xxs={12} sm={6}>
                  <FormControl fullWidth>
                    <TextFieldStyled
                      error={touched.email && Boolean(errors.email)}
                      disabled
                      autoComplete="email"
                      name="email"
                      variant="outlined"
                      id="email"
                      label="Email"
                      type="email"
                      size="small"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </FormControl>
                </Grid>
                <Grid item xxs={12} sm={6}>
                  <FormControl fullWidth>
                    <TextFieldStyled
                      error={touched.occupation && Boolean(errors.occupation)}
                      autoComplete="occupation"
                      name="occupation"
                      variant="outlined"
                      id="occupation"
                      label="Occupation"
                      type="text"
                      size="small"
                      value={values.occupation}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={handleHelperText(errors.occupation)}
                    />
                  </FormControl>
                </Grid>
                <Grid item xxs={12} sm={6}>
                  <FormControl fullWidth>
                    <TextFieldStyled
                      error={touched.location && Boolean(errors.location)}
                      autoComplete="location"
                      name="location"
                      variant="outlined"
                      id="location"
                      label="Location"
                      type="text"
                      size="small"
                      value={values.location}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={handleHelperText(errors.location)}
                    />
                  </FormControl>
                </Grid>
                <Grid item xxs={12} sm={6}>
                  <FormControl fullWidth>
                    <TextFieldStyled
                      error={touched.website && Boolean(errors.website)}
                      autoComplete="website"
                      name="website"
                      variant="outlined"
                      id="website"
                      label="Website"
                      type="text"
                      size="small"
                      value={values.website}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={handleHelperText(errors.website)}
                    />
                  </FormControl>
                </Grid>
                <Grid item xxs={12}>
                  <FormControl
                    error={touched.bio && Boolean(errors.bio)}
                    fullWidth
                  >
                    <TextAreaStyled
                      variant="outlined"
                      minRows={8}
                      placeholder="Share something about you."
                      name="bio"
                      id="bio"
                      value={values.bio}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </FormControl>
                </Grid>

                <Grid item xxs={12}>
                  <MpButtonStyled
                    variant="text"
                    type="submit"
                    endIcon={
                      loading ? <CircularProgressStyled /> : <SendIcon />
                    }
                    disabled={!isEmpty(errors) || loading}
                  >
                    Update Profile
                  </MpButtonStyled>
                </Grid>
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </UpdateUserFormStyled>
  );
};

UpdateUserForm.propTypes = {
  updateForm: PropTypes.object.isRequired,
};

export default UpdateUserForm;
