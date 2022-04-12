// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }
import { getSession } from "next-auth/react";

export default async (req, res) => {
  const session = await getSession({ req });

  console.log(session);

  if (session) {
    res.status(200).json({ session: "YO WHATS GOOD BRODIE." });
  } else {
    res.status(401).json({ error: "STRANGER DANGER " });
  }
};
