/**
 * Strip all HTML tags from a string.
 * Used to prevent stored XSS — sanitize user-submitted text before
 * storing in the database or rendering in admin email notifications.
 *
 * This is intentionally a zero-allowlist strip: no tags survive.
 * If you ever need to allow specific tags, switch to the `sanitize-html` package.
 */
export function stripHtml(input: string): string {
  return input
    .replace(/<[^>]*>/g, "") // Remove all HTML tags
    .replace(/&lt;/g, "<") // Decode common HTML entities so they're visible as plain text
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#x2F;/g, "/")
    .trim();
}

/**
 * Sanitize all string fields in an object.
 * Returns a new object with all string values stripped of HTML tags.
 */
export function sanitizeFields<T extends Record<string, unknown>>(
  obj: T
): T {
  const sanitized = { ...obj };
  for (const key in sanitized) {
    const value = sanitized[key];
    if (typeof value === "string") {
      (sanitized as Record<string, unknown>)[key] = stripHtml(value);
    }
  }
  return sanitized;
}
