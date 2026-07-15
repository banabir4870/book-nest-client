/**
 * ensureJWT
 *
 * Exchanges the current Better Auth session token for a signed JWT
 * stored in the "booknest_jwt" httpOnly cookie on localhost:5000.
 *
 * Call this before any protected fetch() to Express so the JWT cookie
 * is present and the verifyJWT middleware can authenticate the request.
 *
 * The JWT cookie is owned by localhost:5000, so subsequent requests with
 * credentials: "include" will automatically send it.
 */

import { authClient } from "./auth-client";

const API_URL = "https://book-nest-server-delta.vercel.app";

export async function ensureJWT(): Promise<void> {
  // Get the current Better Auth session (same-origin call to Next.js /api/auth)
  const sessionResponse = await authClient.getSession();
  const token = (sessionResponse?.data as any)?.session?.token as string | undefined;

  if (!token) {
    throw new Error("No active session. Please log in.");
  }

  // Exchange the Better Auth session token for a signed JWT cookie on Express
  const res = await fetch(`${API_URL}/auth/token`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    credentials: "include", // so Express can set the booknest_jwt cookie
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.message || "Failed to authenticate with the server");
  }
}
