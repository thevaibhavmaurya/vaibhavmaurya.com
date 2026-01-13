import { URL_HASH_TYPE } from "@/types";

/**
 * Adds query parameters to a given URL string.
 *
 * @param {string} urlString - The original URL to which parameters will be added.
 * @param {Record<string, string>} query - An object representing key-value pairs of query parameters.
 * @returns {string} - The modified URL with the added query parameters.
 *
 * This function attempts to modify the provided URL by appending any query parameters from the `query` object.
 * If the URL string is invalid, it returns the original string.
 */
export function addQueryParams(
  urlString: string,
  query: Record<string, string>
): string {
  try {
    const url = new URL(urlString);

    for (const [key, value] of Object.entries(query)) {
      url.searchParams.set(key, value);
    }

    return url.toString();
  } catch {
    // If the URL cannot be parsed, return the original urlString
    return urlString;
  }
}

/**
 * Converts a URL string to a cleaner name format for display.
 *
 * @param {string} url - The URL string to be converted.
 * @returns {string} - The transformed string without the protocol (http:// or https://).
 *
 * This function removes the protocol from the provided URL string for cleaner display purposes.
 */
export function urlToName(url: string) {
  return url.replace(/(^\w+:|^)\/\//, "");
}

/**
 * Generates a URL hash string from an array of string segments.
 *
 * @param {string[]} hash - An array where:
 *                  - `hash[0]` contains the root hash (e.g., "profile", "experience", "project").
 *                  - `hash[1]` contains the specific item's name (e.g., project name or experience company name).
 *                  - `hash[2]` contains the specific position in the experience.
 * @returns {string} - A concatenated string that represents the full hash (like "profile-experience-company-position").
 * If the provided array is empty, returns "home" as a default value.
 *
 * This function joins the provided segments into a single string, separated by hyphens, to structure the URL hash effectively.
 */
export function generateUrlHash(hash: string[]): string {
  if (hash.length === 0) return "home"; // Return home when there's no data
  return hash.join("--");
}

export function generateExperienceHash(
  experienceId: string,
  positionId?: string
): string {
  if (experienceId && !positionId)
    return generateUrlHash([URL_HASH_TYPE.EXPERIENCES, experienceId]);
  if (experienceId && positionId)
    return generateUrlHash([
      URL_HASH_TYPE.EXPERIENCES,
      experienceId,
      positionId,
    ]);
  return "";
}

export function generateProjectHash(projectId: string): string {
  return generateUrlHash([URL_HASH_TYPE.PROJECTS, projectId]);
}

export function addHashToString(string: string): string {
  return `#${string}`;
}
