/**
 * Suppress a benign React 19 dev-only warning about client-rendered <script> tags.
 *
 * Two providers render a `next-themes`-style anti-flash inline <script> via
 * dangerouslySetInnerHTML that only ever mounts on the client:
 *   - `next-themes`, via our root ThemeProvider. Because the provider is a client
 *     component, its script mounts during the first client render (not hydration),
 *     and `next-themes` exposes no prop to disable it.
 *   - Inkeep's `@inkeep/cxkit-color-mode` provider, which wraps the InkeepModal*
 *     components we dynamically import with `ssr: false`.
 *
 * In both cases React 19 logs: "Encountered a script tag while rendering React
 * component...". The script is dead weight in our setup (the document is already
 * themed) and React strips this warning from production builds. We filter only
 * this exact message and pass everything else through untouched.
 */
const WARNING_PREFIX = 'Encountered a script tag while rendering React component';

let isPatched = false;

const suppressScriptTagWarning = () => {
  if (isPatched) return;
  if (typeof window === 'undefined') return;
  if (process.env.NODE_ENV !== 'development') return;

  isPatched = true;

  const originalError = console.error;
  console.error = (...args) => {
    const first = args[0];
    if (typeof first === 'string' && first.startsWith(WARNING_PREFIX)) {
      return;
    }
    originalError(...args);
  };
};

export default suppressScriptTagWarning;
