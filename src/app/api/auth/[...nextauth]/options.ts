import { requestHandler } from '@/services/server-request';
import type { NextAuthOptions, RequestInternal } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

interface JwtCreate {
  status: number
  message: string
  data: {
    accessToken: string
    refreshToken: string
  }
}

interface UserMe {
  status: number
  message: string
  data: {
    id: number
    name: string
    email: string
    type: string
    avatar: string
  }
}

interface User {
  id: number
  name: string
  email: string
  accessToken: string
  refreshToken: string
  type: string
  avatar: string
}

export const options: NextAuthOptions = {
  providers: [

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
        type: { label: "Type", type: "text", value: "user" },
      },

      async authorize(credentials: Record<"type" | "email" | "password", string> | undefined, _req: Pick<RequestInternal, "body" | "query" | "headers" | "method">): Promise<User | null> {
        try {
          var user: User | null = null;
          if (credentials?.type === "user") {
            const res = await requestHandler<JwtCreate>("auth/login", "POST", null, credentials);
            const userToken = res.data;
            if (userToken?.data.accessToken) {
              const userData = await fetch(process.env.NEXT_PUBLIC_API_URL + "user/me", {
                method: "GET",
                headers: {
                  Authorization: `Bearer ${userToken.data.accessToken}`,
                },
              });
              const userDataJson: UserMe = await userData.json();
              user = {
                ...userToken.data,
                ...userDataJson.data
              }
            }
          } else {
            const res = await requestHandler<JwtCreate>("auth/company/login", "POST", null, credentials);
            const userToken = res.data;

            if (userToken?.data.accessToken) {
              const userData = await fetch(process.env.NEXT_PUBLIC_API_URL + "company/me", {
                method: "GET",
                headers: {
                  Authorization: `Bearer ${userToken.data.accessToken}`,
                },
              });
              const userDataJson: UserMe = await userData.json();
              user = {
                ...userToken.data,
                ...userDataJson.data
              }
            }
          }
          return user;
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
      session.user = {
        id: token.id,
        name: token.name,
        email: token.email,
        accessToken: token.accessToken,
        refreshToken: token.refreshToken,
        avatar: token.avatar,
        type: token.type,
      } as any;
      return session;
    },

    async jwt({ token, user }) {
      if (user) return { ...token, ...user };

      return token;
    },
  },
};