import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string().trim().required("Category must have a name"),
  slug: Yup.string()
    .trim()
    .matches(/^[a-z0-9-]+$/, "Category slug must be alphanumeric and (-) only")
    .required("Category must have a slug"),
  // .test("is-equine", "${value} already exists", async (slug) => {
  //   const r = await fetch(`/api/category/check/${slug}`);
  //   const isExists = await r.json();
  //   return !isExists;
  // }),
  description: Yup.string().max(
    255,
    "Description must be less than 255 characters"
  ),
  cover: Yup.string(),
});
