import { connectToDatabase } from "libs/";
import { Category } from "models/";

export default async function handler(req, res) {
  await connectToDatabase();
  const {
    query: { slug },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const category = await Category.findBySlugIsExists(slug);
        if (category) {
          res.status(200).json(category);
        } else {
          res
            .status(404)
            .json({ status: "unsuccessful", message: "Category not found" });
        }
      } catch (error) {}
      break;
  }
}
