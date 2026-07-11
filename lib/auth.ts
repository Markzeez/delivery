import NextAuth, { type DefaultSession } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/mongodb";
import User from "@/lib/models/User";

declare module "next-auth" {
  interface User {
    role?: string;
  }
  interface Session {
    user: {
      id: string;
      role?: string;
    } & DefaultSession["user"];
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        try {
          await connectDB();

          const user = await User.findOne({
            email: (credentials.email as string).toLowerCase().trim(),
          }).lean();

          if (!user) return null;

          const passwordMatch = await bcrypt.compare(
            credentials.password as string,
            user.password
          );
          if (!passwordMatch) return null;

          return {
            id: user._id.toString(),
            name: user.fullName,
            email: user.email,
            role: user.role,
          };
        } catch (error) {
          console.error("[NextAuth authorize]", error);
          return null;
        }
      },
    }),
  ],

  session: { strategy: "jwt" },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.id = user.id;
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as string;
        session.user.id = token.id as string;
      }
      return session;
    },
  },

  pages: { signIn: "/login" },
  secret: process.env.AUTH_SECRET,
});
