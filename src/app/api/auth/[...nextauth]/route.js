import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "@/lib/mongodb";
// import bcrypt from "bcryptjs";

export const authOptions = {
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

        // MongoDB থেকে user search
        const user = await db
          .collection("users")
          .findOne({ email: credentials.email });

        if (!user) {
          throw new Error("No user found with this email");
        }

        // যদি password hashed থাকে
        // const isValid = await bcrypt.compare(credentials.password, user.password);

        // যদি plain text password use করো (যেমন তোমার data)
        const isValid = credentials.password === user.password;

        if (!isValid) {
          throw new Error("Invalid password");
        }

        // Return user object (session এ save হবে)
        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          image: user.imageURL || null,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/signIn", // custom login page
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
