import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const proxy = async (req) => {
  const path = req.nextUrl.pathname;
  const loginPath = new URL("/login", req.url);

  const isProtectedRoute = path.startsWith("/add-product");

  if (isProtectedRoute) {
    const cookieStore = await cookies();
    const authToken = cookieStore.get("auth-token");

    if (!authToken?.value) {
      return NextResponse.redirect(loginPath);
    }

    try {
      const isValid = authToken.value === process.env.NEXT_PUBLIC_AUTH_TOKEN;

      if (!isValid) {
        return NextResponse.redirect(loginPath);
      }
    } catch (error) {
      return NextResponse.redirect(loginPath);
    }
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/add-product/:path*"],
};
