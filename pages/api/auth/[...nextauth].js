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
    // signIn: "/auth/signin", // Displays signin buttons
    // signOut: '/auth/signout', // Displays form with sign out button
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // Used for check email page
    // newUser: "/page-name", // If set, new users will be directed here on first sign in
  },

  callbacks: {
    async signIn(user, account, profile, isNewUser) {
      return true;
    },

    async session({ session, token, user }) {
      if (token) {
        session.user.id = token.id;
        session.user.role = await getUserRoles(token.id);
      }
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.id = user.id;
        token.role = await getUserRoles(user.id);
      }
      return token;
    },
  },

  events: {
    signIn: async ({ user, account, profile, isNewUser }) => {
      if (isNewUser) {
        await setUserRoles(user.id);
      }
    },
  },

  debug: false,
});

const getUserRoles = async (userId) => {
  if (!userId) {
    return "guest";
  }

  const { role } = await User.findById({ _id: userId }).select({
    role: 1,
    _id: 0,
  });

  return role;
};

const setUserRoles = async (userId) => {
  if (!userId) {
    return;
  }

  const user = await User.findById({ _id: userId });

  if (!user) {
    return;
  }

  user.role = "user";
  user.save();
};
