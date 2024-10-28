import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  const requestHeaders = new Headers(req.headers);

  requestHeaders.set("x-url", req.url);
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ["/archive", "/archive/category/:path*", "/archive/search/:path*"],
};
