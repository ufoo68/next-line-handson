import NextAuth from "next-auth";
import LineProvider from "next-auth/providers/line";

const handler = NextAuth({
    providers: [
        LineProvider({
          clientId: process.env.LINE_CLIENT_ID!,
          clientSecret: process.env.LINE_CLIENT_SECRET!
        })
      ]
});

export {handler as GET,handler as POST}