import { User } from "models/";
import { connectToDatabase } from "libs/";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  await connectToDatabase();
  const {
    query: { username: q_username },
    body,
    method,
  } = req;

  const session = await getSession({
    req,
  });

  const s_user = session.user;

  switch (method) {
    case "GET":
      try {
        if (session && s_user.username === q_username) {
          const isUser = await User.findProfileByUsername(q_username);

          if (!isUser) {
            res.status(404).json({ message: "User not found" });
          }

          res.status(200).json(isUser);
        } else {
          const user = await User.findPublicProfileByUsername(q_username);

          if (!user) {
            res.status(404).json({ message: "User not found" });
          }

          res.status(200).json(user);
        }
      } catch (error) {
        res.status(401).json(error.message);
      }
      break;

    case "PATCH":
      try {
        if (session && s_user.username === q_username) {
          const isUser = await User.findProfileByUsername(q_username);

          if (!isUser) {
            res.status(404).json({ message: "User not found" });
          }

          const updateResponse = await User.updateUserProfile(
            s_user.username,
            body
          );

          if (updateResponse) {
            res.status(200).json({ status: "success", user: updateResponse });
          } else {
            res.status(404).json({ status: "unsuccessful" });
          }
        } else {
          res.status(401).json({ message: "Unauthorized" });
        }
      } catch (error) {
        res.status(500).json({ message: "Unauthorized" });
      }
  }
}
