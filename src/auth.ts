import NextAuth, { AuthError, CredentialsSignin } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { signInFormSchema } from "@/types/forms";
import { prisma } from "./lib/prisma";
import { z } from "zod";

class CustomAuthError extends CredentialsSignin {
  code = "Something went wrong while authenticating";
  // write a constructor to accept the error message
  constructor(message?: string) {
    super(message);
    if (message) {
      this.code = message;
    }
  }
}
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      credentials: { email: { type: "email" }, password: { type: "password" } },
      authorize: async (credentials) => {
        console.log("credentials", credentials);

        // const validationResult = signInFormSchema.safeParse(credentials); // validate the credentials (TODO)
        const user = await prisma.user.findUnique({
          where: {
            email: `${credentials.email}`,
          },
        });
        console.log("user", user);

        if (!user) {
          throw new CustomAuthError("No such email found");
        }

        if (user.password !== credentials.password) {
          throw new CustomAuthError("Password is incorrect");
        }

        return {
          id: user.id,
          email: user.email,
        };
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      return token;
    },
  },
  pages: {
    signIn: "/login",
  },
});

// function (credentials) ->
// step 1: validate the credentials
// step 2: check if user exists
// step 3: check if password is correct
// final step: return user object if user is found and password is correct
// xyz
