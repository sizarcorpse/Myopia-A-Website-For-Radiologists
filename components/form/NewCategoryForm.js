import { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import {
  Box,
  styled,
  Grid,
  FormControl,
  TextField,
  TextareaAutosize,
  Typography,
  CircularProgress,
} from "@mui/material";
import { MPButton } from "components/ui";
import slugify from "slugify";
import { validationSchema } from "./NewCategoryFormValidator";
import SendIcon from "@mui/icons-material/Send";
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginFileValidateSize from "filepond-plugin-file-validate-size";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";

import { useSnackbar } from "notistack";
import isEmpty from "lodash/isEmpty";
registerPlugin(
  FilePondPluginImagePreview,
  FilePondPluginFileValidateSize,
  FilePondPluginFileValidateType
);

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

const CircularProgressStyled = styled(CircularProgress)(({ theme }) => ({
  color: theme.palette.primary.light,
  maxWidth: "20px",
  maxHeight: "20px",
}));

const NewCategoryForm = (props) => {
  const {
    categoryForm,
    isNewCategory = true,
    setCreatedCategory,
    mutateUpdatedCategory,
    mutateRecentCategories,
  } = props;
  const { enqueueSnackbar } = useSnackbar();
  const [uploadedCoverPhoto, setUploadedCoverPhoto] = useState(null);
  const [coverPhoto, setCoverPhoto] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isNewCategory) {
      const l = {
        source: categoryForm.cover.url,
        options: {
          type: "local",
        },
      };

      setCoverPhoto((coverPhoto) => [...coverPhoto, l]);
    }
  }, []);

  const initialValues = {
    name: categoryForm.name,
    slug: categoryForm.slug,
    description: categoryForm.description,
  };

  const handleUploadToCloudinary = async (file) => {
    const r = await fetch(
      `${process.env.CLOUD_URL}/${process.env.CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: file,
      }
    );
    return r;
  };

  const handleUploadImage = async () => {
    try {
      if (coverPhoto[0].file === undefined || coverPhoto[0].file === null) {
        throw new Error("No file selected");
      }

      const file = new FormData();
      file.append("file", coverPhoto[0].file);
      file.append("upload_preset", process.env.CLOUD_PRESET);

      if (isNewCategory) {
        const r = await handleUploadToCloudinary(file);
        const { url, public_id } = await r.json();
        return { url, public_id };
      }

      if (!isNewCategory) {
        if (
          uploadedCoverPhoto.size === coverPhoto[0].file.size &&
          uploadedCoverPhoto.type === coverPhoto[0].file.type
        ) {
          return categoryForm.cover;
        } else {
          const r = await handleUploadToCloudinary(file);
          const { url, public_id } = await r.json();
          return { url, public_id };
        }
      }
    } catch (e) {
      enqueueSnackbar("Attach a cover to your category", { variant: "error" });
    }
  };

  const handleCreateCategory = async ({ name, slug, description }) => {
    setLoading(true);
    try {
      const { url, public_id } = await handleUploadImage();

      const body = {
        name,
        slug,
        description,
        cover: { url, public_id },
      };

      const r = await fetch(`/api/category/`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const rd = await r.json();

      if (rd.status === "success") {
        setLoading(false);
        setCreatedCategory(rd);
        mutateRecentCategories();
        enqueueSnackbar("Category created successfully", {
          variant: "success",
        });
      } else {
        setLoading(false);
        enqueueSnackbar("Category create failed", { variant: "error" });
      }
    } catch (err) {
      setLoading(false);
      enqueueSnackbar("Category update failed", { variant: "error" });
    }
  };

  const handleUpdateCategory = async ({ name, slug, description }) => {
    try {
      setLoading(true);
      try {
        const { url, public_id } = await handleUploadImage();

        const body = {
          name,
          slug,
          description,
          cover: { url, public_id },
        };

        const r = await fetch(`/api/category/${categoryForm.id}`, {
          method: "PATCH",
          body: JSON.stringify(body),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });

        const rd = await r.json();

        if (rd.status === "success") {
          setLoading(false);

          mutateUpdatedCategory();

          enqueueSnackbar("Category created successfully", {
            variant: "success",
          });
        } else {
          setLoading(false);
          enqueueSnackbar("Category create failed", { variant: "error" });
        }
      } catch (err) {
        setLoading(false);
        enqueueSnackbar("Category update failed", { variant: "error" });
      }
    } catch (err) {
      enqueueSnackbar("Category update failed", { variant: "error" });
    }
  };

  const onSubmit = async (values, { resetForm }) => {
    isNewCategory ? handleCreateCategory(values) : handleUpdateCategory(values);
    try {
    } catch (e) {
      enqueueSnackbar("Submitting Failed", { variant: "error" });
    }
  };

  const handleHelperText = (error) => (
    <Typography variant="body2" component="span" color="#d32f2f">
      {error}
    </Typography>
  );

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
          const {
            values,
            touched,
            errors,
            handleChange,
            handleBlur,
            setFieldValue,
            setFieldError,
          } = props;

          const handleChangeName = async (e) => {
            handleChange(e);

            const slug = slugify(e.currentTarget.value, {
              replacement: "-",
              remove: /[^a-zA-Z0-9\s-]/g,
              lower: true,
            });

            setFieldValue("slug", slug, true);
          };

          const handleSlugOnBlur = async (e) => {
            handleBlur(e);

            const r = await fetch(`/api/category/check/${values.slug}`);
            const isExists = await r.json();

            if (isNewCategory) {
              if (isExists && isExists.slug === values.slug) {
                setFieldError("slug", "Category with this slug already exists");
              }
            }

            if (!isNewCategory && isExists.status != "unsuccessful") {
              if (isExists._id != categoryForm.id) {
                setFieldError("slug", "Category with this slug already exists");
              }
            }
          };

          return (
            <Form>
              <Grid container spacing={3}>
                <Grid item xxs={12} sm={12}>
                  <Box sx={{ maxWidth: "100%" }}>
                    <FilePond
                      files={coverPhoto}
                      onupdatefiles={setCoverPhoto}
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
                              load(blob), setUploadedCoverPhoto(blob);
                            });
                        },
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <TextFieldStyled
                      error={touched.name && Boolean(errors.name)}
                      autoComplete="name"
                      name="name"
                      variant="outlined"
                      id="name"
                      label="Category Name"
                      type="text"
                      size="small"
                      value={values.name}
                      onChange={handleChangeName}
                      onBlur={handleBlur}
                      helperText={touched.name && handleHelperText(errors.name)}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      gap: 1,
                    }}
                  >
                    <FormControl fullWidth>
                      <TextFieldStyled
                        error={touched.slug && Boolean(errors.slug)}
                        autoComplete="slug"
                        name="slug"
                        variant="outlined"
                        id="slug"
                        label="Category Slug"
                        type="text"
                        size="small"
                        value={values.slug}
                        onChange={handleChange}
                        onBlur={handleSlugOnBlur}
                        disabled={values.name === ""}
                        helperText={
                          touched.slug && handleHelperText(errors.slug)
                        }
                      />
                    </FormControl>
                  </Box>
                </Grid>
                <Grid item xxs={12}>
                  <FormControl
                    error={touched.description && Boolean(errors.description)}
                    fullWidth
                  >
                    <TextAreaStyled
                      variant="outlined"
                      minRows={8}
                      placeholder="Share something about you."
                      name="description"
                      id="description"
                      value={values.description}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <MPButton
                    variant="lightish"
                    type="submit"
                    icon={loading ? <CircularProgressStyled /> : <SendIcon />}
                    disabled={!isEmpty(errors) || loading}
                  >
                    {isNewCategory === true
                      ? "Create Category"
                      : "Update Category"}
                  </MPButton>
                </Grid>
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default NewCategoryForm;
