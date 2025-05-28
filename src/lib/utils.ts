import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Safely extracts a route parameter as a string.
 * Handles undefined, string, or string[] types from useParams.
 * @param paramValue The parameter value from useParams().
 * @returns The parameter as a string, or an empty string if not found or invalid.
 */
export function getParamAsString(paramValue: string | string[] | undefined): string {
  if (Array.isArray(paramValue)) {
    return paramValue[0] || ''; // Use the first element if it's an array, or empty string
  }
  return paramValue || ''; // Use the value if it's a string, or empty string
}
