import { connectToDatabase } from "libs/";
import { Category } from "models/";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  await connectToDatabase();
  const {
    query: { categoryId },
    body,
    method,
  } = req;

  const session = await getSession({ req });

  switch (method) {
    case "GET":
      try {
        const category = await Category.findById(categoryId);
        if (category) {
          res.status(200).json(category);
        } else {
          res.status(404).json({ message: "Category not found" });
        }
      } catch (error) {}
      break;

    case "PATCH":
      try {
        if (session && session.user.role === "admin") {
          const { name, slug, cover, description } = body;

          const categoryWillUpdated = {
            name,
            slug,
            description,
            cover,
          };

          const updatedCategory = await Category.findOneAndUpdate(
            { _id: categoryId },
            {
              $set: categoryWillUpdated,
            }
          );

          if (updatedCategory) {
            res.status(200).json({ status: "success", updatedCategory });
          }

          if (!updatedCategory) {
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
    case "DELETE":
      try {
        if (session && session.user.role === "admin") {
          const deletedCategory = await Category.findOneAndDelete({
            _id: categoryId,
          });
          if (deletedCategory) {
            res.status(200).json({ status: "success", deletedCategory });
          }
          if (!deletedCategory) {
            res
              .status(400)
              .json({
                status: "unsuccessful",
                message: "Category not deleted",
              });
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
