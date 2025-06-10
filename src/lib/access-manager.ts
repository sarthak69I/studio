
// src/lib/access-manager.ts
'use client';

const PENDING_TOKEN_KEY = 'eleakPendingAccessRequestToken_v3'; // Incremented version
const ACCESS_KEY = 'eleakCourseAccessKey_v2'; // Incremented version
const ACCESS_KEY_EXPIRY_MS = 12 * 60 * 60 * 1000; // 12 hours
export const AUTO_GRANT_DELAY_MS = 25 * 1000; // 25 seconds - Export for use in page
const PENDING_TOKEN_MAX_AGE_MS = 5 * 60 * 1000; // 5 minutes for pending token validity

interface AccessToken {
  value: string;
  expiry: number;
}

export interface PendingToken {
  value: string; // A random token value
  initiationTime: number; // Timestamp when the process was started
}

// For Pending Token
export const setPendingToken = (): PendingToken | null => {
  if (typeof window === 'undefined') return null;
  try {
    const tokenValue = Math.random().toString(36).substring(2, 15);
    const now = Date.now();
    const token: PendingToken = {
      value: tokenValue,
      initiationTime: now,
    };
    localStorage.setItem(PENDING_TOKEN_KEY, JSON.stringify(token));
    return token;
  } catch (error) {
    console.error('Error setting pending token in localStorage:', error);
    return null;
  }
};

export const getValidPendingToken = (): PendingToken | null => {
  if (typeof window === 'undefined') return null;
  try {
    const storedToken = localStorage.getItem(PENDING_TOKEN_KEY);
    if (!storedToken) return null;

    const token: PendingToken = JSON.parse(storedToken);
    // Check if the token itself is valid and not too old
    if (token && token.value && token.initiationTime) {
      if (Date.now() > token.initiationTime + PENDING_TOKEN_MAX_AGE_MS) {
        localStorage.removeItem(PENDING_TOKEN_KEY); // Stale token
        return null;
      }
      return token;
    }
    localStorage.removeItem(PENDING_TOKEN_KEY); // Corrupted token
    return null;
  } catch (error) {
    console.error('Error getting pending token from localStorage:', error);
    localStorage.removeItem(PENDING_TOKEN_KEY);
    return null;
  }
};

export const clearPendingToken = () => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(PENDING_TOKEN_KEY);
  } catch (error) {
    console.error('Error clearing pending token from localStorage:', error);
  }
};


// For Final Access Key (12-hour validity)
export const setAccessKey = (): string | null => {
  if (typeof window === 'undefined') return null;
  try {
    const keyValue = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const expiry = Date.now() + ACCESS_KEY_EXPIRY_MS;
    const keyData: AccessToken = { value: keyValue, expiry };
    localStorage.setItem(ACCESS_KEY, JSON.stringify(keyData));
    return keyValue;
  } catch (error) {
    console.error('Error setting access key in localStorage:', error);
    return null;
  }
};

export const getValidAccessKey = (): string | null => {
  if (typeof window === 'undefined') return null;
  try {
    const storedKey = localStorage.getItem(ACCESS_KEY);
    if (!storedKey) return null;

    const keyData: AccessToken = JSON.parse(storedKey);
    if (Date.now() < keyData.expiry) {
      return keyData.value;
    } else {
      localStorage.removeItem(ACCESS_KEY); // Expired key
      return null;
    }
  } catch (error) {
    console.error('Error getting access key from localStorage:', error);
    localStorage.removeItem(ACCESS_KEY); // Clear corrupted key
    return null;
  }
};

export const clearAccessKey = () => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(ACCESS_KEY);
  } catch (error) {
    console.error('Error clearing access key from localStorage:', error);
  }
};

export const getAccessKeyExpiry = (): number | null => {
  if (typeof window === 'undefined') return null;
  try {
    const storedKey = localStorage.getItem(ACCESS_KEY);
    if (!storedKey) return null;
    const keyData: AccessToken = JSON.parse(storedKey);
    return keyData.expiry;
  } catch {
    return null;
  }
};
