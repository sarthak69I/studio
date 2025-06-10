
// src/lib/access-manager.ts
'use client';

const PENDING_TOKEN_KEY = 'eleakPendingAccessRequestToken_v2'; // Changed key for new structure
const ACCESS_KEY = 'eleakCourseAccessKey';
const ACCESS_KEY_EXPIRY_MS = 6 * 60 * 60 * 1000; // 6 hours
const AUTO_GRANT_DELAY_MS = 25 * 1000; // 25 seconds

interface AccessToken {
  value: string;
  expiry: number;
}

interface PendingToken {
  value: string; // Unique identifier for the pending attempt
  initiationTime: number; // Timestamp when the process was started
  autoGrantTargetTime: number; // Timestamp when access should be automatically granted
}

// For Pending Token (indicates visit to Linkcents initiated and auto-grant is scheduled)
export const setPendingToken = (): PendingToken | null => {
  if (typeof window === 'undefined') return null;
  try {
    const tokenValue = Math.random().toString(36).substring(2, 15);
    const now = Date.now();
    const token: PendingToken = {
      value: tokenValue,
      initiationTime: now,
      autoGrantTargetTime: now + AUTO_GRANT_DELAY_MS
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
    // A pending token is "valid" if it exists; component logic will check autoGrantTargetTime
    // We can add a small buffer to its "existence" validity beyond autoGrantTargetTime if needed,
    // e.g., if autoGrantTargetTime + 5000 < Date.now() then it's too old. For now, just return if exists.
    if (token && token.autoGrantTargetTime) {
        // If it's way past its auto-grant time (e.g. > 1 minute), maybe clear it.
        if (Date.now() > token.autoGrantTargetTime + 60000) { // 1 min buffer
            localStorage.removeItem(PENDING_TOKEN_KEY);
            return null;
        }
        return token;
    }
    return null;
  } catch (error) {
    console.error('Error getting pending token from localStorage:', error);
    localStorage.removeItem(PENDING_TOKEN_KEY); // Clear corrupted token
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


// For Final Access Key (6-hour validity)
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
