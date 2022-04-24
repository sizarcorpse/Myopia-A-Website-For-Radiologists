import { connectToDatabase } from "libs/";
import { Category } from "models/";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  await connectToDatabase();
  const {
    query: { page, limit, sort, sortBy, status },
    body,
    method,
  } = req;

  const session = await getSession({ req });
  const s_user = session && session.user;

  switch (method) {
    case "GET":
      try {
        let _page;
        let _limit;
        let _sort;
        let _sortBy;

        page ? (_page = page) : (_page = 1);
        limit ? (_limit = limit) : (_limit = 5);
        sort ? (_sort = sort) : (_sort = "desc");
        sortBy ? (_sortBy = sortBy) : (_sortBy = "createdAt");

        let q =
          status === "published" || status === "draft"
            ? { status: status }
            : status === "all"
            ? {}
            : {};

        const categories = await Category.find(q)
          .sort({ [_sortBy]: _sort })
          .skip((_page - 1) * _limit)
          .limit(_limit)
          .exec();
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
