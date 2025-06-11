
// src/lib/access-manager.ts
'use client';

const PENDING_ACTIVATION_TOKEN_KEY = 'eleakPendingActivationToken_v3'; // Incremented version
const ACCESS_KEY = 'eleakCourseAccessKey_v4'; // Incremented version
const ACCESS_KEY_EXPIRY_MS = 12 * 60 * 60 * 1000; // 12 hours
const PENDING_ACTIVATION_TOKEN_MAX_AGE_MS = 5 * 60 * 1000; // 5 minutes

interface AccessToken {
  value: string;
  expiry: number;
}

export interface PendingActivationToken {
  value: string; // A random token value
  initiationTime: number; // Timestamp when the process was started
}

// For Pending Activation Token (used in the callback flow)
export const setPendingActivationToken = (): PendingActivationToken | null => {
  if (typeof window === 'undefined') return null;
  try {
    const tokenValue = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + Date.now().toString(36);
    const now = Date.now();
    const token: PendingActivationToken = {
      value: tokenValue,
      initiationTime: now,
    };
    localStorage.setItem(PENDING_ACTIVATION_TOKEN_KEY, JSON.stringify(token));
    return token;
  } catch (error) {
    console.error('Error setting pending activation token in localStorage:', error);
    return null;
  }
};

export const getValidPendingActivationToken = (): PendingActivationToken | null => {
  if (typeof window === 'undefined') return null;
  try {
    const storedToken = localStorage.getItem(PENDING_ACTIVATION_TOKEN_KEY);
    if (!storedToken) {
      console.warn('getValidPendingActivationToken: No token found in localStorage for key:', PENDING_ACTIVATION_TOKEN_KEY);
      return null;
    }

    const token: PendingActivationToken = JSON.parse(storedToken);
    if (token && token.value && token.initiationTime) {
      if (Date.now() > token.initiationTime + PENDING_ACTIVATION_TOKEN_MAX_AGE_MS) {
        localStorage.removeItem(PENDING_ACTIVATION_TOKEN_KEY); // Stale token
        console.warn('Pending activation token expired and removed. Initiation time:', new Date(token.initiationTime).toLocaleString(), 'Max age (ms):', PENDING_ACTIVATION_TOKEN_MAX_AGE_MS);
        return null;
      }
      return token;
    }
    localStorage.removeItem(PENDING_ACTIVATION_TOKEN_KEY); // Corrupted token
    console.warn('Pending activation token corrupted (missing value or initiationTime) and removed.');
    return null;
  } catch (error) {
    console.error('Error getting/parsing pending activation token from localStorage:', error);
    localStorage.removeItem(PENDING_ACTIVATION_TOKEN_KEY);
    return null;
  }
};

export const clearPendingActivationToken = () => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(PENDING_ACTIVATION_TOKEN_KEY);
    console.warn('Cleared pending activation token.');
  } catch (error) {
    console.error('Error clearing pending activation token from localStorage:', error);
  }
};


// For Final Access Key (12-hour validity)
export const setAccessKey = (): string | null => {
  if (typeof window === 'undefined') return null;
  try {
    const keyValue = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + Date.now().toString(36);
    const expiry = Date.now() + ACCESS_KEY_EXPIRY_MS;
    const keyData: AccessToken = { value: keyValue, expiry };
    localStorage.setItem(ACCESS_KEY, JSON.stringify(keyData));
    console.warn('Access key set. Expires:', new Date(expiry).toLocaleString());
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
      console.warn('Access key expired and removed.');
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
    console.warn('Cleared access key.');
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
