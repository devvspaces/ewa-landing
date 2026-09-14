export type UtmParams = Record<string, string>;

/**
 * Reads utm_* and ref params from the current URL so they can be merged
 * into every waitlist / application submission.
 */
export function readUtmParams(): UtmParams {
  if (typeof window === "undefined") return {};

  const params: UtmParams = {};
  new URLSearchParams(window.location.search).forEach((value, key) => {
    if (key.startsWith("utm_") || key === "ref") {
      params[key] = value;
    }
  });
  return params;
}
