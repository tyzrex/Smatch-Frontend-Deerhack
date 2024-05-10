import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';


export const options: NextAuthOptions = {
  providers: [

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, _req) {
        try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/jwt/create/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
            });
        const user = await res.json();

        return user
        } catch (err: any) {
          switch (err.status) {
            case 400:
            case 401:
              throw err;

            case 404:
              throw new Error("User not found");

            default: {
              throw new Error("Something went wrong");
            }
          }
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
    error: "/login",
    signOut: "/signout",
  },
  callbacks: {
    async session({ session, token }) {


      return session;
    },

    async jwt({ token, user }) {

      if (user) return { ...token, ...user };

      return token;
    },
  },
};