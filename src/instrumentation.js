// Logs server-side render errors with full stack traces so they are visible
// in `wrangler tail` / wrangler dev output on Cloudflare Workers (OpenNext),
// where the default Next.js error digest is otherwise hard to trace.
export function register() {}

export async function onRequestError(err, request) {
  console.error(`[onRequestError] ${request.method} ${request.path}:`, err.stack || err);
}
