import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import clientPromise from "@/lib/mongodb";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const client = await clientPromise;
        const db = client.db(process.env.MONGODB_DB);

        const user = await db
          .collection("users")
          .findOne({ email: credentials.email });
        if (!user) throw new Error("No user found with this email");

        const isValid = credentials.password === user.password;
        if (!isValid) throw new Error("Invalid password");

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          image: user.imageURL || null,
        };
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  pages: { signIn: "/auth/signIn" }, // login page

  callbacks: {
    // Google user save in MongoDB
    async signIn({ user, account }) {
      if (account.provider === "google") {
        try {
          const client = await clientPromise;
          const db = client.db(process.env.MONGODB_DB);

          const existingUser = await db
            .collection("users")
            .findOne({ email: user.email });

          if (!existingUser) {
            await db.collection("users").insertOne({
              name: user.name,
              email: user.email,
              imageURL: user.image,
              provider: "google",
              createdAt: new Date(),
            });
          }
        } catch (error) {
          console.error("Error saving Google user:", error);
          return false;
        }
      }
      return true;
    },

    // attach user id to session
    async session({ session, token }) {
      if (token.sub) {
        session.user.id = token.sub;
      }
      return session;
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id || token.sub;
      }
      return token;
    },

    // ✅ redirect after login
    async redirect({ url, baseUrl }) {
      // Google login বা credentials login এর পর product page এ redirect
      return "/products";
    },
  },
});

export { handler as GET, handler as POST, handler as PUT, handler as DELETE };
