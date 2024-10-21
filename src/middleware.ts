import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const userToken = req.cookies.get("githubUser");

  if (url.pathname === "/" && userToken) {
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }

  if (url.pathname === "/dashboard" && !userToken) {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard"],
};
