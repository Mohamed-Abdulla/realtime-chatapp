import { getToken } from "next-auth/jwt";
// import { withAuth } from "next-auth/middleware";
// // import { NextResponse } from "next/server";

// export default withAuth(async function middleware(req) {
//   // const pathname = req.nextUrl.pathname;
//   console.log(req);
//   //Manage route protection

//   // const isAuth = await getToken({ req });
//   // const isLoginPage = pathname.startsWith("/login");
//   // const apiAuthPrefix: string = "/api/auth";
//   // const isApiAuthRoute = pathname.startsWith(apiAuthPrefix);
//   // const sensitiveRoutes = ["/dashboard"];

//   // // const isAccessingSensitiveRoute = sensitiveRoutes.some((route) => pathname.startsWith(route));
//   // if (isApiAuthRoute) return null;

//   // if (isLoginPage) {
//   //   if (isAuth) {
//   //     return NextResponse.redirect(new URL("/dashboard", req.url));
//   //   }
//   //   return null;
//   //   // return NextResponse.next();
//   // }
//   // if (!isAuth) {
//   //   return NextResponse.redirect(new URL("/login", req.url));
//   // }
//   // if (pathname === "/") {
//   //   return NextResponse.redirect(new URL("/dashboard", req.url));
//   // }

//   // return null;
// });

import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  const isAuth = await getToken({ req });

  const isLoginPage = pathname.startsWith("/login");
  const apiAuthPrefix: string = "/api/auth";
  const isApiAuthRoute = pathname.startsWith(apiAuthPrefix);

  if (isApiAuthRoute) return null;

  if (isLoginPage) {
    if (isAuth) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
    return null;
  }
  if (!isAuth) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (pathname === "/") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return null;
}
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
