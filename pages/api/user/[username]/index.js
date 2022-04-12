import { User } from "models/";
import { connectToDatabase } from "libs/";
import { getSession } from "next-auth/react";

export default async function handler(req, res, next) {
  await connectToDatabase();
  const {
    query: { username },
    body,
    method,
  } = req;

  const session = await getSession({
    req,
  });

  switch (method) {
    case "GET":
      try {
        if (session) {
          const user = await User.findByUsername(username);
          if (!user) {
            res.status(404).json({ message: "User not found" });
          }

          res.status(200).json(user);
        } else {
          res.status(401).json({ message: "Unauthenticated" });
        }
      } catch (error) {
        res.status(500).json({ error });
      }
      break;
  }
}
