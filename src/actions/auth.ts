// "use server";

// import { lucia } from "@/lib/lucia";
// import { prisma } from "@/lib/prisma";
// import { signInFormSchema, signUpFormSchema } from "@/types/forms";
// import { cookies } from "next/headers";
// import { z } from "zod";

// const signUpAction = async (data: z.infer<typeof signUpFormSchema>) => {
//   console.table(data);

//   try {
//     const existingUser = await prisma.user.findUnique({
//       where: {
//         email: data.email,
//       },
//     });

//     if (existingUser) {
//       return {
//         success: false,
//         error: "User already exists",
//       };
//     }

//     const newUser = await prisma.user.create({
//       data: {
//         email: data.email,
//         password: data.password,
//         name: data.name,
//       },
//     });

//     // creating new session with new users id
//     const session = await lucia.createSession(newUser.id, {});
//     // creating a session cookie for user
//     const sessionCookie = lucia.createSessionCookie(session.id);
//     // setting that cookie in the browser
//     cookies().set(
//       sessionCookie.name,
//       sessionCookie.value,
//       sessionCookie.attributes
//     );
//     return {
//       success: true,
//       data: newUser,
//     };
//   } catch (error) {
//     return {
//       success: true,
//       data: `Something went wrong ${error}`,
//     };
//   }
// };
// const signInAction = async (data: z.infer<typeof signInFormSchema>) => {
//   try {
//     const user = await prisma.user.findUnique({
//       where: {
//         email: data.email,
//       },
//     });
//     if (!user) {
//       return {
//         success: false,
//         error: "User not found",
//       };
//     }

//     if (user.password !== data.password) {
//       return {
//         success: false,
//         error: "Password is incorrect",
//       };
//     }

//     const session = await lucia.createSession(user.id, {});
//     const sessionCookie = lucia.createSessionCookie(session.id);
//     cookies().set(
//       sessionCookie.name,
//       sessionCookie.value,
//       sessionCookie.attributes
//     );
//     return {
//       success: true,
//     };
//   } catch (error) {
//     return {
//       success: true,
//       error: `Something went wrong ${error}`,
//     };
//   }
// };

// export { signInAction, signUpAction };
