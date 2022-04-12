import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { connectToDatabase, clientPromise } from "libs/";
import { User } from "models/";

connectToDatabase();
export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  session: {
    jwt: true,
    strategy: "jwt",
  },

  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    encryption: true,
  },

  pages: {
    signIn: "/login", // Displays signin buttons
    // signOut: "/login", // Displays form with sign out button
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // Used for check email page
    // newUser: `/u/[user]/update`, // If set, new users will be directed here on first sign in
  },

  callbacks: {
    async signIn(user, account, profile, isNewUser) {
      return true;
    },

    async session({ session, token, user }) {
      if (token) {
        session.user.id = token.id;
        const { role, username } = await getUserInitials(token.id);
        session.user.role = role;
        session.user.username = username;
      }
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.id = user.id;
        const { role, username } = await getUserInitials(user.id);
        token.role = role;
        token.username = username;
      }
      return token;
    },
  },

  events: {
    signIn: async ({ user, account, profile, isNewUser }) => {
      if (isNewUser) {
        await setUserInitials(user);
      }
    },
  },

  debug: false,
});

const getUserInitials = async (userId) => {
  if (!userId) {
    return "guest";
  }

  const { role, username } = await User.findById({ _id: userId }).select({
    role: 1,
    username: 1,
    _id: 0,
  });

  return { role, username };
};

const setUserInitials = async (newUser) => {
  if (!newUser) {
    return;
  }

  const user = await User.findById({ _id: newUser.id });

  if (!user) {
    return;
  }

  user.role = "user";
  user.username = user.email.split("@")[0];
  user.save();
};
