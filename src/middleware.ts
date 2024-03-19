import { NextResponse } from "next/server";
import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/login", "/signup"],
  afterAuth(auth, req) {
    if (!auth.userId && !auth.isPublicRoute)
      redirectToSignIn({ returnBackUrl: req.url });

    if (auth.userId && !auth.isPublicRoute) NextResponse.next();

    return NextResponse.next();
  },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
