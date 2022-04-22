import { connectToDatabase } from "libs/";
import { Category } from "models/";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  await connectToDatabase();
  const {
    query: {},
    body,
    method,
  } = req;

  const session = await getSession({ req });
  const s_user = session && session.user;

  switch (method) {
    case "GET":
      try {
        const categories = await Category.find({});
        if (categories) {
          res.status(200).json(categories);
        } else {
          res.status(404).json({ message: "Categories not found" });
        }
      } catch (error) {}
      break;

    case "POST":
      try {
        if (s_user.role === "admin") {
          const { name, slug, cover, description } = body;

          const category = await new Category({
            name,
            slug,
            description,
            cover,
            status: "draft",
          });

          const savedCategory = await category.save();

          if (savedCategory) {
            res.status(200).json({ status: "success", category });
          }

          if (!savedCategory) {
            res
              .status(400)
              .json({ status: "unsuccessful", message: "Category not saved" });
          }
        } else {
          res.status(401).json({ message: "Unauthorized" });
        }
      } catch (error) {
        res.status(401).json(error.message);
      }
      break;
  }
}
