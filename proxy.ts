import { NextRequest, NextResponse } from "next/server";

const WINDOW_MS = 60_000;
const RATE_LIMITS = [
  { pattern: /^\/api\/(leads|contact)/, limit: 12 },
  { pattern: /^\/api\//, limit: 120 },
  { pattern: /^\//, limit: 240 },
] as const;

type Bucket = {
  count: number;
  resetAt: number;
};

const buckets = new Map<string, Bucket>();

function getClientIp(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return (
    request.headers.get("x-real-ip") ||
    request.headers.get("cf-connecting-ip") ||
    "unknown"
  );
}

function getLimit(pathname: string) {
  return RATE_LIMITS.find(({ pattern }) => pattern.test(pathname))?.limit ?? 120;
}

function pruneExpiredBuckets(now: number) {
  if (buckets.size < 1_000) return;

  for (const [key, bucket] of buckets) {
    if (bucket.resetAt <= now) {
      buckets.delete(key);
    }
  }
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const now = Date.now();
  const limit = getLimit(pathname);
  const key = `${getClientIp(request)}:${pathname.startsWith("/api/") ? pathname : "page"}`;
  const bucket = buckets.get(key);

  pruneExpiredBuckets(now);

  if (!bucket || bucket.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + WINDOW_MS });

    const response = NextResponse.next();
    response.headers.set("X-RateLimit-Limit", String(limit));
    response.headers.set("X-RateLimit-Remaining", String(limit - 1));
    return response;
  }

  if (bucket.count >= limit) {
    return NextResponse.json(
      { error: "Prea multe cereri. Incearca din nou peste un minut." },
      {
        status: 429,
        headers: {
          "Retry-After": String(Math.ceil((bucket.resetAt - now) / 1000)),
          "X-RateLimit-Limit": String(limit),
          "X-RateLimit-Remaining": "0",
        },
      },
    );
  }

  bucket.count += 1;

  const response = NextResponse.next();
  response.headers.set("X-RateLimit-Limit", String(limit));
  response.headers.set("X-RateLimit-Remaining", String(limit - bucket.count));
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)"],
};
