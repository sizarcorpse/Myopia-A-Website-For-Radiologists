import { connectToDatabase } from "libs/";
import { Category } from "models/";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  const {
    method,
    query: { categoryId },
  } = req;
  const session = await getSession({ req });
  await connectToDatabase();
  switch (method) {
    case "PATCH":
      try {
        if (session && session.user.role === "admin") {
          const isPublished = await Category.findByIdAndDraft(categoryId);

          if (isPublished) {
            res.status(200).json({ status: "success" });
          }

          if (!isPublished) {
            res.status(400).json({ status: "unsuccessful" });
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
