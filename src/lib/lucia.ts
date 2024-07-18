import { Lucia } from "lucia";
import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
import { prisma } from "./prisma";
import { cookies } from "next/headers";

const adapter = new PrismaAdapter(prisma.session, prisma.user);

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    name: "auth-cookie",
    expires: false,
    attributes: {
      secure: process.env.NODE_ENV === "production",
    },
  },
});
// IMPORTANT!
declare module "lucia" {
  interface Register {
    Lucia: typeof lucia;
  }
}

// helper function to get session
export const getUser = async () => {
  const sessionId = cookies().get(lucia.sessionCookieName)?.value || null;
  if (!sessionId) return null;

  // extract session and user from session
  const { session, user } = await lucia.validateSession(sessionId);

  try {
    // check if session exist and is fresh
    if (session && session.fresh) {
      //  if exist then set a new refresh session
      const newSession = await lucia.createSessionCookie(session.id);
      cookies().set(newSession.name, newSession.value, newSession.attributes);
    } else {
      // else set a new blank session
      const emptySession = await lucia.createBlankSessionCookie();
      cookies().set(
        emptySession.name,
        emptySession.value,
        emptySession.attributes
      );
    }
  } catch (error) {}

  // find user from db
  const foundUser = await prisma.user.findUnique({
    where: {
      id: user?.id,
    },
    select: {
      email: true,
      name: true,
    },
  });
  // and return user
  return foundUser;
};
