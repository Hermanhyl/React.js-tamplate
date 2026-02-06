/**
 * Utility helper functions.
 * Add project-specific utilities here.
 */

/**
 * Concatenate class names, filtering out falsy values.
 * @param  {...string} classes
 * @returns {string}
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Format a date string to a locale-friendly format.
 * @param {string|Date} date
 * @param {string} locale
 * @returns {string}
 */
export function formatDate(date, locale = "en-US") {
  return new Date(date).toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
