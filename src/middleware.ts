import { auth } from "@/auth";
import { NextResponse } from "next/server";

const publicRoutes = ["/", "/login", "/signup"]; // Add your public routes here

export default auth((req) => {
  // console.log(req);
  // console.log(req.auth);
  // const path = req.nextUrl.pathname;
  // if (publicRoutes.includes(path)) NextResponse.next();
  // console.log("✅✅", req.nextUrl.pathname.startsWith("/courses"));
  // if (req.nextUrl.pathname.startsWith("/courses")) {
  //   return NextResponse.redirect(new URL("/login", req.url));
  // }
  if (!req.auth) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
});

export const config = {
  matcher: ["/profile/:path*", "/courses/:path*"],
};
