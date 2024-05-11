import NextAuth from 'next-auth';

declare module "next-auth" {
  interface Session {
    user: {
      id: number;
      name:string;
      email: string;
      accessToken: JWT;
      refreshToken: JWT;
      type: string;
      avatar: string;
    };
  }

  interface User{
    id: number;
    name: string;
    email: string;
    accessToken: JWT;
    refreshToken: JWT;
    type: string;
    avatar: string;
  };
}